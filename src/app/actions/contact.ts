"use server";

import { portfolioData } from "@/data/portfolio";

export interface ContactResponse {
  success: boolean;
  error?: string;
  message?: string;
}

export async function submitContact(formData: {
  name: string;
  email: string;
  message: string;
  _gotcha?: string;
}): Promise<ContactResponse> {
  try {
    const { name, email, message, _gotcha } = formData;

    // 1. Honeypot check: If the hidden field is filled, silently succeed (neutralize spam bot)
    if (_gotcha && _gotcha.trim().length > 0) {
      return { success: true, message: "Message sent. I’ll get back to you soon." };
    }

    // 2. Validate input fields
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || trimmedName.length < 2) {
      return {
        success: false,
        error: "Please enter your name (at least 2 characters).",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return {
        success: false,
        error: "Please enter a message of at least 10 characters.",
      };
    }

    const isProduction = process.env.NODE_ENV === "production";
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || portfolioData.personal.email;

    // 3. In production, require live dispatch infrastructure
    if (isProduction && (!resendApiKey || !recipientEmail)) {
      console.error(
        "[Contact Action - Production Error] Missing RESEND_API_KEY or recipient email in production environment."
      );
      return {
        success: false,
        error: `Delivery service is temporarily unconfigured. Please contact directly via email at ${portfolioData.personal.email}.`,
      };
    }

    // 4. In development without RESEND_API_KEY, explicitly simulate and log locally
    if (!resendApiKey) {
      console.log("-----------------------------------------");
      console.log("[Portfolio Contact Form - Development Simulation Mode]");
      console.log("RESEND_API_KEY is not configured in local environment.");
      console.log(`From: ${trimmedName} <${trimmedEmail}>`);
      console.log(`To: ${recipientEmail}`);
      console.log(`Message:\n${trimmedMessage}`);
      console.log(
        "Note: Development-only fallback active. In production, this condition strictly returns a failure state unless confirmed by Resend."
      );
      console.log("-----------------------------------------");

      return {
        success: true,
        message: "Message sent. I’ll get back to you soon.",
      };
    }

    // 5. Dispatch email via Resend API
    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: trimmedEmail,
          subject: `[Portfolio Contact] New message from ${trimmedName}`,
          text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
        }),
      });

      const resendData = await resendResponse.json().catch(() => ({}));

      if (!resendResponse.ok) {
        console.error("[Contact Action] Resend dispatch failed with status", resendResponse.status, resendData);
        return {
          success: false,
          error: `Message could not be delivered through the email service. Please email directly at ${portfolioData.personal.email}.`,
        };
      }

      if (!resendData || !resendData.id) {
        console.error("[Contact Action] Resend dispatch returned unconfirmed response:", resendData);
        return {
          success: false,
          error: `Message delivery unconfirmed by service. Please email directly at ${portfolioData.personal.email}.`,
        };
      }

      // Confirmed successful delivery through Resend
      return {
        success: true,
        message: "Message sent. I’ll get back to you soon.",
      };
    } catch (deliveryError) {
      console.error("[Contact Action] Network error communicating with Resend:", deliveryError);
      return {
        success: false,
        error: `Unable to connect to delivery service. Please email directly at ${portfolioData.personal.email}.`,
      };
    }
  } catch (error) {
    console.error("[Contact Action] Unexpected error:", error);
    return {
      success: false,
      error: `An unexpected error occurred. Please reach out directly at ${portfolioData.personal.email}.`,
    };
  }
}
