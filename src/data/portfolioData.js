export const personalInfo = {
  name: "Sriram Varma Vatsavayi",
  phone: "+91-7993899180",
  email: "sriramvarma2125@gmail.com",
  linkedin: "linkedin.com/sriram-varma",
  github: "github.com/Sriram-Varma-Vatsavayi",
  location: "Hyderabad, Telangana, India",
  objective: "Innovative and enthusiastic Information Technology engineering student with fundamental knowledge in programming, problem-solving, and system development. Aiming to contribute to a forward-thinking firm and enhance skills through real-world applications."
};

export const education = [
  {
    id: 1,
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
    degree: "Bachelor of Technology in Information Technology",
    duration: "Nov 2021 - May 2025",
    grade: "CGPA: 8.3",
    location: "Hyderabad, Telangana"
  },
  {
    id: 2,
    institution: "Deeksha Junior College",
    degree: "Intermediate",
    duration: "May 2019 - Mar 2021",
    grade: "Grade: 9",
    location: "Hyderabad, Telangana"
  },
  {
    id: 3,
    institution: "Silver Oaks International School",
    degree: "Primary And Secondary Schooling",
    duration: "May 2007 - Mar 2019",
    grade: "Grade: 9.2",
    location: "Hyderabad, Telangana",
    activities: "National Cadet Corps (Cat-A, 2016-2018)"
  }
];

export const experience = [
  {
    id: 1,
    company: "8th Element",
    position: "Machine Learning Intern",
    duration: "June 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Developed Python scripts for ML/LLM model monitoring and performance analysis",
      "Automated model health checks, accuracy tracking, and alerting mechanisms",
      "Implemented Agentic Referral management system using internal orchestrate library"
    ]
  },
  {
    id: 2,
    company: "Feynn Labs",
    position: "Machine Learning Intern",
    duration: "Mar 2025 – May 2025",
    type: "Remote",
    responsibilities: [
      "Proposed AI-powered product for small businesses with market research and feasibility analysis",
      "Built ML-powered Loan Approval Prediction System with SaaS monetization model",
      "Conducted EV market segmentation using clustering and demographic analysis"
    ]
  },
  {
    id: 3,
    company: "Infosys Springboard",
    position: "Machine Learning Internship",
    duration: "Oct 2024 – Dec 2024",
    type: "Virtual",
    responsibilities: [
      "Collaborated with 20+ team members on ML projects solving real-life problems",
      "Gained expertise in creating and optimizing ML models for practical applications"
    ]
  },
  {
    id: 4,
    company: "RCI @ DRDO",
    position: "Summer Intern",
    duration: "May 2024 – July 2024",
    type: "Full-time",
    responsibilities: [
      "Created standalone auditing application using Python libraries",
      "Developed system for identifying irregularities and providing insights about 15 system parameters",
      "Used Python built-in libraries and registry for system detail extraction"
    ]
  }
];

export const skills = {
  programmingLanguages: [
    { name: "Java", level: 85 },
    { name: "Python", level: 90 }
  ],
  technicalAreas: [
    { name: "Data Structures and Algorithms", level: 80 },
    { name: "Object-Oriented Programming", level: 85 },
    { name: "Operating Systems", level: 75 },
    { name: "Database Management Systems", level: 80 },
    { name: "Computer Networks", level: 75 },
    { name: "Machine Learning", level: 85 }
  ],
  developerTools: [
    { name: "Jupyter Notebook", level: 90 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Google Colab", level: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Adipo-Insight Body Fat Estimator",
    technologies: ["Python", "OpenCV", "MediaPipe", "PixelLib", "Flask", "Amazon EC2"],
    description: "Advanced body fat estimation system using computer vision and machine learning techniques.",
    features: [
      "Image preprocessing and pose detection",
      "Instance segmentation for body analysis",
      "Weighted scoring algorithm implementation",
      "Comprehensive testing and validation"
    ],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Electricity Demand and Price Forecasting",
    technologies: ["Python", "TensorFlow", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
    description: "ML-based forecasting system for electricity demand and pricing prediction.",
    features: [
      "Time series analysis and forecasting",
      "Random Forest and XGBoost model implementation",
      "Data visualization and analysis",
      "Performance optimization and validation"
    ],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Subject Based Document Classification Model",
    technologies: ["Python", "NLP", "Machine Learning", "Spacy", "NLTK"],
    description: "Intelligent document classification system using natural language processing.",
    features: [
      "Large database document classification",
      "NLP preprocessing and feature extraction",
      "Multi-class classification algorithms",
      "Text mining and keyword extraction"
    ],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "PyGuardian",
    technologies: ["Python", "OS Libraries", "Registry APIs", "System Monitoring", "Cross-Platform Development"],
    description: "Comprehensive system auditing tool for multi-platform monitoring.",
    features: [
      "15+ system parameter monitoring",
      "Cross-platform compatibility",
      "Standalone application architecture",
      "Real-time system health insights"
    ],
    github: "#",
    live: "#"
  }
];

export const volunteerExperience = [
  {
    id: 1,
    organization: "National Cadet Corps",
    role: "Cadet",
    description: "Completed NCC 'A' certificate with distinction, leadership training, community service",
    duration: "2016-2018"
  },
  {
    id: 2,
    organization: "GCT GRIET",
    role: "Convenor and Sponsorship Head",
    description: "Organized environmental events, secured 50,000+ INR in sponsorships",
    duration: "2021-2025"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: `https://${personalInfo.linkedin}`,
    icon: "linkedin"
  },
  {
    name: "GitHub", 
    url: `https://${personalInfo.github}`,
    icon: "github"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "email"
  }
];