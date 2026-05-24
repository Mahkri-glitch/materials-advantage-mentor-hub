export const meetingTypes = [
  {
    "title": "Initial Mentor-Mentee Meeting",
    "length": "30-45 minutes",
    "purpose": "Build the relationship, understand the mentee's interests, set expectations, and choose one practical next step.",
    "questions": [
      "What made you interested in Materials Science or engineering?",
      "Are there any fields you are already curious about?",
      "Are you more interested in research, industry, graduate school, entrepreneurship, or still unsure?",
      "What classes have influenced your interests so far?",
      "What kind of work sounds most interesting: lab work, fabrication, characterization, data analysis, design, modeling, manufacturing, or something else?",
      "What feels most confusing right now?",
      "What would success in this mentoring relationship look like for you?"
    ]
  },
  {
    "title": "Mid-Semester Mentee Check-In",
    "length": "30-45 minutes",
    "purpose": "Check whether the mentee is gaining clarity, identify what still feels unclear, and update the next action step.",
    "questions": [
      "What has gone well so far?",
      "What has not gone well?",
      "What still feels unclear?",
      "Have your interests changed since our first meeting?",
      "Do you feel closer to entering research or choosing a direction?",
      "Do you need help with a professor email, resume, research topic, paper, or career pathway?"
    ]
  },
  {
    "title": "Mentor Philosophy Meeting",
    "length": "45-60 minutes",
    "purpose": "Mentor-only meeting to define mentoring style, boundaries, office hours, expectations, and referral steps.",
    "questions": [
      "What is a mentor?",
      "What is the difference between a mentor, teacher, advisor, and friend?",
      "What kind of mentor do you want to be?",
      "What support can you realistically provide?",
      "How can mentors encourage independence instead of dependence?",
      "How can we give honest feedback without discouraging students?"
    ]
  }
] as const;

