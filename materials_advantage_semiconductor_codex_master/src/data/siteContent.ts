export const mentoringSeminarGoals = [
  "Become more reflective and effective mentors",
  "Design and evaluate mentoring approaches",
  "Build trust- and respect-based relationships",
  "Communicate more effectively",
  "Stimulate creativity, independence, and confidence",
  "Support different learning styles and experiences",
  "Build a mentor community by sharing challenges and solutions",
] as const;

export const firstMeetingChecklist = [
  "Make direct eye contact and be enthusiastic.",
  "Introduce the mentee to the lab and lab mates.",
  "Acquaint them with the building/lab environment.",
  "Help them start a lab notebook.",
  "Talk about the big picture of the project.",
  "Discuss lab policies and norms.",
  "Discuss the mentee's background.",
  "Get to know the mentee as a person.",
] as const;

export const mentorPhilosophyPrompts = [
  "What is a mentor?",
  "What is the difference between a teacher, advisor, and mentor?",
  "What kind of mentor do you want to be?",
  "Can a mentor also be an evaluator?",
  "What kind of power does a mentor have?",
  "How do you give feedback without discouraging someone?",
  "How do you support a mentee without making them dependent?",
] as const;

export const mentorPhilosophyTemplate = [
  "My goal as a mentor is…",
  "I believe a good mentor should…",
  "I can support students with…",
  "I should refer students elsewhere when…",
  "I will know the relationship is working if…",
] as const;

export const expectationColumns = {
  mentee: ["goals", "availability", "learning style", "research interests", "what feels confusing", "what success looks like"],
  mentor: ["communication style", "expected time commitment", "lab culture", "how to ask for help", "what independence looks like", "realistic support scope"],
} as const;

export const mentoringMeetings = [
  {
    title: "Initial Mentor-Mentee Meeting",
    purpose: "Get to know one another, define the relationship, establish expectations, and define early research/career goals.",
    whenToUse: "Week 1-3 of the mentoring cycle.",
    questions: [
      "Who are you and what brought you to Materials Science?",
      "What are your future career plans, even if unclear?",
      "Why do you want to do research?",
      "What would success in this program look like to you?",
      "How do you learn best?",
      "Do you prefer working alone or in groups?",
      "What questions do you have about the field or research?",
    ],
    deliverable: ["Relationship setup notes", "Expectation snapshot", "First next-step action"],
  },
  {
    title: "Mid-Semester Mentee Check-In",
    purpose: "Reaffirm expectations, identify what is working, identify what is unclear, and update the student's path.",
    whenToUse: "Midpoint of semester or after 4-6 weeks.",
    questions: [
      "What do you like best about working in the lab so far?",
      "What has been most challenging?",
      "What have you learned that you did not expect?",
      "Are you comfortable interacting with lab members?",
      "What parts of the project or career path are still unclear?",
      "Which technique, skill, or topic feels most challenging?",
      "Do you feel ready to work more independently?",
    ],
    deliverable: ["Progress check", "Blockers + support plan", "Updated path for next month"],
  },
  {
    title: "Mentor Philosophy Meeting",
    purpose: "Mentor-only reflection to discuss challenges, compare styles, define boundaries, and improve support quality.",
    whenToUse: "Mentor debrief every month or after major mentoring moments.",
    questions: [
      "What has been your biggest challenge as a mentor?",
      "What has been your biggest success so far?",
      "What has been your biggest disappointment?",
      "What did you learn about working with your mentee that you did not expect?",
    ],
    deliverable: ["Mentor reflection note", "One mentoring change to test", "Boundary and escalation reminders"],
  },
] as const;

export const understandingChecks = [
  "Have the mentee explain the project back to you.",
  "Have them explain it to another undergraduate.",
  "Have them draw a flowchart or diagram.",
  "Have them write a short paragraph describing the project.",
  "Ask another lab member to ask the student to explain the project.",
  "Give worksheets or paper-reading prompts.",
  "If a student makes a claim, ask them to verify it through literature.",
] as const;

