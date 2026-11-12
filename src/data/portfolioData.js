/**
 * MASTER PORTFOLIO DATA - MEHWISH ALAM
 * Edit this single file to update your personal details, projects, experience, skills, and education.
 */

export const personalInfo = {
  name: "Mehwish Alam",
  role: "B.Tech CSE (AI/ML) Student",
  availability: "Available for SDE & ML Internships",
  headline: "Specialized in Artificial Intelligence & Machine Learning",
  location: "Navi Mumbai, Maharashtra, India",
  email: "mehwishalam987@gmail.com",
  phone: "+91 9296565349",
  cleanPhone: "9296565349",
  avatar: "/assets/images/mehwish_avatar.jpg",
  resumePdf: "/assets/MA%20RESUME.pdf",
  bio: "Second-year B.Tech student in Computer Science & Engineering (AI/ML) at Ramrao Adik Institute of Technology (RAIT), D.Y. Patil University. Passionate about bridging applied machine learning, medical deep learning, and modern full-stack web engineering.",
  aboutPitch: [
    "I am an engineering student fascinated by how intelligent systems can solve real-world problems — from diagnosing medical imaging to building responsive, human-centric web applications.",
    "Whether training multimodal deep learning models on GPU clusters, synthesizing Minimax algorithms with Random Forests, or developing responsive web applications, I bring rigor, end-to-end commitment, and clean architecture to every build."
  ],
  strengths: [
    {
      title: "End-to-End Ownership",
      desc: "Self-driven learner who delivers complete projects from requirements planning (PRDs) and dataset curation through model evaluation and UI deployment."
    },
    {
      title: "Multimodal AI & Systems",
      desc: "Hands-on experience fusing 3D medical DICOM imaging with clinical report NLP, weak-supervision labeling, and multi-label classification."
    },
    {
      title: "Technical Leadership",
      desc: "Technical Co-Head at IETE Student Chapter, organizing workshops on Ethical Hacking, Linux environments, and peer mentoring."
    }
  ],
  stats: [
    { label: "LeetCode Solved", value: "30+", sub: "Python & C DSA" },
    { label: "Core Projects", value: "3+", sub: "AI/ML & Full-Stack" },
    { label: "B.Tech Batch", value: "2029", sub: "RAIT DY Patil" },
    { label: "Academic CGPA", value: "8.66", sub: "B.Tech CSE (AI/ML)" }
  ],
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/MehwishAlam123",
      username: "MehwishAlam123"
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mehwish-alam",
      username: "Mehwish Alam"
    },
    leetcode: {
      name: "LeetCode",
      url: "https://leetcode.com/u/MehwishAlam/",
      username: "MehwishAlam",
      solved: "30+ DSA Problems"
    },
    email: "mehwishalam987@gmail.com"
  }
};

export const experiences = [
  {
    id: "inamigos",
    type: "Internship",
    role: "AI Web Development Intern",
    company: "InAmigos Foundation",
    period: "Oct 2026",
    current: false,
    badge: "NGO Web Platform",
    highlights: [
      "Developed a responsive NGO website for InAmigos Foundation, improving mobile accessibility and browsing flow.",
      "Designed and built a personal portfolio showcase using AI-assisted pair programming, 3D interactive models, and a knowledge-base chat assistant.",
      "Polished UI layouts in Figma to strengthen visual consistency and typographic hierarchy."
    ],
    skills: ["Web Development", "HTML5/CSS3", "JavaScript", "Figma", "AI Pair Programming"]
  },
  {
    id: "iete",
    type: "Leadership",
    role: "Technical Co-Head",
    company: "IETE Student Chapter — RAIT",
    period: "2025 - Present",
    current: true,
    badge: "Student Leadership",
    highlights: [
      "Co-led a dedicated technical committee of student volunteers, spearheading hands-on technical events for the engineering community.",
      "Organized and conducted a hands-on Ethical Hacking workshop for student peers exploring cybersecurity fundamentals and practical tooling.",
      "Guided students through environment setups using VirtualBox virtualization and core penetration testing tools on Kali Linux."
    ],
    skills: ["Technical Leadership", "Workshop Facilitation", "Linux / Kali", "VirtualBox", "Mentoring"]
  },
  {
    id: "hackathons",
    type: "Competitions",
    role: "Hackathon Participant & Competitor",
    company: "PayPal AI Hackathon & RSNA Kaggle",
    period: "2026",
    current: false,
    badge: "Applied AI",
    highlights: [
      "PayPal AI Hackathon 2026: Built ChargeGuard AI, an AI-powered dispute and subscription management copilot for merchants.",
      "RSNA Knee MRI Abnormality Detection on Kaggle: Evaluated multimodal models on macro-averaged AUC-ROC competition metric using GPU notebooks.",
      "Solved 30+ Data Structures & Algorithms problems on LeetCode in Python and C (binary trees, sliding window, two-pointer techniques, linked lists, stacks)."
    ],
    skills: ["PyTorch", "RSNA Kaggle", "Albumentations", "DSA", "LeetCode"]
  }
];