export const researchEntryModules = [
  {
    "title": "Why Research Matters for Any Career Path",
    "category": "Research Mindset",
    "purpose": "Help students understand that research is useful even if they do not want a PhD.",
    "humanCopy": "Research is one of the fastest ways to figure out what you actually like. It forces you to deal with problems that do not have answer keys, which is basically what industry, graduate school, startups, and technical leadership all require.",
    "takeaways": [
      "Research teaches students how to work through messy problems instead of only solving textbook-style questions.",
      "It helps students test whether they like hands-on work, coding, literature review, experiments, modeling, characterization, or design.",
      "It gives students stronger stories for internships, interviews, scholarships, REUs, and graduate school.",
      "It builds relationships with mentors who can write detailed recommendation letters or connect students to opportunities.",
      "It shows students what a field actually feels like before they commit years to it."
    ],
    "mentorUse": "Use this early with freshmen or sophomores who think research only matters for graduate school."
  },
  {
    "title": "Start From Zero",
    "category": "Entering Research",
    "purpose": "Give students a realistic starting point when they have no lab experience.",
    "humanCopy": "You do not need to be fully ready before you start. Most undergrads begin by being confused, asking basic questions, and slowly becoming useful. The point is to start in a way that shows curiosity and reliability.",
    "takeaways": [
      "Students do not need prior research experience to ask about joining a lab.",
      "Professors and graduate students usually expect new undergraduates to need training.",
      "A good first step is to make a small list of labs, read abstracts or project summaries, and ask focused questions.",
      "Being reliable, showing up, taking notes, and following through matter more than sounding impressive.",
      "Students should not wait for a perfect posting; many opportunities come from direct outreach."
    ],
    "mentorUse": "Use this during office hours when a student says they are interested but not qualified enough."
  },
  {
    "title": "Finding Research Opportunities",
    "category": "Entering Research",
    "purpose": "Show students where research opportunities actually come from.",
    "humanCopy": "A lot of research positions are hidden. They are not always posted like jobs. You usually find them by reading faculty pages, talking to graduate students, going to office hours, showing up to seminars, and emailing people with a real reason.",
    "takeaways": [
      "Use faculty pages, lab websites, department directories, seminar pages, and research center pages.",
      "Look for active projects, recent papers, lab members, and any joining instructions.",
      "Talk to TAs and graduate students because they often know which labs need undergrads.",
      "Attend department talks and poster sessions even if you do not understand everything yet.",
      "Make a list of 10 to 15 possible labs instead of putting all hope into one professor."
    ],
    "mentorUse": "Convert this into a checklist for students before they email professors."
  },
  {
    "title": "Finding a Research Mentor",
    "category": "Mentorship",
    "purpose": "Explain that finding a research mentor is relationship-building, not just applying to a position.",
    "humanCopy": "Getting into a lab is one thing. Building a real mentor relationship is different. That comes from showing up, asking better questions over time, and proving that you can be trusted with more responsibility.",
    "takeaways": [
      "Students can reach mentors through cold emails, warm introductions, TAs, graduate students, faculty office hours, seminars, and club connections.",
      "A professor who cannot take a student may still recommend someone else.",
      "A graduate student can often explain the lab culture and help create a warmer introduction.",
      "A good mentor gives feedback, meets regularly enough, and helps the student gain responsibility over time.",
      "If a lab is not helping the student grow after a reasonable period, the student may need to reassess fit."
    ],
    "mentorUse": "Use this to help students understand what a healthy research relationship looks like."
  },
  {
    "title": "Professor Email Builder",
    "category": "Outreach Tools",
    "purpose": "Give students a structure without making them sound like they copied a template.",
    "humanCopy": "The email should sound like a real student wrote it. Not overly formal. Not generic. Not obviously AI-written. The goal is to show that you looked at the professor\u2019s work and can explain why it caught your attention.",
    "takeaways": [
      "Subject line should be specific and direct.",
      "Paragraph 1: why this professor or lab specifically.",
      "Paragraph 2: what background, class, skill, project, or curiosity connects you to the work.",
      "Paragraph 3: the ask, such as a short meeting or whether they are open to undergraduate help.",
      "Keep the email short, usually around 150 words or less.",
      "Use your university email when possible."
    ],
    "mentorUse": "Turn this into a live office-hours exercise where the student fills in their own details."
  },
  {
    "title": "Research Interest Statement Builder",
    "category": "Outreach Tools",
    "purpose": "Help students write the most important part of the professor email: why this research.",
    "humanCopy": "The research interest part should not say 'your research is interesting.' It should point to something specific and say why it made the student curious.",
    "takeaways": [
      "Name a specific paper, method, material system, device, project, or research question.",
      "Say what caught your attention in plain language.",
      "Connect that interest to a class, project, skill, or question you already have.",
      "Do not summarize the professor\u2019s whole career.",
      "Do not pretend to understand more than you do."
    ],
    "mentorUse": "Use this to make emails sound more human and less like a form letter."
  },
  {
    "title": "Cold Email vs Warm Introduction",
    "category": "Outreach Tools",
    "purpose": "Help students use both direct outreach and relationship-based introductions.",
    "humanCopy": "A warm intro is better when you can get it, but waiting around for the perfect connection is how nothing happens. Students should build warm connections while still sending specific, respectful emails.",
    "takeaways": [
      "Warm introductions can come from TAs, graduate students, faculty, club officers, alumni, and seminar conversations.",
      "Cold emails still work when they are specific and written in the student\u2019s own voice.",
      "A hybrid approach works well: talk to a graduate student first, learn about the lab, then contact the PI with better context.",
      "Loose connections count: a class, seminar, paper, lab member, or mutual contact can make an email feel less random."
    ],
    "mentorUse": "Use this to show students how networking and email outreach support each other."
  },
  {
    "title": "Timing and Follow-Up",
    "category": "Outreach Tools",
    "purpose": "Set simple rules for when to email and how to follow up without being annoying.",
    "humanCopy": "Sometimes the email is fine and the timing is just bad. The answer is not to spam the professor. Send one good follow-up, then move on and keep building your list.",
    "takeaways": [
      "Mid-week mornings are usually better than late-night or weekend emails.",
      "Avoid finals week, heavy holiday periods, and the most chaotic parts of the semester when possible.",
      "For summer research, students should start early in the spring semester or before.",
      "A good follow-up is short and sent after about two weeks.",
      "Reply in the same thread and add one real new detail if possible.",
      "After one follow-up with no answer, move on respectfully."
    ],
    "mentorUse": "Turn this into a timeline card for office hours and resource pages."
  },
  {
    "title": "What Professors and PIs Actually Value",
    "category": "Research Habits",
    "purpose": "Help students understand how to become the kind of student a lab wants to keep.",
    "humanCopy": "You do not need to act like the smartest person in the room. You need to be curious, reliable, honest, and willing to learn. That matters a lot more than trying to sound perfect.",
    "takeaways": [
      "Genuine interest matters more than generic resume-building.",
      "Reliability is huge: show up when you said you would and follow through.",
      "Good students ask questions, take notes, and try to understand the bigger picture.",
      "Students should be honest about what they know and what they do not know.",
      "Independence grows over time; it does not need to be perfect on day one."
    ],
    "mentorUse": "Use this in mentor meetings to explain what behavior builds trust in a lab."
  },
  {
    "title": "Common Outreach Mistakes",
    "category": "Outreach Tools",
    "purpose": "Give mentors a quick red-flag checklist before mentees send professor emails.",
    "humanCopy": "A bad email is usually not bad because the student is bad. It is bad because it sounds generic, too long, or fake. The fix is to make it shorter, more specific, and more like the student actually talks.",
    "takeaways": [
      "Do not send the same generic email to a bunch of professors.",
      "Do not use a stiff AI-sounding tone.",
      "Do not pretend to deeply understand a paper after only reading the title.",
      "Do not over-flatter.",
      "Do not ask about pay, recommendation letters, or publications in the first email.",
      "Do not ignore instructions listed on the lab website.",
      "Do not make the email so long that the point gets buried."
    ],
    "mentorUse": "Use this as an email review checklist during office hours."
  },
  {
    "title": "Summer Research and REU Strategy",
    "category": "Opportunities",
    "purpose": "Help students understand formal and informal summer research pathways.",
    "humanCopy": "Summer is when research can really click because students can focus without juggling a full class schedule. REUs are one route, but informal summer lab work can also be valuable.",
    "takeaways": [
      "REUs are structured summer research programs with projects, mentors, professional development, and final presentations.",
      "Students should apply to multiple programs rather than betting on one.",
      "Informal summer lab positions can come from emailing professors directly.",
      "Students should ask about funding professionally after establishing research interest.",
      "A good summer experience should end with something concrete: poster, presentation, summary, dataset, or stronger project ownership."
    ],
    "mentorUse": "Use this to create a semester-by-semester opportunity timeline."
  },
  {
    "title": "Graduate School and PhD Prep",
    "category": "Long-Term Pathways",
    "purpose": "Help students who may want graduate school understand why research depth matters.",
    "humanCopy": "For graduate school, research matters because it proves you know what research actually feels like. It is not just about having a lab name on a resume. It is about being able to explain what you did, what changed in your thinking, and why you want to keep going.",
    "takeaways": [
      "Depth usually matters more than collecting many shallow research experiences.",
      "A strong project story can come from a lab, REU, honors thesis, capstone, conference poster, or industry research project.",
      "Students should keep notes on what they did, what they learned, and how their interests changed.",
      "Working with graduate students helps undergrads see what graduate school actually looks like day to day.",
      "Recommendation letters are stronger when mentors can describe specific growth, reliability, and technical contribution."
    ],
    "mentorUse": "Use this with mentees considering MS/PhD routes in MSE, semiconductors, quantum materials, or materials informatics."
  }
] as const;