export const mentoringPrinciples = [
  ["Careful listening", "Listen for confusion and goals, not just correct answers."],
  ["Keeping in touch", "Frequent short check-ins beat rare long meetings."],
  ["Multiple mentors", "One student can learn from faculty, grads, peers, and alumni."],
  ["Building networks", "Introduce mentees to people, not just resources."],
  ["Professional ethics", "Model responsible, honest, and respectful research behavior."],
  ["Don't abuse authority", "Use influence to empower, never to intimidate."],
  ["Nurture self-sufficiency", "Guide decisions; do not make every decision for them."],
  ["Be constructive", "Give actionable feedback, not vague criticism."],
  ["Provide introductions", "Open doors to labs, talks, collaborators, and opportunities."],
  ["Find your own mentors", "Mentors improve faster when they also get mentored."],
] as const;

export const whyMentor = [
  "Satisfaction from helping students succeed",
  "Attracting strong students to your projects",
  "Staying sharp professionally",
  "Developing your network",
  "Extending your contribution beyond yourself",
  "Building a culture where mentees become mentors",
] as const;

export const materialsReadiness = [
  "Ask questions before making avoidable mistakes.",
  "Learn basic lab safety and PPE.",
  "Know where SDS/safety information is located.",
  "Understand lab-specific chemical and waste rules.",
  "Learn how to keep a lab notebook.",
  "Learn how to label samples clearly.",
  "Learn basic sample preparation expectations.",
  "Learn how to read a paper.",
  "Learn how to make basic graphs and tables.",
  "Learn how to explain your project in simple terms.",
  "Learn how to organize raw data and files.",
  "Learn when to ask for help.",
] as const;

export const semiconductorChecklist = {
  warning: "This is not a replacement for lab training, EHS training, SDS review, cleanroom training, or PI/lab-specific rules. It is only a beginner awareness checklist.",
  sections: [
    { title: "A. Cleanroom and contamination basics", items: ["Understand why particles, oils, dust, and fingerprints matter.", "Learn gowning rules before entering a cleanroom.", "Do not touch wafer surfaces with bare hands.", "Know which tools and tweezers are allowed for which samples.", "Keep samples labeled and stored properly.", "Understand that clean in a cleanroom has a very specific meaning."] },
    { title: "B. Silicon wafer basics / cool facts", items: ["Silicon wafers are usually handled by the edge because the polished surface matters.", "A wafer can look clean but still have native oxide, organic residue, moisture, or particles.", "Surface preparation can strongly affect deposition, etching, adhesion, and measurement results.", "Crystal orientation, wafer type, doping, oxide layers, and backside coatings can matter.", "A small labeling mistake can ruin the meaning of an experiment."] },
    { title: "C. Sample preparation awareness", items: ["Know substrate material, size, orientation, thickness, and surface condition.", "Record whether the sample has native oxide, thermal oxide, metal film, polymer coating, or prior processing.", "Learn how the lab cleans samples, but do not perform chemical cleaning without training.", "Track pre-cleaning, drying, storage, and transfer conditions.", "Take photos or notes before and after processing when useful."] },
    { title: "D. Hazardous precursor / chemical awareness", items: ["Many semiconductor processes use hazardous chemicals, gases, solvents, or precursors.", "Never handle a precursor, cylinder, ampoule, solvent, acid, base, or waste stream without training.", "Always check SDS, lab SOPs, PPE rules, and waste procedures.", "Understand pyrophoric, corrosive, toxic, oxidizing, flammable, and moisture-sensitive chemicals need special controls.", "Do not assume small amount means safe.", "If something seems wrong, stop and notify trained personnel."] },
    { title: "E. Process documentation", items: ["Record tool name, recipe name, date, sample ID, operator, key process conditions, and abnormal observations.", "Save raw data and processed data separately.", "Write notes so another student could understand what happened later.", "Record failed runs too."] },
    { title: "F. Measurement and metrology basics", items: ["Know what the measurement actually tells you.", "Learn differences between thickness, roughness, sheet resistance, resistivity, composition, phase, and morphology.", "Do not report numbers without units.", "Do not trust a graph until you understand how data was collected.", "Compare to literature or expected values when possible."] },
    { title: "G. Research mindset", items: ["Start with one process, one material system, or one measurement method.", "Learn vocabulary slowly.", "Ask why each step exists.", "Connect class concepts to experiments.", "Track confusion because those questions often become the best learning moments."] },
  ],
} as const;

