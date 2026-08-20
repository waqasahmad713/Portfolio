/**
 * ============================================================
 *  EDIT THIS FILE to update your role and add projects.
 * ============================================================
 *
 * CURRENT ROLE  →  PORTFOLIO.experience[0]
 * ADD A PROJECT →  copy an object in PORTFOLIO.projects
 *
 * Leave github or demo as "" to hide that button.
 * Project count in About updates automatically.
 */

window.PORTFOLIO = {
  profile: {
    name: "Waqas Ahmad",
    title: "AI Engineer",
    headline:
      "Building Intelligent Solutions with AI, Computer Vision & Machine Learning.",
    roles: [
      "AI Engineer",
      "Computer Vision Specialist",
      "Deep Learning Developer",
      "YOLO Detection Systems",
    ],
    intro:
      "I design and deploy real-world vision and learning systems — from autonomous perception to YOLO detection pipelines and time-series models.",
    about:
      "AI and Machine Learning Engineer specializing in Deep Learning and Computer Vision. Experienced in building real-world AI systems including autonomous driving, predictive modeling, and object detection pipelines.",
    email: "waqaskhanwaqas713@gmail.com",
    phone: "+92 313 5565892",
    github: "https://github.com/waqasahmad713",
    githubUser: "waqasahmad713",
    linkedin: "https://www.linkedin.com/in/waqasahmad713",
    cv: "assets/resume/Waqas_Ahmad.pdf",
    photo: "assets/images/waqasetea.png",
    location: "Yar Hussain, Pakistan",
  },

  /* Shown in the About strip — numeric values stay factual */
  stats: [
    { value: "auto-projects", label: "AI Projects" },
    { value: "CV", label: "Computer Vision" },
    { value: "DL", label: "Deep Learning" },
    { value: "B.Sc.", label: "Artificial Intelligence" },
  ],

  journey: [
    { year: "2021", text: "Began B.Sc. Artificial Intelligence at Abdul Wali Khan University Mardan." },
    { year: "2023", text: "Python Developer Intern at Codsoft — automation and ML mini-projects." },
    { year: "2025", text: "AI Intern at NCAI Lab Peshawar. Final Year Project: AI-Based Self-Driving Car." },
    { year: "2026", text: "Started as a full-time on-site Developer at CAIET Mardan. From July 2026, working remotely with CAIET on a project basis, and as a Developer at Klarivo." },
  ],

  skills: [
    {
      category: "AI / Machine Learning",
      items: [
        { name: "Machine Learning", hint: "Supervised systems, classical ML, pipelines" },
        { name: "Deep Learning", hint: "CNNs, RNNs, LSTM, transfer learning" },
        { name: "Computer Vision", hint: "Detection, classification, video analysis, image datasets" },
        { name: "NLP", hint: "Language-aware AI applications" },
        { name: "Generative AI", hint: "Modern generative workflows" },
        { name: "Dataset Engineering", hint: "Building, labeling, and preparing image and text datasets" },
      ],
    },
    {
      category: "Data",
      items: [
        { name: "Image Dataset Creation", hint: "Collecting and structuring image datasets for model training" },
        { name: "Image Labeling", hint: "Annotating images for detection and classification" },
        { name: "Text Datasets", hint: "Working with text corpora for NLP and learning pipelines" },
        { name: "Data Preprocessing", hint: "Cleaning, formatting, and preparing data for models" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "PyTorch", hint: "Model training and research" },
        { name: "TensorFlow", hint: "Deep learning pipelines" },
        { name: "Ultralytics YOLO", hint: "YOLOv8 / YOLOv11 detection" },
        { name: "OpenCV", hint: "Realtime vision and imaging" },
        { name: "Flask", hint: "Model serving and web APIs" },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Python", hint: "Primary language — Pandas, NumPy, Scikit-learn" },
        { name: "C/C++", hint: "Systems-level programming" },
        { name: "JavaScript", hint: "Interactive interfaces" },
        { name: "HTML", hint: "Semantic structure" },
        { name: "CSS", hint: "Modern layout and motion" },
        { name: "SQL", hint: "Structured data queries" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", hint: "Version control" },
        { name: "GitHub", hint: "Collaboration and hosting" },
        { name: "Roboflow", hint: "Image datasets, labeling, and annotation" },
        { name: "Google Colab", hint: "Experimentation and training" },
        { name: "Kaggle", hint: "Datasets and competitions" },
        { name: "Linux", hint: "Development environment" },
      ],
    },
  ],

  /* Visual focus bars — from your original portfolio, not new claims */
  skillBars: [
    { name: "Python", value: 95 },
    { name: "Computer Vision", value: 90 },
    { name: "Deep Learning", value: 88 },
    { name: "YOLO / OpenCV", value: 90 },
    { name: "TensorFlow", value: 85 },
    { name: "PyTorch", value: 80 },
  ],

  featured: {
    title: "AI-Based Self-Driving Car",
    badge: "Final Year Project",
    problem:
      "Manual driving systems cannot reliably perceive lanes, obstacles, and path decisions without a trained visual pipeline.",
    solution:
      "Designed an autonomous driving prototype using CNN and OpenCV — lane detection, object recognition, and a decision module for vehicle control.",
    results: [
      "End-to-end perception prototype for lane and object awareness",
      "CNN + OpenCV pipeline for visual understanding",
      "Decision-making module for control signals",
    ],
    technologies: ["CNN", "OpenCV", "Python", "Computer Vision"],
    github: "https://github.com/waqasahmad713",
    demo: "",
    visual: "autonomous",
  },

  /**
   * ADD A PROJECT
   * Copy any object below. Fields:
   *   title, category, description, technologies[], visual, image, github, demo
   * visual options: autonomous | yolo | weather | parking | cctv | classify | road | security | data
   */
  projects: [
    {
      title: "Worker Safety Project",
      category: "Computer Vision",
      badge: "In Progress",
      description:
        "Currently developing a worker safety project at CAIET Mardan as part of remote, project-based work.",
      technologies: ["Computer Vision", "Deep Learning", "Python", "Worker Safety"],
      visual: "security",
      image: "assets/images/projects/worker-safety.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "AI-Based Self-Driving Car",
      category: "Computer Vision",
      badge: "Final Year Project",
      description:
        "Designed an autonomous driving system using CNN and OpenCV. Implemented lane detection, object recognition, and a decision-making module for vehicle control.",
      technologies: ["CNN", "OpenCV", "Python", "Computer Vision"],
      visual: "autonomous",
      image: "assets/images/projects/self-driving.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Nutrient Deficiency Detection",
      category: "Computer Vision",
      badge: "CNN",
      description:
        "Built a CNN model for 9-class banana plant disease detection. Applied image classification to agricultural plant-health monitoring.",
      technologies: ["CNN", "Image Classification", "Agriculture", "Python"],
      visual: "classify",
      image: "assets/images/projects/nutrient.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Road Damage Detection",
      category: "Computer Vision",
      badge: "Infrastructure",
      description:
        "Worked on pothole and road crack detection for C&W KPK. Automated infrastructure monitoring for maintenance and safety assessment.",
      technologies: ["Detection", "OpenCV", "Infrastructure", "Automation"],
      visual: "road",
      image: "assets/images/projects/road-damage.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Fight Detection System",
      category: "Computer Vision",
      badge: "Security",
      description:
        "Developed real-time violence detection using deep learning and video analysis for security surveillance and safety monitoring.",
      technologies: ["Deep Learning", "Video Analysis", "Security"],
      visual: "cctv",
      image: "assets/images/projects/fight-detection.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Weapon & FIR Detection",
      category: "Computer Vision",
      badge: "Public Safety",
      description:
        "Developed an AI system for weapon detection and FIR-related monitoring using computer vision for public safety workflows.",
      technologies: ["Detection", "Public Safety", "AI"],
      visual: "security",
      image: "assets/images/projects/weapon-detection.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Face Mask Detection",
      category: "Computer Vision",
      badge: "Classification",
      description:
        "Built a CNN-based real-time face mask detection system. Achieved 98% accuracy for automated health-compliance monitoring.",
      technologies: ["CNN", "Classification", "Real-time"],
      visual: "classify",
      image: "assets/images/projects/face-mask.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Smart Parking System",
      category: "Computer Vision",
      badge: "IoT",
      description:
        "Implemented an OpenCV-based vehicle detection and parking automation system with realtime space management.",
      technologies: ["OpenCV", "Detection", "IoT", "Real-time"],
      visual: "parking",
      image: "assets/images/projects/parking.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "Weather Forecasting System",
      category: "AI / ML",
      badge: "Deployment",
      description:
        "Developed an LSTM-based time series prediction model for weather analysis. Integrated a Flask backend for realtime web deployment.",
      technologies: ["LSTM", "Flask", "Time Series", "Web App"],
      visual: "weather",
      image: "assets/images/projects/weather.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
    {
      title: "KP Flash Floods Report",
      category: "AI / ML",
      badge: "Analysis",
      description:
        "Prepared a technical analysis report on KP flood events and impact assessment with data-driven insights for disaster management.",
      technologies: ["Data Analysis", "Reports", "Disaster Management"],
      visual: "data",
      image: "assets/images/projects/floods.jpg",
      github: "https://github.com/waqasahmad713",
      demo: "",
    },
  ],

  /**
   * UPDATE YOUR ROLE
   * Keep current roles at the top (current: true).
   * Add bullets as your work evolves. Do not invent responsibilities.
   */
  experience: [
    {
      current: true,
      role: "Developer",
      org: "Klarivo",
      period: "2026 — Present",
      points: [
        "Currently working as a Developer at Klarivo.",
      ],
      tags: ["Development"],
    },
    {
      current: true,
      role: "AI Developer",
      org: "CAIET Mardan",
      period: "July 2026 — Present",
      points: [
        "Working remotely with CAIET Mardan on a project basis.",
        "Currently working on a worker safety project.",
      ],
      tags: ["Computer Vision", "Deep Learning", "Python", "Remote", "Worker Safety"],
    },
    {
      current: false,
      role: "Full-time Developer",
      org: "CAIET Mardan",
      period: "2026 — June 2026",
      points: [
        "Worked on-site as a full-time Developer at CAIET Mardan.",
      ],
      tags: ["Computer Vision", "Deep Learning", "Python"],
    },
    {
      current: false,
      role: "AI Engineer Intern",
      org: "NCAI Lab Peshawar",
      period: "June 2025 — Dec 2025",
      points: [
        "Developed AI-based research and real-world computer vision systems.",
        "Worked on deep learning pipelines and model optimization.",
        "Collaborated with the research team on applied AI projects.",
      ],
      tags: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    },
    {
      current: false,
      role: "Python Developer Intern",
      org: "Codsoft",
      period: "Aug 2023 — Sep 2023",
      points: [
        "Built Python-based automation and ML mini-projects.",
        "Developed data processing pipelines and utilities.",
      ],
      tags: ["Python", "Automation", "Machine Learning"],
    },
  ],

  education: {
    degree: "B.Sc. Artificial Intelligence",
    school: "Abdul Wali Khan University Mardan",
    period: "2021 — 2025",
    focus: "Deep Learning, Computer Vision, Neural Networks, AI Systems Design",
    note: "Final Year Project: AI-Based Self-Driving Car Prototype",
  },

  achievements: [
    {
      title: "National Science Project Exhibition 2024",
      org: "ORIC, AWKUM Mardan",
      detail: "Certificate of Participation — showcased an AI/ML project at the university science exhibition.",
    },
    {
      title: "Softcom 25 — GIKI",
      org: "Awards",
      detail: "2nd Place — Poster Design. 3rd Place — Speed Coding. Participated in the Softcom 25 Hackathon.",
    },
  ],

  leadership: [
    {
      title: "Coordinator",
      org: "Technology & Innovation Society",
      detail: "Led technical workshops and managed events for 200+ students.",
    },
    {
      title: "Co-Founder",
      org: "University Help Desk",
      detail: "Developed a support system serving 600+ students across departments.",
    },
    {
      title: "Head Organizer",
      org: "Zindigi Prize",
      detail: "Managed event operations, team coordination, and startup engagement.",
    },
    {
      title: "Chapter Head",
      org: "AWKUM",
      detail: "Coordinated chapter-level activities and student initiatives.",
    },
    {
      title: "Event Head",
      org: "AWS Community",
      detail: "Organized technical sessions and workshops on cloud computing.",
    },
  ],

  certifications: [
    {
      title: "CS50's Introduction to AI with Python",
      org: "Harvard University",
    },
    {
      title: "Programming for Everybody",
      org: "Coursera",
    },
    {
      title: "Supercomputers & AI",
      org: "Catalyst GIK — 04 July 2024",
    },
    {
      title: "Critical Thinking",
      org: "Catalyst GIK — 02 July 2024",
    },
    {
      title: "Storytelling & Investment",
      org: "Catalyst GIK — 04 July 2024",
    },
    {
      title: "Problem Solving & Decision Making",
      org: "Catalyst GIK — 26 June 2024",
    },
  ],
};
