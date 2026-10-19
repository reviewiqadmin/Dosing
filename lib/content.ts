export const company = {
  name: "DosInd",
  expansion: "Design of Structures - Structural Detailing & Engineering",
  established: "January 2022",
  motto:
    "Combining experience with technology to deliver precise, practical, and cost-effective structural solutions that add value to our clients' success.",
  footerLine:
    "Design of Structures. Building Trust through Engineering Excellence.",
};

export const home = {
  title:
    "DosInd is an Indian structural engineering consultancy delivering advanced solutions for complex new build and renovation projects.",
  lede:
    "We provide specialized expertise in structural analysis, design optimization, and compliance with rigorous performance standards. Our team ensures reliability, precision, and a solution driven approach, creating durable structures that meet the highest engineering and regulatory requirements across the globe.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/our-story", label: "Our Story" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact us" },
];

export const reasons = [
  {
    title: "Expertise in Demanding Applications",
    text: "We specialize in structural engineering solutions for complex projects. Our team applies advanced analysis, modern design methodologies, and decades of experience to solve challenging structural requirements with precision.",
  },
  {
    title: "Tailored Project Solutions",
    text: "Every project is unique. We collaborate closely with clients to understand their objectives and deliver customized designs that align with project goals, functionality, and long term performance.",
  },
  {
    title: "Commitment to Responsibility",
    text: "Sustainability is integral to our work. We prioritize energy efficient design, environmentally responsible materials, and practices that reduce the ecological footprint of every structure we engineer.",
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "structural-steel-modeling",
    title: "Structural Steel Modeling",
    summary:
      "Tekla models for complex structures, with material estimation and constructibility analysis.",
    points: [
      "Tekla Structures integration",
      "Complex structures",
      "Accurate material estimation",
      "Constructibility analysis",
    ],
  },
  {
    slug: "concrete-modeling",
    title: "Concrete Modeling",
    summary:
      "Rebar, precast, cast-in-place, and formwork planning in Tekla Structures.",
    points: [
      "Tekla Structures detailing",
      "Rebar modeling & detailing",
      "Precast & Cast-in-place",
      "Formwork planning",
    ],
  },
  {
    slug: "connection-detailing",
    title: "Connection Detailing",
    summary:
      "Custom nodes, value engineering, and fabrication-ready connection details.",
    points: [
      "Ideastatica design",
      "Custom node solutions",
      "Value engineering",
      "Fabrication-ready details",
    ],
  },
  {
    slug: "3d-coordination",
    title: "3D Coordination",
    summary:
      "Clash resolution and multi-discipline coordination through to constructability reviews.",
    points: [
      "Clash checking & resolution",
      "Multi-discipline integration",
      "Navisworks Manage",
      "Constructability reviews",
    ],
  },
];

export const servicesIntro = {
  title: "Structural Detailing & Engineering Services",
  lede: "Delivering precise, practical, and constructible structural solutions through advanced technology and engineering excellence.",
};

export type SoftwareGroup = {
  title: string;
  tools: string[];
};

export const software: SoftwareGroup[] = [
  {
    title: "Software used for calculation",
    tools: [
      "Staad Pro",
      "Robot",
      "Structural Analysis",
      "SAP2000",
      "RFEM",
      "ETABS",
    ],
  },
  {
    title: "Modeling and detailing",
    tools: [
      "Tekla Structures",
      "AutoCAD",
      "Advance Steel",
      "Autodesk Revit",
    ],
  },
  {
    title: "Review and coordination",
    tools: [
      "Navisworks Manage",
      "Solibri",
      "Autodesk Construction Cloud",
    ],
  },
];

export const about = {
  discipline: "Structural Detailing & Engineering",
  capabilities: "Tekla Steel & Concrete Modeling | Detailing | Engineering",
  paragraphs: [
    "DOSIND (Design of Structures - Structural Detailing & Engineering) is a specialized engineering and detailing company providing high-quality Tekla Steel and Concrete modeling, detailing, and engineering services to clients.",
    "Founded in January 2022, DOSIND is built on the foundation of technical excellence, commitment, and reliability. Our team of experienced engineers and modelers deliver accurate, coordinated, and constructible solutions for commercial and infrastructure projects.",
  ],
};

