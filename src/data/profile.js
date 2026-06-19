// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to personalize your portfolio.
//  Images: drop files into the `public/images/` folder and
//  reference them as "/images/your-file.jpg".
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Luke Anthony",
  title: "Mechanical Design Engineer",
  tagline: "Product Development & Manufacturing Design.",
  bio: "Mechanical Design Engineer with expertise in CAD modeling, product development, manufacturing design, and engineering simulation. Experienced in creating production-ready designs using SolidWorks, AutoCAD, and Fusion 360, supported by strong knowledge of GD&T, technical drawings, sheet metal design, CNC machining, and additive manufacturing. Skilled in FEA and CFD analysis for validating structural integrity, optimizing performance, and improving product reliability. Passionate about transforming concepts into manufacturable solutions through efficient design, prototyping, and engineering analysis.",
  location: "",
  email: "lukeanthony.work1993@gmail.com",
  phone: "",
  freelancer: "https://www.freelancer.com/u/lukesanthony",
  freelancerHeader: "/images/freelancer-header.png",   // name + 5.0 rating + verified
  freelancerReviews: "/images/freelancer-reviews.png", // readable client review cards
  freelancerRating: "5.0",
  freelancerReviewCount: 12,
  github: "",   // optional
  resumeUrl: "", // optional: link to a PDF in /public
}

export const skills = [
  "AutoCAD",
  "SolidWorks",
  "Fusion 360",
  "CAD Modeling",
  "3D Modeling & Drafting",
  "FEA / Simulation",
  "GD&T",
  "Sheet Metal Design",
  "CNC Machining",
  "3D Printing",
  "Product Design",
  "Reverse Engineering",
  "Technical Drawings",
  "Prototyping",
]

// Each project can have one or more images.
export const projects = [
  {
    id: 1,
    title: "Injection Mould Tooling Design",
    description:
      "Multi-cavity injection mould design including core/cavity layout, ejector system, cooling channels, and guide components — modelled and assembled for manufacturability.",
    tools: ["SolidWorks", "Mould Design", "DFM"],
    images: ["/images/mold-tooling-1.jpg", "/images/mold-tooling-2.jpg"],
  },
  {
    id: 2,
    title: "Exhaust Manifold Flow Simulation",
    description:
      "Tubular exhaust header designed and analysed with flow simulation to study gas flow trajectories, pressure distribution, and balance the runner lengths.",
    tools: ["SolidWorks", "Flow Simulation", "CFD"],
    images: ["/images/exhaust-manifold-cfd.png"],
  },
  {
    id: 3,
    title: "Heat Sink Steady-State Thermal Analysis",
    description:
      "Steady-state thermal FEA of a finned heat sink in ANSYS — modelling convection and heat flux to map the directional heat-flux and temperature distribution across the fins and validate cooling performance.",
    tools: ["ANSYS", "Thermal FEA", "Simulation"],
    images: ["/images/heat-sink-thermal-fea.jpg"],
  },
  {
    id: 4,
    title: "Benchtop CNC Milling Machine",
    description:
      "Full 3D assembly of a compact 3-axis CNC milling machine — frame, linear motion stages, spindle mount, and stepper drives designed as an integrated system.",
    tools: ["SolidWorks", "Fusion 360", "Machine Design"],
    images: ["/images/cnc-milling-machine.jpg"],
  },
  {
    id: 5,
    title: "Bracket Modelling & Technical Drawing",
    description:
      "Mechanical bracket modelled from specification and detailed into a fully dimensioned 2D engineering drawing with tolerances and GD&T.",
    tools: ["SolidWorks", "AutoCAD", "GD&T"],
    images: ["/images/bracket-drawing.jpg"],
  },
  {
    id: 6,
    title: "Helical Staircase 3D Design",
    description:
      "Spiral staircase designed in 3D with developed plan, elevation, and isometric views — covering geometry, rise/run, and structural layout.",
    tools: ["AutoCAD", "3D Modeling", "Technical Drawings"],
    images: ["/images/helical-staircase.png"],
  },
  {
    id: 7,
    title: "Detailed 3D Building Models",
    description:
      "Highly detailed 3D building models created for printing and visualisation, demonstrating complex surface modelling and fine detail work.",
    tools: ["3D Modeling", "3D Printing", "Product Design"],
    images: ["/images/architectural-models.png"],
  },
  {
    id: 8,
    title: "Scale Model Boat — Pilar",
    description:
      "Hand-built scale model of the classic fishing boat Pilar — combining design precision with fabrication, finishing, and fine craftsmanship.",
    tools: ["Fabrication", "Prototyping", "Finishing"],
    images: ["/images/scale-model-boat.jpg"],
  },
]