export const ucfResources = [
  {
    "name": "Companies and Schools in Semiconductors Spreadsheet",
    "category": "Career Mapping",
    "description": "Student-built spreadsheet to help mentees see the types of companies, schools, and pathways connected to semiconductor research and work.",
    "url": "https://docs.google.com/spreadsheets/d/1ZB9N0lIwZ-YG1deAg9hm5mMhYTzGwoJjfCNNl3AP_nE/edit?usp=sharing"
  },
  {
    "name": "UCF SEMI Undergraduate Certificate",
    "category": "Coursework",
    "description": "A formal way for students to connect coursework to semiconductor manufacturing, devices, and fabrication concepts.",
    "url": "https://www.ucf.edu/degree/semiconductor-engineering-and-manufacturing-instruction-semi-undergraduate-certificate/"
  },
  {
    "name": "UCF Research Cleanroom",
    "category": "Facilities",
    "description": "Cleanroom-related facilities and tool exposure that can help students understand fabrication, safety, contamination control, and process flow.",
    "url": "https://cleanrooms.research.ucf.edu/"
  },
  {
    "name": "SMART Workshop",
    "category": "Hands-On Training",
    "description": "A hands-on semiconductor manufacturing workshop pathway connected to cleanroom/process training.",
    "url": "https://www.ece.ucf.edu/smart/"
  },
  {
    "name": "ECE Scholarships",
    "category": "Funding",
    "description": "Scholarship and fellowship opportunities connected to ECE, semiconductor companies, and engineering student support.",
    "url": "https://www.ece.ucf.edu/ece-scholarships/"
  },
  {
    "name": "UCF Quantum Initiative",
    "category": "Quantum / Research",
    "description": "A research direction for students interested in quantum materials, devices, photonics, and interdisciplinary semiconductor-adjacent work.",
    "url": "https://www.research.ucf.edu/quantum-initiative/"
  },
  {
    "name": "UCF PREM / CQ-MIEE",
    "category": "Materials Research / Mentoring",
    "description": "A materials research and mentoring pathway connected to quantum materials innovation, workshops, conferences, and student development.",
    "url": "https://prem2.cecs.ucf.edu/"
  }
] as const;

