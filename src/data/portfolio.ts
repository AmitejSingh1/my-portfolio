export interface PersonalInfo {
  name: string;
  pronouns?: string;
  tagline: string;
  currentRole: string;
  affiliation: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  substackUrl: string;
  resumeUrl: string;
  availability: string;
  heroIntro?: string;
  bioParagraphs: string[];
}

export interface MetricHighlight {
  label: string;
  value: string;
  detail: string;
}

export interface NowItem {
  category: string;
  title: string;
  description: string;
  tag: string;
  link?: string;
  linkText?: string;
}

export interface ProjectBenchmark {
  metric: string;
  value: string;
  comparison?: string;
}

export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  problem: string;
  architecture: string[];
  keyInnovation: string;
  benchmarks: ProjectBenchmark[];
  technologies: string[];
  githubUrl: string;
  articleUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
  featuredNote?: string;
}

export interface LabProject {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  badge?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  gpa?: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Amitej Singh Datta",
    tagline: "AI/ML Engineer & Researcher",
    currentRole: "M.S. in Data Science & Machine Learning",
    affiliation: "National University of Singapore (NUS)",
    location: "Singapore · India",
    email: "amitejsingh5@gmail.com",
    phone: "+65 90555056",
    linkedinUrl: "https://www.linkedin.com/in/amitej-singh-datta-2a3022286/",
    githubUrl: "https://github.com/AmitejSingh1",
    substackUrl: "https://substack.com/@amitejsinghdatta",
    resumeUrl: "/AmitejSinghDatta_Resume.pdf",
    availability: "Available for SWE & ML Internships, Research & Technical Roles",
    heroIntro: "Computer Science researcher and builder exploring AI, machine learning, and the systems around them. I like turning ideas into things that can be tested, measured, and used.",
    bioParagraphs: [
      "I am an AI/ML-focused Computer Science graduate currently pursuing my M.S. in Data Science & Machine Learning at the National University of Singapore (NUS). My primary work sits at the intersection of computer vision, medical image segmentation, and parameter-efficient fine-tuning (PEFT) of vision foundation models.",
      "My research includes first-author published work (ICCIS 2025, Springer) on hybrid deep learning architectures for prostate boundary delineation in micro-ultrasound scans. Separately, I developed from-scratch LoRA adaptation pipelines for medical foundation models (MedSAM) that cut trainable parameters by 82% while exceeding baseline segmentation accuracy.",
      "I prioritize methodical experimentation, verified benchmarks, and building reliable end-to-end software — taking systems from mathematical formulation to reproducible training pipelines and deployed applications.",
    ],
  } as PersonalInfo,

  heroMetrics: [
    {
      value: "ICCIS 2025",
      label: "First-Author Paper",
      detail: "Accepted for publication in Springer Book Series",
    },
    {
      value: "95.7%",
      label: "MedSAM LoRA Dice",
      detail: "+43.8pp over zero-shot with 82% fewer parameters",
    },
    {
      value: "661.7M",
      label: "Records Analyzed",
      detail: "EU DSA content moderation transparency benchmark",
    },
    {
      value: "9.09",
      label: "Undergrad GPA",
      detail: "B.Tech Computer Science (AI & ML) at VIT Chennai",
    },
  ] as MetricHighlight[],

  now: {
    sectionEyebrow: "01 / Now",
    sectionTitle: "In Rotation",
    sectionSubtitle: "Current research, engineering explorations, and active focus areas.",
    items: [
      {
        category: "Research",
        title: "Parameter-Efficient Vision Adaptation",
        description:
          "Investigating low-rank adaptation (LoRA) mechanisms inside Vision Transformers (ViT) and medical foundation models like MedSAM, pairing attention surgery with embedding caching to make fine-tuning fast on consumer GPUs.",
        tag: "PEFT · MedSAM",
      },
      {
        category: "Academics",
        title: "Graduate Studies at NUS",
        description:
          "Pursuing M.S. in Data Science & Machine Learning at the National University of Singapore. Deepening focus on statistical learning theory, scalable machine learning systems, and computer vision architectures.",
        tag: "NUS · DS & ML",
      },
      {
        category: "Forensics",
        title: "Robust AI-Generated Image Forensics",
        description:
          "Engineering dual-branch architectures combining spatial ConvNeXt with 2D FFT spectral analysis (Verixa) to reliably identify synthetic imagery through real-world social media compressions and downsampling.",
        tag: "ConvNeXt · 2D FFT",
      },
      {
        category: "Writing",
        title: "Technical Writing on Substack",
        description:
          "Documenting deep-dive engineering lessons, starting with 'Building a LoRA Trainer from Scratch for Medical Image Segmentation' analyzing rank selection, embedding caching, and convergence dynamics.",
        tag: "Deep Dives",
        link: "https://substack.com/@amitejsinghdatta/p-192350772",
        linkText: "Read Substack post",
      },
    ] as NowItem[],

    tickerLogs: [
      "caching MedSAM ViT-B image embeddings (60m → 3m / epoch)",
      "extracting 2D FFT centered magnitude spectrum for spectral branch",
      "evaluating 661.7M EU DSA Statements of Reasons across 11 months",
      "training VGG16-UNet hybrid decoder with custom Dice loss",
      "implementing LoRAConv2d layer surgery for vision backbones",
      "benchmarking video keyframe clustering against TVSum dataset",
      "verifying 69 pytest tests on forensic transformation pipeline",
    ],
  },

  featuredProjects: [
    {
      id: "medsam-lora",
      number: "01",
      title: "MedSAM LoRA",
      subtitle: "Parameter-Efficient Fine-Tuning Framework for Medical Image Segmentation",
      badge: "Foundation Models · Vision Transformers",
      problem:
        "Full fine-tuning of 94M-parameter foundation vision models (Segment Anything Model for Medicine) is computationally prohibitive on consumer hardware and prone to catastrophic forgetting or overfitting on small clinical cohorts.",
      architecture: [
        "Surgically injects low-rank adaptation matrices (LoRA, r=8) into query, key, value (qkv) and output projection (proj) layers across all 12 ViT-B attention blocks.",
        "Freezes the 89M-parameter image encoder entirely, training only ~1.2M adapter parameters alongside the lightweight mask decoder (~4M parameters).",
        "Engineered an offline Embedding Cache: precomputes and saves frozen ViT-B embeddings to disk once, accelerating per-epoch training time from 60 minutes down to ~3 minutes (20x speedup) on an RTX 4060.",
      ],
      keyInnovation:
        "Embedding caching combined with attention-layer LoRA injection achieved state-of-the-art medical segmentation performance while reducing trainable parameters by 82% compared to a dedicated CNN baseline.",
      benchmarks: [
        { metric: "Dice Score", value: "0.957", comparison: "+43.8pp over zero-shot MedSAM (0.519); beats VGG-UNet (0.832)" },
        { metric: "IoU (Jaccard)", value: "0.919", comparison: "vs 0.784 CNN baseline & 0.388 zero-shot" },
        { metric: "Trainable Params", value: "4.5M", comparison: "82% reduction vs 25.8M VGG-UNet baseline" },
        { metric: "Epoch Duration", value: "~3 mins", comparison: "Reduced from 60 mins/epoch via embedding cache" },
      ],
      technologies: ["PyTorch", "MedSAM (ViT-B)", "LoRA / PEFT", "Transformers", "OpenCV", "NumPy", "AMP Mixed Precision"],
      githubUrl: "https://github.com/AmitejSingh1/MedSAM_LoRA",
      articleUrl: "https://substack.com/@amitejsinghdatta/p-192350772",
      featuredNote: "Accompanied by a complete technical writeup on Substack detailing implementation math and ablation tradeoffs.",
    },
    {
      id: "verixa",
      number: "02",
      title: "Verixa",
      subtitle: "Forensic AI-Generated Image Detection Under Real-World Digital Transformations",
      badge: "Computer Vision · Digital Forensics",
      problem:
        "Standard deepfake detectors degrade severely under real-world distortions like JPEG compression, Gaussian blurring, downsampling, and noise (dropping below 61% accuracy under moderate noise in production environments).",
      architecture: [
        "Dual-Branch Hybrid Fusion Architecture: combines a spatial RGB stream with an explicit frequency-domain spectral stream.",
        "Spatial Backbone (ConvNeXt-Tiny): Stages 0–2 are kept frozen to retain universal semantic primitives, while Stage 3 is fine-tuned to detect high-level generative visual incoherence.",
        "Spectral Backbone (2D FFT Branch): Centered 2D Fast Fourier Transform magnitude spectrum (|F(u,v)|) with log(1 + |F|) normalization feeding a 4-stage CNN to capture convolutional upsampling artifacts and frequency attenuation.",
        "Fusion Classifier: 1,280-d joint feature vector (768-d spatial + 512-d spectral) projected through a 256-d layer with Dropout (p=0.3) for calibrated synthetic probability output.",
      ],
      keyInnovation:
        "Transformation-aware on-the-fly augmentation elevated noise collapse from 60.71% to 94.53% without clean accuracy penalty, while the 2D FFT branch provided 82 unique correct classifications where spatial RGB failed.",
      benchmarks: [
        { metric: "Clean Accuracy", value: "97.55%", comparison: "AUROC: 99.68% | Clean FPR: 2.50%" },
        { metric: "Mean Transformed Acc", value: "96.95%", comparison: "Evaluated across 16 real-world distortion conditions" },
        { metric: "Held-Out Zero-Shot", value: "97.30%", comparison: "Authentic COCO accuracy (N=13,841 benchmark with DALL-E 3)" },
        { metric: "Test Suite", value: "69 passed", comparison: "Strict CI unit tests with pytest & Ruff linting" },
      ],
      technologies: ["PyTorch 2.6", "ConvNeXt-Tiny", "2D FFT", "SciPy", "CUDA", "Pytest", "Ruff"],
      githubUrl: "https://github.com/AmitejSingh1/Verixa",
      featuredNote: "Evaluated on a strict, leak-free 6,001-image validation split and a 13,841-image held-out benchmark.",
    },
    {
      id: "prostate-segmentation",
      number: "03",
      title: "Prostate Segmentation on Micro-Ultrasound",
      subtitle: "Hybrid VGG16-UNet Architecture for Automated Clinical Boundary Delineation",
      badge: "Published Research · ICCIS 2025 (Springer)",
      problem:
        "Manual prostate boundary delineation in micro-ultrasound scans is labour-intensive, radiologist-dependent, and creates significant scheduling bottlenecks for targeted biopsy and radiation dosimetry.",
      architecture: [
        "Hybrid VGG16-UNet encoder-decoder architecture: ImageNet pretrained VGG16 backbone paired with a 5-block convolutional decoder with skip connections for fine spatial localization.",
        "Trained using custom Dice Loss to handle substantial background-to-organ class imbalance across high-frequency ultrasound slices.",
        "Full clinical data pipeline: 3D NIfTI volume slice extraction, data augmentation, hyperparameter optimization, and boundary refinement post-processing.",
        "Deployed as an interactive containerized Streamlit application supporting both raw 2D ultrasound slices and DICOM volume inference.",
      ],
      keyInnovation:
        "Validated clinical feasibility by combining pretrained feature hierarchies with boundary refinement, reducing manual annotation overhead for urological clinicians.",
      benchmarks: [
        { metric: "Peer Review", value: "Accepted", comparison: "Springer Book Series (Presented at ICCIS 2025, BITS Goa)" },
        { metric: "Architecture", value: "VGG16-UNet", comparison: "512×512 slice resolution with skip connections" },
        { metric: "Loss Function", value: "Dice Loss", comparison: "Optimized for extreme organ-to-background imbalance" },
        { metric: "Deployment", value: "Docker + Streamlit", comparison: "Interactive clinician-facing inference interface" },
      ],
      technologies: ["TensorFlow 2.10", "Keras", "VGG16", "U-Net", "Streamlit", "Docker", "Python"],
      githubUrl: "https://github.com/AmitejSingh1/ProstateSegmentation-usingDeepLearning",
      featuredNote: "First-author paper presented at ICCIS 2025 (BITS Goa) and accepted for publication in Springer Book Series.",
    },
    {
      id: "dsa-moderation",
      number: "04",
      title: "Cross-Platform Moderation Benchmark",
      subtitle: "Empirical Analysis of 661.7M EU Digital Services Act Records (YouTube vs. TikTok vs. Instagram)",
      badge: "Data Systems · Regulatory Benchmarking",
      problem:
        "Platform transparency reports typically report broad platform-wide automation averages, conflating automated detection (flagging) with automated decision-making (sanctions) and masking policy-specific enforcement strategies.",
      architecture: [
        "Ingested and analyzed 661,664,998 represented Statements of Reasons (SoRs) across 17.2M Parquet records from the official European Commission DSA Transparency Database.",
        "Built a high-performance Python + DuckDB analytics pipeline executing volume-weighted aggregations and Cartesian grid sparsity gating across 48 platform-category slices.",
        "Evaluated 11 continuous monthly observation partitions (July 2025 – May 2026) to assess ranking persistence and structural category mix effects.",
      ],
      keyInnovation:
        "Uncovered that while automated detection is universally >95% across all platforms, decision-stage automation diverges drastically in Scams & Fraud: YouTube reports only 0.25% automation (99.75% human decision) vs TikTok (84.94%) and Instagram (99.45%).",
      benchmarks: [
        { metric: "Dataset Size", value: "661.7M SoRs", comparison: "17.2M physical Parquet records analyzed via DuckDB" },
        { metric: "Observation Window", value: "11 Months", comparison: "July 2025 – May 2026 under harmonized schema" },
        { metric: "Scams Decision Gap", value: "0.25% vs 99.45%", comparison: "YouTube (human-led) vs Instagram (fully automated)" },
        { metric: "Temporal Stability", value: "Zero Reversals", comparison: "Rank order remained completely persistent every month" },
      ],
      technologies: ["Python 3.10+", "DuckDB", "Apache Parquet", "Pandas", "Data Engineering", "Statistical Methodology"],
      githubUrl: "https://github.com/AmitejSingh1/dsa-moderation-benchmark",
      featuredNote: "Documented reproducible methodology with 12 approved rules distinguishing detection vs. decision execution.",
    },
  ] as FeaturedProject[],

  labProjects: [
    {
      title: "VisioLink",
      category: "Computer Vision / Systems",
      badge: "Hardware-Agnostic VR",
      description:
        "Engineered a low-cost virtual reality system utilizing a standard smartphone (Google Cardboard) as display and a laptop webcam for head/hand tracking via OpenCV and MediaPipe, eliminating costly dedicated VR hardware.",
      highlights: [
        "WebSocket-based bidirectional communication between laptop and phone for low-latency real-time orientation streaming.",
        "Hardware-agnostic design deployable on any Android device and standard web camera without Oculus controllers.",
      ],
      technologies: ["Python", "OpenCV", "MediaPipe", "WebSockets", "Android"],
      githubUrl: "https://github.com/AmitejSingh1/VisioLink",
    },
    {
      title: "Pre-Reg Copilot",
      category: "Multi-Agent System",
      badge: "Hack4Health 2026",
      description:
        "Built a 3-agent FastAPI backend automating clinic pre-registration for Parkway Shenton staff, reducing document triage time from 25–30 min/patient down to seconds.",
      highlights: [
        "Agent 1 extracts structured JSON from unstructured chits and vouchers using Gemini Flash LLM.",
        "Agents 2 & 3 execute deterministic rules-based patient identity matching and payer package resolution.",
        "Auto-generates OpenAPI specs integrated directly with Microsoft Copilot Studio.",
      ],
      technologies: ["FastAPI", "Gemini Flash LLM", "Python", "Copilot Studio", "REST APIs"],
      githubUrl: "https://github.com/AmitejSingh1/pre-reg-copilot",
    },
    {
      title: "LoRA From Scratch",
      category: "Deep Learning / PEFT",
      badge: "PyTorch Framework",
      description:
        "A ground-up PyTorch implementation of Low-Rank Adaptation (LoRA) for parameter-efficient fine-tuning with native convolutional support.",
      highlights: [
        "Novel LoRAConv2d implementation enabling parameter-efficient tuning of ResNets and U-Nets alongside standard linear layers.",
        "Dynamic layer injection parsing arbitrary base architectures and surgically swapping target layers.",
        "Memory-efficient mixed precision (AMP) pipeline with custom low-rank matrix checkpointing.",
      ],
      technologies: ["PyTorch", "PEFT", "CUDA", "Model Surgery", "AMP"],
      githubUrl: "https://github.com/AmitejSingh1/LoRA_from_Scratch",
    },
    {
      title: "Modular RAG Pipeline",
      category: "Information Retrieval / NLP",
      badge: "FAISS & Local LLMs",
      description:
        "A minimal, modular Retrieval-Augmented Generation pipeline supporting document ingestion, overlapping chunking, FAISS vector indexing, and local LLM fallbacks.",
      highlights: [
        "Sentence-Transformers embeddings with inner-product cosine similarity vector search.",
        "Flexible generation backend supporting OpenAI alongside local open-weight models (Flan-T5, Gemma, Mistral).",
        "Includes both a CLI tool and an interactive Streamlit frontend.",
      ],
      technologies: ["Python", "FAISS", "Sentence-Transformers", "Hugging Face", "Streamlit"],
      githubUrl: "https://github.com/AmitejSingh1/rag-pipeline-AmitejSingh",
    },
    {
      title: "SummBench",
      category: "NLP Benchmarking",
      badge: "Multi-Model Evaluation",
      description:
        "A text summarization benchmark platform comparing extractive algorithms (TF-IDF, TextRank, LSA) against abstractive transformer models (BART, T5).",
      highlights: [
        "Automated evaluation across ROUGE-1, ROUGE-2, and ROUGE-L metrics with compression ratio scoring.",
        "Interactive comparative user interface built in Streamlit and Flask with dynamic model detection.",
      ],
      technologies: ["Python", "Transformers (BART, T5)", "ROUGE", "Streamlit", "Flask"],
      githubUrl: "https://github.com/AmitejSingh1/SummBench",
    },
  ] as LabProject[],

  experience: [
    {
      period: "Oct 2024 – Jan 2025",
      role: "Software Intern",
      company: "Casamed HealthTech",
      location: "Remote",
      type: "Internship",
      bullets: [
        "Automated extraction and analysis of key clinical metrics from unstructured medical reports using Python, streamlining clinical data processing pipelines.",
        "Developed computer vision pose-detection scripts (OpenCV, MediaPipe) to enable AI-assisted physiotherapy assessments.",
        "Contributed backend API enhancements to optimize ML model integration and clinical data flow across the platform.",
      ],
      technologies: ["Python", "OpenCV", "MediaPipe", "FastAPI", "Clinical Pipelines"],
    },
    {
      period: "May 2025 – Jul 2025",
      role: "Student Trainee Intern",
      company: "DRDO – CAIR (Centre for AI & Robotics)",
      location: "Bengaluru, India",
      type: "Research Internship",
      bullets: [
        "Engineered an automated video summarization pipeline utilizing ResNet-50 for frame-level feature extraction.",
        "Implemented unsupervised clustering techniques (K-Means, DBSCAN, motion-based segmentation) to identify keyframes and generate compact video summaries.",
        "Evaluated the system against standard TVSum benchmark annotations (Precision, Recall, F1); deployed end-to-end via a Flask-React application supporting video upload, processing, and summary playback.",
      ],
      technologies: ["Python", "ResNet-50", "DBSCAN", "K-Means", "Flask", "React", "TVSum"],
    },
  ] as ExperienceItem[],

  education: [
    {
      period: "Aug 2026 – Present",
      degree: "M.S., Data Science & Machine Learning",
      institution: "National University of Singapore (NUS)",
      location: "Singapore",
      details: [
        "Advanced specialization in computer vision, deep learning theory, and large-scale data engineering.",
        "Exploring research in parameter-efficient foundation model adaptation and medical imaging.",
      ],
    },
    {
      period: "Sep 2022 – July 2026",
      degree: "B.Tech, Computer Science & Engineering (AI & ML)",
      institution: "Vellore Institute of Technology (VIT), Chennai",
      location: "Chennai, India",
      gpa: "9.09 / 10.00",
      details: [
        "Core coursework in Deep Learning, Computer Vision, Data Structures & Algorithms, and Distributed Computing.",
        "First-author paper published at ICCIS 2025 (Springer) during undergraduate research.",
      ],
    },
  ] as EducationItem[],

  extracurricular: [
    {
      role: "Culture Lead",
      organization: "Fraternity of Young Innovators, VIT Chennai",
      description: "Organized technical hackathons, workshops, and community culture for young engineers.",
    },
    {
      role: "VIP GuestCare Head",
      organization: "Voyage Tech Summit, VIT Chennai",
      description: "Coordinated guest relations and speaker hospitality for college technology summits.",
    },
    {
      role: "Volunteer",
      organization: "Khalsa Aid & SOS Children's Villages",
      description: "Participated in ground-level humanitarian assistance during Punjab flood relief operations.",
    },
  ],

  skillCategories: [
    {
      title: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
    },
    {
      title: "AI & Deep Learning",
      skills: ["Deep Learning", "CNNs", "Transformers", "Clustering (K-Means, DBSCAN)", "Model Benchmarking", "Hyperparameter Tuning"],
    },
    {
      title: "Computer Vision",
      skills: ["Medical Image Segmentation", "Object Detection", "Pose Estimation", "YOLO", "Vision Transformers (ViT)", "OpenCV", "MediaPipe"],
    },
    {
      title: "Foundation Models & PEFT",
      skills: ["LoRA / PEFT", "MedSAM", "Segment Anything (SAM)", "Hugging Face", "Parameter-Efficient Adaptation", "RAG Pipelines"],
    },
    {
      title: "ML Engineering & Data",
      skills: ["PyTorch", "TensorFlow / Keras", "DuckDB", "Apache Parquet", "scikit-learn", "NumPy", "FastAPI", "Flask", "Streamlit", "Docker"],
    },
    {
      title: "Software & Systems",
      skills: ["Next.js", "React", "Git", "Linux", "WebSockets", "REST APIs", "Tailwind CSS", "CI / Pytest"],
    },
  ] as SkillCategory[],
};