export const projects = [
  {
    id: "knee-mri",
    title: "Knee MRI Abnormality Detection",
    subtitle: "Multimodal Deep Learning • Medical Imaging",
    tagline: "Detecting 12 knee pathologies by fusing 3D DICOM scans with clinical text",
    image: "/assets/images/mri_project.jpg",
    status: "In Progress / Research",
    statusColor: "violet",
    github: "https://github.com/MehwishAlam123/rsna-knee-mri-ai",
    repoSlug: "MehwishAlam123/rsna-knee-mri-ai",
    description: "Developing a multimodal deep learning pipeline in PyTorch to detect 12 knee abnormalities from MRI scans. Combines volumetric DICOM imaging (Pydicom, OpenCV) with radiology report text via weak-labeling strategies and multi-label classification.",
    keyPoints: [
      "12 knee pathology detection targets including ACL tears, meniscus abnormalities, and chondral defects.",
      "Direct ingestion of 3D DICOM pixel arrays with spatial heatmaps and volumetric slice preprocessing.",
      "Weak-supervision clinical NLP pipeline extracting training labels from unstructured radiology text reports.",
      "Trained on Kaggle GPU notebooks with Albumentations data augmentation, evaluated on macro-averaged AUC-ROC."
    ],
    techStack: ["Python", "PyTorch", "torchvision", "Pydicom", "OpenCV", "Scikit-Learn", "Albumentations"],
    hasDemo: false
  },
  {
    id: "tictactoe-ai",
    title: "Tic-Tac-Toe Prediction Model",
    subtitle: "Game Intelligence • Hybrid AI",
    tagline: "Minimax game trees combined with a Scikit-Learn Random Forest classifier",
    image: "/assets/images/tictactoe_project.jpg",
    status: "Completed",
    statusColor: "coral",
    github: "https://github.com/MehwishAlam123/TICTACTOE-AI-PREDICTION-MODEL",
    repoSlug: "MehwishAlam123/TICTACTOE-AI-PREDICTION-MODEL",
    description: "Engineered an intelligent hybrid game AI synthesizing classical Minimax decision trees with a Scikit-Learn Random Forest Classifier to evaluate board advantages and predict moves in real time. Backed by a comprehensive Product Requirement Document (PRD).",
    keyPoints: [
      "Synthesizes Minimax state-space depth trees (up to depth 9) with Random Forest probability weighting.",
      "Real-time board scoring and move advantage telemetry evaluated in milliseconds.",
      "Complete Product Requirement Document (PRD) detailing scope, heuristic metrics, and evaluation matrix.",
      "Interactive playable simulator embedded right in the portfolio."
    ],
    techStack: ["Python", "Scikit-Learn", "Random Forest", "Minimax Algorithm", "PRD Engineering"],
    hasDemo: true,
    demoType: "tictactoe"
  },
  {
    id: "coffee-shop",
    title: "Artisan Coffee Shop Website",
    subtitle: "Frontend Engineering • UX Design",
    tagline: "Responsive 4-page commercial platform with smooth modern interaction",
    image: "/assets/images/coffee_project.jpg",
    status: "Completed",
    statusColor: "cyan",
    github: "https://github.com/MehwishAlam123/COFFEE-WEBSITE",
    repoSlug: "MehwishAlam123/COFFEE-WEBSITE",
    description: "Developed a responsive 4-page commercial website featuring dedicated sections for Home, Menu, Gallery, and Testimonials. Built with custom interactive UI elements, smooth navigation, and a mobile-optimized fluid grid.",
    keyPoints: [
      "4 fully responsive pages: Hero landing, Categorized Menu, Image Gallery, and Testimonials.",
      "Custom mobile navigation hamburger menu, fluid typography, and CSS layout grids.",
      "Interactive drink cards with price displays and customer testimonial slider component."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Architecture"],
    hasDemo: false
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", desc: "AI/ML, PyTorch, Scikit-learn, DSA" },
      { name: "Java", level: "Proficient", desc: "OOP, modular design, data structures" },
      { name: "C", level: "Proficient", desc: "Pointers, memory management, algorithms" },
      { name: "JavaScript", level: "Intermediate", desc: "ES6+, DOM manipulation, async" }
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch", level: "Advanced", desc: "Neural networks, multimodal pipelines" },
      { name: "Scikit-Learn", level: "Advanced", desc: "Pipelines, classifiers, metrics" },
      { name: "Random Forest", level: "Proficient", desc: "Ensemble learning & move prediction" },
      { name: "Minimax Heuristics", level: "Proficient", desc: "Game trees & alpha-beta pruning" },
      { name: "Multi-Label Classification", level: "Proficient", desc: "12-pathology concurrent detection" },
      { name: "Weak Supervision", level: "Proficient", desc: "Clinical report text extraction" },
      { name: "Data Augmentation", level: "Proficient", desc: "Albumentations image transforms" }
    ]
  },
  {
    title: "Data & Imaging Libraries",
    icon: "Eye",
    skills: [
      { name: "OpenCV", level: "Proficient", desc: "Image filtering, preprocessing" },
      { name: "Pydicom", level: "Proficient", desc: "3D DICOM medical volume parsing" },
      { name: "NumPy", level: "Advanced", desc: "Vectorized linear algebra & tensors" },
      { name: "Pandas", level: "Advanced", desc: "DataFrames, feature engineering" }
    ]
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "Advanced", desc: "Semantic markup, accessible structure" },
      { name: "CSS3 / Tailwind", level: "Advanced", desc: "Responsive layout, animations, glassmorphism" },
      { name: "React (Vite)", level: "Proficient", desc: "Component architecture, state, hooks" },
      { name: "Responsive UI", level: "Advanced", desc: "Mobile-first fluid layouts" }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching, PRs" },
      { name: "VS Code", level: "Advanced", desc: "IDE workflows, debugging" },
      { name: "Linux / Kali", level: "Intermediate", desc: "Shell scripting, penetration testing basics" },
      { name: "VirtualBox", level: "Intermediate", desc: "Virtualization & sandboxing" },
      { name: "Figma", level: "Intermediate", desc: "Wireframing, UI consistency" },
      { name: "Jupyter / Kaggle", level: "Advanced", desc: "GPU notebooks, exploratory analysis" }
    ]
  }
];