export const enquiryEmails = [
  "VishalSharma@DosInd.com",
  "Anujsingh@DosInd.com",
];

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneHref: string;
  paragraphs: string[];
};

export const team: TeamMember[] = [
  {
    name: "Vishal Sharma",
    role: "Founder and Managing Director",
    email: "VishalSharma@DosInd.com",
    phone: "78359 22020",
    phoneHref: "tel:+917835922020",
    paragraphs: [
      "Vishal Sharma is a highly experienced BIM engineering and detailing professional with over 15 years in the industry. As Founder and Managing Director at DosInd, he has successfully led numerous complex projects across commercial and residential sectors for prestigious European and Indian clients.",
      "Fluent in softwares including Tekla Structures, AutoCAD, Revit, and Advance Steel, Vishal ensures precision and efficiency in every stage of project delivery. His strong command of coordination platforms such as Autodesk Construction Cloud (ACC) and Trimble Connect enables seamless collaboration across multidisciplinary teams.",
      "With deep knowledge of Eurocodes, Indian Standards, and AISC (American Institute of Steel Construction) codes, he combines technical expertise with strategic project management, driving innovative solutions that meet the highest engineering and regulatory benchmarks. His leadership is defined by reliability, technical excellence, and a commitment to delivering projects that stand the test of time.",
    ],
  },
  {
    name: "Anuj Singh",
    role: "Founder and Technical Director",
    email: "Anujsingh@DosInd.com",
    phone: "99903 73927",
    phoneHref: "tel:+919990373927",
    paragraphs: [
      "Anuj Singh brings over 16 years of specialized experience in structural engineering, with a proven track record in the design of steel and concrete structures across commercial and residential projects. His expertise lies in structural design optimization, ensuring cost-effective, safe, and efficient solutions for complex engineering challenges.",
      "With extensive knowledge of Eurocodes, Indian Standards, and AISC (American Institute of Steel Construction), Anuj has successfully delivered projects that meet stringent international and local requirements. His leadership combines technical precision with innovative problem-solving, guiding DosInd in executing demanding projects with reliability and excellence. He has a proven track record of delivering complex projects for prestigious European and Indian clients.",
    ],
  },
];

export type Office = {
  name: string;
};

export const offices: Office[] = [
  { name: "Gurgaon Office" },
  { name: "Kurukshetra Office" },
];

export type Project = {
  name: string;
  paragraphs: string[];
  location?: string;
  image?: string;
};

/** Add further project entries here as names and photographs become available. */
export const projects: Project[] = [
  {
    name: "Kisama Festival Ground",
    location: "Kohima, Nagaland, India",
    paragraphs: [
      "This project involved the design and execution of a highly complex steel structure for a spectator seating area, distinguished by its architecturally challenging curved roof geometry.",
      "Approximately 1,500 metric tons of structural steel were utilized, encompassing primary trusses, secondary members, and specialized curved elements.",
    ],
    image: "/projects/kisama-festival-ground.jpg",
  },
  {
    name: "Steel structure under construction",
    paragraphs: [
      "Site photograph of a steel structure during construction.",
    ],
    image: "/site/site-5.jpg",
  },
];

export const sitePhotos = [
  {
    src: "/site/site-1.jpg",
    alt: "Steel frame and concrete building under construction",
  },
  {
    src: "/site/site-2.jpg",
    alt: "Process plant with piping and a steel structure",
  },
  {
    src: "/site/site-3.jpg",
    alt: "Concrete and steel pipe rack beside storage tanks",
  },
  {
    src: "/site/site-4.jpg",
    alt: "Building frame under construction on site",
  },
  {
    src: "/site/site-5.jpg",
    alt: "Steel structure of a process plant under construction",
  },
];

export const formConfirmation =
  "Your email draft is addressed to Vishal Sharma and Anuj Singh. Send it from your mail app to complete the request.";

export const formFileNote =
  "Attach the reference file in that draft before you send. The browser cannot add the file on its own.";