export const ucfResources = [
  { name: "Companies and Schools in Semiconductors Spreadsheet", category: "Career Mapping", description: "Student-built spreadsheet to map semiconductor companies, schools, and pathways.", url: "https://docs.google.com/spreadsheets/d/1ZB9N0lIwZ-YG1deAg9hm5mMhYTzGwoJjfCNNl3AP_nE/edit?usp=sharing" },
  { name: "UCF SEMI Undergraduate Certificate", category: "Coursework", description: "Course pathway connecting semiconductor manufacturing, devices, and fabrication.", url: "https://www.ucf.edu/degree/semiconductor-engineering-and-manufacturing-instruction-semi-undergraduate-certificate/" },
  { name: "UCF Research Cleanroom", category: "Facilities", description: "Cleanroom facilities and training context for fabrication/process understanding.", url: "https://cleanrooms.research.ucf.edu/" },
  { name: "SMART Workshop", category: "Hands-On Training", description: "Semiconductor manufacturing workshop tied to cleanroom/process training.", url: "https://www.ece.ucf.edu/smart/" },
  { name: "ECE Scholarships", category: "Funding", description: "Scholarships and fellowships connected to semiconductor and engineering pathways.", url: "https://www.ece.ucf.edu/ece-scholarships/" },
  { name: "UCF Quantum Initiative", category: "Quantum / Research", description: "Quantum materials/devices/photonics and interdisciplinary semiconductor-adjacent research.", url: "https://www.research.ucf.edu/quantum-initiative/" },
  { name: "UCF PREM / CQ-MIEE", category: "Materials Research / Mentoring", description: "Materials mentoring and research development linked to quantum-related pathways.", url: "https://prem2.cecs.ucf.edu/" },
] as const;

export const faculty = [
  { name: "Parag Banerjee", department: "Materials Science and Engineering", area: "ALD/ALE, thin films, atomic-scale interfaces", studentAngle: "Process science and semiconductor-adjacent materials processing." },
  { name: "Leland Nordin", department: "Materials Science and Engineering / CREOL", area: "Semiconductor materials and optoelectronic devices", studentAngle: "Semiconductor photonics, device fabrication." },
  { name: "Sidong Lei", department: "Materials Science and Engineering / NanoScience Technology Center", area: "2D materials and van der Waals semiconductors", studentAngle: "Nanoscale devices and interface engineering." },
  { name: "Liping Yu", department: "Materials Science and Engineering", area: "Materials theory, modeling, and informatics", studentAngle: "Computational materials and data-driven design." },
] as const;

export const pathways = [
  { title: "Biomaterials", description: "Implants, tissue interactions, biointerfaces, and medical-relevant materials design." },
  { title: "Polymers and Soft Materials", description: "Composites, coatings, flexible systems, and sustainability-oriented materials." },
  { title: "Metals, Metallurgy, and Manufacturing", description: "Structural materials, failure analysis, additive manufacturing, and process optimization." },
  { title: "Ceramics and Energy Materials", description: "Batteries, catalysts, high-temperature materials, and electrochemical systems." },
  { title: "Computational Materials and Informatics", description: "Simulation, ML/AI, and data-driven materials discovery." },
] as const;


export const researchEntryModules = [
  { title: "Why Research Matters for Any Career Path", category: "Research Mindset", humanCopy: "Research helps you think through unclear problems and build useful stories for internships, industry, and graduate school.", takeaways: ["Test interests early.", "Build technical communication.", "Grow confidence through real problem-solving."] },
  { title: "Start From Zero", category: "Entering Research", humanCopy: "You do not need to be fully ready. Start small and stay reliable.", takeaways: ["List labs.", "Read short project summaries.", "Ask focused questions."] },
  { title: "Finding Research Opportunities", category: "Entering Research", humanCopy: "Many opportunities are hidden and come from direct outreach and conversations.", takeaways: ["Use faculty pages.", "Talk to grad students.", "Attend seminars."] },
  { title: "Professor Email Builder", category: "Outreach Tools", humanCopy: "Write like a real student. Be specific, concise, and curious.", takeaways: ["Why this lab.", "How your background connects.", "Clear ask."] },
  { title: "Timing and Follow-Up", category: "Outreach Tools", humanCopy: "Send one good follow-up after about two weeks, then move on respectfully.", takeaways: ["Timing matters.", "Use one follow-up.", "Keep a lab list active."] },
  { title: "Summer Research and REU Strategy", category: "Opportunities", humanCopy: "Use summer for research depth through REUs or lab positions.", takeaways: ["Apply broadly.", "Track deadlines.", "Aim for tangible outputs."] },
] as const;

export const meetingTypes = mentoringMeetings.map((m) => ({ title: m.title, length: "30-45 minutes", purpose: m.purpose, questions: m.questions }));