export const educations = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML)",
    institution: "Ramrao Adik Institute of Technology, D.Y. Patil University (RAIT)",
    location: "Nerul, Navi Mumbai",
    period: "Sep 2025 - June 2029",
    current: true,
    cgpa: "CGPA: 8.66",
    details: "Second-year undergraduate specializing in Artificial Intelligence and Machine Learning. Active in technical chapters, hackathons, and applied deep learning research."
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Oxford Public School",
    location: "Ranchi, Jharkhand",
    period: "2022 - 2024",
    current: false,
    details: "Science stream with coursework in Mathematics, Physics, Chemistry, and Computer Science foundations."
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "Sacred Heart School",
    location: "Ranchi, Jharkhand",
    period: "2022",
    current: false,
    details: "Foundational education with academic distinction across core sciences and analytical mathematics."
  }
];

export const aiAssistantKB = {
  voiceGreeting: "Hi! Welcome to Mehwish Alam's portfolio. I'm her AI assistant. Ask me about her projects, machine learning skills, or internship availability!",
  textGreeting: "Hi! 👋 Welcome to Mehwish Alam's portfolio! I'm her AI assistant. Ask me about her deep learning projects, technical skills, academic background at RAIT, or internship availability.",
  quickChips: [
    { label: "🏥 Knee MRI AI", query: "Tell me about the Knee MRI model" },
    { label: "🎮 Tic-Tac-Toe AI", query: "How does the Tic-Tac-Toe AI work?" },
    { label: "⚡ Skills", query: "What technical skills does Mehwish have?" },
    { label: "💼 Experience", query: "Tell me about Mehwish's internships and roles" },
    { label: "🎓 Education", query: "What is Mehwish's education and CGPA?" },
    { label: "🤝 Hire Me", query: "How can I contact Mehwish for an internship?" }
  ],
  responses: [
    {
      keywords: ["mri", "knee", "dicom", "radiology", "rsna", "medical", "abnormality"],
      reply: "🏥 **Knee MRI Abnormality Detection:** Mehwish is engineering a multimodal deep learning pipeline in PyTorch to detect **12 knee abnormalities** concurrently from MRI scans. It merges 3D DICOM pixel arrays with radiology report text using weak-supervision and multi-label classification. Trained on Kaggle GPU notebooks with Albumentations augmentation and evaluated on macro-averaged AUC-ROC!"
    },
    {
      keywords: ["tictactoe", "tic-tac-toe", "minimax", "random forest", "game", "hybrid"],
      reply: "🎮 **Tic-Tac-Toe Prediction Model:** Mehwish developed a hybrid AI system synthesizing the classical **Minimax algorithm** with a **Scikit-Learn Random Forest Classifier** to predict moves and evaluate advantage scores in real time. It is supported by a comprehensive Product Requirement Document (PRD), and you can play against it directly in the Projects section!"
    },
    {
      keywords: ["coffee", "website", "frontend", "web"],
      reply: "☕ **Coffee Shop Website:** A responsive 4-page modern commercial website featuring Home, Menu, Gallery, and Testimonials sections with interactive UI elements, custom mobile hamburger menu, and a fluid layout grid."
    },
    {
      keywords: ["experience", "internship", "inamigos", "foundation", "work", "role"],
      reply: "💼 **Experience & Roles:**\n• **AI Web Development Intern @ InAmigos Foundation** (Oct 2026): Built responsive NGO website, designed personal showcase, refined UI layouts in Figma.\n• **Technical Co-Head @ IETE Student Chapter (RAIT)** (2025–Present): Organized hands-on Ethical Hacking workshops with VirtualBox & Kali Linux, mentored engineering peers.\n• **Competitions:** PayPal AI Hackathon 2026 (ChargeGuard AI) & RSNA Knee MRI Kaggle challenge."
    },
    {
      keywords: ["skill", "skills", "python", "pytorch", "java", "tech", "stack", "languages"],
      reply: "⚡ **Core Technical Skills:**\n• **Programming:** Python, Java, C, JavaScript\n• **AI & Deep Learning:** PyTorch, torchvision, Scikit-learn, Random Forest, Minimax, Multi-label Classification, Weak Supervision\n• **Data & Imaging:** NumPy, Pandas, OpenCV, Pydicom, Albumentations\n• **Web & Tools:** HTML5, CSS3, JavaScript, React, Tailwind CSS, Git/GitHub, Linux/Kali, VirtualBox, Figma"
    },
    {
      keywords: ["education", "college", "university", "rait", "dy patil", "cgpa", "degree", "btech"],
      reply: "🎓 **Education:**\n• **B.Tech CSE (AI/ML):** Ramrao Adik Institute of Technology (RAIT), D.Y. Patil University, Navi Mumbai (2025–2029) — **CGPA: 8.66** (Second Year)\n• **Higher Secondary (12th):** Oxford Public School (2022–2024)\n• **Secondary (10th):** Sacred Heart School (2022)"
    },
    {
      keywords: ["leetcode", "dsa", "data structures", "algorithms"],
      reply: "🧠 **DSA & LeetCode:** Mehwish has solved **30+ Data Structures & Algorithms problems** on LeetCode using Python and C, covering binary trees, sliding window, two-pointer techniques, linked lists, and stacks."
    },
    {
      keywords: ["hire", "intern", "contact", "email", "phone", "availability", "opportunity"],
      reply: "🤝 **Availability & Contact:** Mehwish is actively seeking **Software Development (SDE) and Machine Learning (ML) Internships**!\n• **Email:** [mehwishalam987@gmail.com](mailto:mehwishalam987@gmail.com)\n• **Phone:** +91 9296565349\n• **Location:** Navi Mumbai, Maharashtra\n• **GitHub:** [github.com/MehwishAlam123](https://github.com/MehwishAlam123)\n• **Resume:** Downloadable directly from the Hero section or navbar!"
    }
  ]
};

