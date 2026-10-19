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
      "Tekla models for complex industrial structures, with material estimation and constructibility analysis.",
    points: [
      "Tekla Structures integration",
      "Complex industrial structures",
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
  title: "Industrial Detailing & Engineering Services",
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
    "Founded in January 2022, DOSIND is built on the foundation of technical excellence, commitment, and reliability. Our team of experienced engineers and modelers deliver accurate, coordinated, and constructible solutions for industrial, commercial, and infrastructure projects.",
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  paragraphs: string[];
};

export const team: TeamMember[] = [
  {
    name: "Vishal Sharma",
    role: "Founder and Managing Director",
    paragraphs: [
      "Vishal Sharma is a highly experienced BIM engineering and detailing professional with over 15 years in the industry. As Founder and Managing Director at DosInd, he has successfully led numerous complex projects across industrial, commercial, and residential sectors for prestigious European and Indian clients.",
      "Fluent in softwares including Tekla Structures, AutoCAD, Revit, and Advance Steel, Vishal ensures precision and efficiency in every stage of project delivery. His strong command of coordination platforms such as Autodesk Construction Cloud (ACC) and Trimble Connect enables seamless collaboration across multidisciplinary teams.",
      "With deep knowledge of Eurocodes, Indian Standards, and AISC codes, he combines technical expertise with strategic project management, driving innovative solutions that meet the highest engineering and regulatory benchmarks. His leadership is defined by reliability, technical excellence, and a commitment to delivering projects that stand the test of time.",
    ],
  },
  {
    name: "Anuj Singh",
    role: "Founder and Technical Director",
    paragraphs: [
      "Anuj Singh brings over 16 years of specialized experience in structural engineering, with a proven track record in the design of steel and concrete structures across industrial, commercial, and residential projects. His expertise lies in structural design optimization, ensuring cost-effective, safe, and efficient solutions for complex engineering challenges.",
      "With extensive knowledge of both Eurocodes and Indian Standards, Anuj has successfully delivered projects that meet stringent international and local requirements. His leadership combines technical precision with innovative problem-solving, guiding DosInd in executing demanding projects with reliability and excellence. He has a proven track record of delivering complex projects for prestigious European and Indian clients.",
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
  summary: string;
  location?: string;
  image?: string;
};

/** Add project entries here as names and photographs become available. */
export const projects: Project[] = [];

export const formConfirmation =
  "Thank you. Your message stays on this page and has not been emailed.";