export const faculty = [
  {
    "name": "Parag Banerjee",
    "department": "Materials Science and Engineering",
    "area": "ALD/ALE, thin films, atomic-scale surface/interface engineering, electronic/optical/energy device-relevant materials",
    "studentAngle": "Strong fit for process science, deposition, etching, thin films, and semiconductor-adjacent materials processing."
  },
  {
    "name": "Leland Nordin",
    "department": "Materials Science and Engineering / CREOL",
    "area": "Semiconductor materials and devices, growth, fabrication, characterization, optoelectronic/photonic devices",
    "studentAngle": "Strong fit for semiconductor light sources, infrared/optoelectronic devices, photonics, and device fabrication."
  },
  {
    "name": "Sidong Lei",
    "department": "Materials Science and Engineering / NanoScience Technology Center",
    "area": "Van der Waals semiconductors, 2D materials, surface/interface tailoring, flexible and layered devices",
    "studentAngle": "Strong fit for 2D semiconductors, van der Waals integration, nanoscale devices, and materials-device interfaces."
  },
  {
    "name": "Liping Yu",
    "department": "Materials Science and Engineering",
    "area": "Materials theory, modeling, informatics, electronic/energy materials, computational design of functional materials",
    "studentAngle": "Strong fit for computational materials, materials informatics, semiconductor screening, and theory-driven materials design."
  },
  {
    "name": "Viktoryia Shautsova",
    "department": "Materials Science and Engineering",
    "area": "2D materials, van der Waals heterostructure devices, photodetectors, laser patterning and phase transformation of 2D films",
    "studentAngle": "Good fit for 2D devices, photodetectors, nanoscale optoelectronics, and advanced device materials."
  },
  {
    "name": "Reza Abdolvand",
    "department": "Electrical and Computer Engineering",
    "area": "MEMS/NEMS, micro- and nano-systems, semiconductor workforce/cleanroom initiatives",
    "studentAngle": "Good fit for MEMS, fabrication, cleanroom training, and UCF semiconductor workforce programs."
  },
  {
    "name": "Jiann S. Yuan",
    "department": "Electrical and Computer Engineering",
    "area": "Semiconductor devices and ICs, GaN power devices, reliability analysis, analog/mixed-signal/RF circuits",
    "studentAngle": "Strong fit for device engineering, power semiconductors, reliability, ICs, and electronics design."
  },
  {
    "name": "Enxia Zhang",
    "department": "Electrical and Computer Engineering",
    "area": "Reliability and radiation response in advanced microelectronic devices and ICs based on silicon, compound semiconductors, 2D materials, photonic devices, RF devices, and MEMS/NEMS",
    "studentAngle": "Strong fit for space electronics, radiation effects, device reliability, SiC/GaN/compound semiconductors, and defense/aerospace applications."
  },
  {
    "name": "Wayesh Qarony",
    "department": "Physics / ECE / CREOL",
    "area": "Quantum materials and devices, integrated photonics, nano-optical devices, single-photon sources and detectors",
    "studentAngle": "Good fit for quantum photonics, optoelectronics, integrated photonic devices, and quantum-device materials."
  },
  {
    "name": "Saiful Khondaker",
    "department": "Physics",
    "area": "Nanoscale electrical/optical devices using low-dimensional nanostructures, nanotubes, graphene, organic electronics, photovoltaic devices",
    "studentAngle": "Good fit for nanodevices, low-dimensional electronic transport, graphene/CNT devices, and organic electronics."
  },
  {
    "name": "Sergey Stolbov",
    "department": "Physics",
    "area": "Computational quantum materials, defects in wide-bandgap semiconductors, spin qubits and single-photon emitters",
    "studentAngle": "Good fit for theory/computation, wide-bandgap semiconductors, quantum defects, and quantum information materials."
  },
  {
    "name": "Tom Hopper",
    "department": "Chemistry",
    "area": "Ultrafast photophysics in organic, hybrid, nanoscale materials and devices; emerging photovoltaics, optoelectronic and quantum technologies",
    "studentAngle": "Good fit for chemistry/materials links to optoelectronics, perovskites, quantum dots, and ultrafast characterization."
  }
] as const;

