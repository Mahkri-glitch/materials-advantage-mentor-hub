export const researchResources = [
  { title: "Why do research?", group: "Getting started", description: "See how research builds problem-solving, communication, mentoring relationships, and clearer career direction—not only graduate-school preparation.", url: "https://academicsuccess.ucf.edu/our/prospective/why-do-research/", source: "UCF Office of Undergraduate Research" },
  { title: "How to get started", group: "Getting started", description: "A practical UCF starting point for learning what undergraduate research involves and preparing to join a project.", url: "https://academicsuccess.ucf.edu/our/prospective/how-to-get-started/", source: "UCF Office of Undergraduate Research" },
  { title: "Find research opportunities", group: "Getting started", description: "Explore ways to locate projects, faculty mentors, research programs, and other entry points across UCF.", url: "https://academicsuccess.ucf.edu/our/looking-for-research-opportunities/", source: "UCF Office of Undergraduate Research" },
  { title: "OUR Student Research Grants", group: "Funding", description: "Funding for eligible research costs, including materials, equipment, travel, publication, and presentation needs. Confirm current award limits before applying.", url: "https://academicsuccess.ucf.edu/our/research-grants/", source: "UCF Office of Undergraduate Research" },
  { title: "Summer Undergraduate Research Fellowship", group: "Funding", description: "UCF's summer fellowship for students working with a faculty mentor. A faculty mentor is required, so begin that relationship before preparing an application.", url: "https://academicsuccess.ucf.edu/our/summer-undergraduate-research-fellowship/", source: "UCF Office of Undergraduate Research" },
  { title: "Research Federal Work Study", group: "Funding", description: "A route for eligible Federal Work Study students to be paid while developing research experience with an approved faculty project.", url: "https://academicsuccess.ucf.edu/our/federal-work-study/", source: "UCF Office of Undergraduate Research" },
  { title: "DOE SULI", group: "Summer research", description: "Paid research appointments at participating U.S. Department of Energy laboratories. Useful for energy, materials, computing, and national-laboratory research experience.", url: "https://science.osti.gov/wdts/suli", source: "U.S. Department of Energy" },
  { title: "NSF Research Experiences for Undergraduates", group: "Summer research", description: "Search NSF-supported REU sites by research area and institution. Individual sites set their own eligibility rules and deadlines.", url: "https://www.nsf.gov/funding/initiatives/reu", source: "National Science Foundation" },
] as const;

export const researchPlan = [
  { title: "Choose a direction", text: "Write down two materials topics, techniques, or applications you are genuinely curious about. You only need a starting point." },
  { title: "Build a short lab list", text: "Use the MSE lab and faculty directories to identify three groups. Read the lab summary and one current project before contacting anyone." },
  { title: "Prepare a focused message", text: "Explain why that specific work interests you, what relevant preparation you have, and ask for a short conversation about possible undergraduate involvement." },
  { title: "Follow up once", text: "If there is no response, send one polite follow-up after roughly 10–14 days. Continue exploring other groups instead of waiting on one answer." },
  { title: "Discuss expectations", text: "Before joining, clarify time commitment, supervision, training, project scope, safety requirements, and what a successful first semester looks like." },
  { title: "Fund and extend the work", text: "Once you have a mentor and project direction, investigate OUR grants, SURF, Federal Work Study, REUs, and national-laboratory programs." },
] as const;

export const semiconductorResources = [
  { title: "SEMI Undergraduate Certificate", group: "Coursework", description: "UCF coursework focused on semiconductor engineering and manufacturing.", url: "https://www.ucf.edu/degree/semiconductor-engineering-and-manufacturing-instruction-semi-undergraduate-certificate/" },
  { title: "SMART Workshop", group: "Hands-on learning", description: "Semiconductor manufacturing and research training through UCF ECE.", url: "https://www.ece.ucf.edu/smartworkshop/" },
  { title: "ECE Scholarships", group: "Funding", description: "Current scholarship opportunities administered through UCF Electrical and Computer Engineering.", url: "https://www.ece.ucf.edu/department-scholarships/" },
  { title: "UCF Quantum Initiative", group: "Quantum and photonics", description: "Interdisciplinary quantum research, education, and partnerships across UCF.", url: "https://www.research.ucf.edu/quantum-initiative/" },
  { title: "PREM at UCF", group: "Research and mentoring", description: "Materials research and mentoring pathways connected to the UCF–UChicago PREM partnership.", url: "https://prem2.cecs.ucf.edu/" },
] as const;

export const companies = [
  { name: "Intel", type: "IDM / manufacturing", roles: "Process, yield, integration, equipment, materials" },
  { name: "GlobalFoundries", type: "Foundry", roles: "Process engineering, integration, yield, metrology" },
  { name: "TSMC", type: "Foundry", roles: "Manufacturing, process, facilities, equipment, integration" },
  { name: "Micron", type: "Memory / IDM", roles: "Process development, yield, thin films, characterization" },
  { name: "Applied Materials", type: "Equipment", roles: "Process, hardware, applications, materials, modeling" },
  { name: "Lam Research", type: "Equipment", roles: "Deposition, etch, clean, process and equipment engineering" },
  { name: "ASML", type: "Lithography equipment", roles: "Optics, mechatronics, applications, systems, materials" },
  { name: "KLA", type: "Metrology / inspection", roles: "Optics, algorithms, applications, process control" },
  { name: "Tokyo Electron", type: "Equipment", roles: "Process, field service, applications, equipment engineering" },
  { name: "SkyWater Technology", type: "Foundry", roles: "Process development, integration, yield, advanced packaging" },
] as const;

export const conferences = [
  { name: "SEMICON West", focus: "Full semiconductor supply chain and workforce networking", url: "https://www.semiconwest.org/" },
  { name: "IEEE IEDM", focus: "Leading-edge electronic devices and process technology", url: "https://www.ieee-iedm.org/" },
  { name: "IEEE ECTC", focus: "Packaging, heterogeneous integration, reliability, and manufacturing", url: "https://www.ectc.net/" },
  { name: "AVS International Symposium", focus: "Thin films, surfaces, vacuum science, plasma processing, and ALD", url: "https://www.avs.org/symposium" },
  { name: "MRS Meetings", focus: "Broad materials research, including electronic and quantum materials", url: "https://www.mrs.org/meetings-events" },
] as const;

export const internshipTimeline = [
  ["July–September", "Prepare a targeted résumé, identify companies and job families, and create job alerts."],
  ["August–November", "Apply during the main early-recruiting wave. Apply when a suitable role opens rather than waiting for a universal deadline."],
  ["December–February", "Monitor the second wave, newly approved openings, national laboratories, and REU deadlines."],
  ["March–May", "Look for late openings, local manufacturers, smaller suppliers, professor referrals, and academic-year roles."],
] as const;