export const pathways = [
  {
    "title": "Semiconductors and Thin Films",
    "description": "Process engineering, deposition, etching, lithography, metrology, devices, yield, reliability, manufacturing, and data-driven process control.",
    "skills": [
      "Semiconductor devices",
      "Thin films",
      "Vacuum/plasma basics",
      "Metrology",
      "Statistics",
      "Python/data analysis"
    ]
  },
  {
    "title": "Biomaterials",
    "description": "Implants, tissue engineering, drug delivery, medical devices, surface chemistry, and biocompatibility.",
    "skills": [
      "Surface chemistry",
      "Mechanical behavior",
      "Cell-material interactions",
      "Ethics",
      "Literature review"
    ]
  },
  {
    "title": "Polymers and Soft Materials",
    "description": "Plastics, composites, coatings, flexible electronics, packaging, sustainability, and structure-property relationships.",
    "skills": [
      "Polymer science",
      "Mechanical testing",
      "Thermal analysis",
      "Processing",
      "Sustainability"
    ]
  },
  {
    "title": "Metals, Metallurgy, and Manufacturing",
    "description": "Aerospace, defense, automotive, additive manufacturing, structural materials, and failure analysis.",
    "skills": [
      "Phase diagrams",
      "Heat treatment",
      "SEM/EDS",
      "Fracture/fatigue",
      "Manufacturing"
    ]
  },
  {
    "title": "Ceramics and Energy Materials",
    "description": "Batteries, fuel cells, solar materials, catalysts, high-temperature materials, and electronic ceramics.",
    "skills": [
      "Crystal structures",
      "Defects",
      "Diffusion",
      "Electrochemistry",
      "XRD"
    ]
  },
  {
    "title": "Computational Materials and Materials Informatics",
    "description": "Simulation, AI/ML, high-throughput experiments, databases, and data-driven materials discovery.",
    "skills": [
      "Python",
      "Statistics",
      "ML basics",
      "Materials databases",
      "Scientific reproducibility"
    ]
  }
] as const;

export const featureRoadmap = [
  "Searchable resource cards by field, class, skill, and career pathway",
  "Mentor profiles with research experience and topics they can help with",
  "Office hour calendar or appointment signup",
  "Professor email builder and research-interest builder",
  "Follow-up reminder workflow",
  "Semiconductor roadmap from coursework to research to internships",
  "Mentee and mentor feedback forms",
  "Downloadable meeting templates",
  "Expanded pathway pages for biomaterials, polymers, metallurgy, ceramics, energy, and computational materials"
] as const;
