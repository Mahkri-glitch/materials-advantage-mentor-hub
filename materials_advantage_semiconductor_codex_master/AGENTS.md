# MASTER CODEX PROMPT

You are working in this repository. Build a clean, Vercel-ready Next.js site and documentation system for two connected resources:

1. **Materials Advantage Mentorship Documentation**
2. **Semiconductor Mentor Documentation and Resources**

The site should feel like a real student-led resource, not a corporate training manual. Keep the writing human, direct, and practical. The voice should feel close to how Maahir writes: clear, student-facing, honest about confusion, and focused on helping people actually do the next step.

## Core idea

The project is called:

**Entering Research and Mentor Resources**

It should help UCF Materials Science students enter research, understand possible career paths, and use mentoring to go from curiosity to direction.

The site should emphasize that research is useful for almost any career pathway, not only graduate school. Research helps with:
- internships,
- industry jobs,
- graduate school,
- semiconductor roles,
- technical interviews,
- networking,
- confidence,
- communication,
- figuring out whether a field is actually interesting,
- building relationships with mentors and faculty.

## Two documentation tracks

### Track 1: Materials Advantage Mentorship Documentation

Build pages/sections for:
- why mentoring matters,
- mentor responsibilities,
- mentee responsibilities,
- three meeting system,
- mentor office hours,
- how to create a mentor philosophy,
- how to support students without overstepping,
- research readiness,
- career pathway exploration,
- templates and checklists.

### Track 2: Semiconductor Mentor Documentation and Resources

Build pages/sections for:
- semiconductor pathway as one example/backbone, not the only Materials Science path,
- UCF semiconductor resources,
- UCF faculty starter map,
- SEMI certificate,
- cleanroom and SMART workshop,
- scholarships/fellowships,
- PREM and quantum-related pathways,
- semiconductor company/school map,
- conferences and networking,
- Maahir’s personal experience in Dr. Banerjee’s lab,
- ALD, thin films, process science, in situ characterization, and how research helped clarify process-engineering direction.

Do not make semiconductors sound like the only successful pathway. Keep other pathways visible: biomaterials, polymers, metallurgy/manufacturing, ceramics/energy, computational materials/materials informatics, characterization, and reliability.

## Removed content

Do not include:
- medical school-specific content,
- high-school-student-specific content,
- source attribution or external blog source labels for the research-entry playbook.

The research-entry playbook should read like original internal program guidance, not like a scraped article summary.

## Required site sections

### 1. Hero

Title: **Entering Research and Mentor Resources**

Subtitle: **A Materials Advantage @ UCF mentoring hub for students entering research, exploring technical fields, and building career direction.**

Include the message:
“You do not need to have your whole career figured out. Bring your questions, interests, and uncertainty. This program helps you find a starting point.”

### 2. Why Research Matters for Any Career Path

Explain that research is not just for graduate school. It helps students learn how to think through unclear problems, test career interests, build technical stories, meet mentors, and become more prepared for industry or academia.

### 3. Why Mentoring Matters

Explain that mentoring is more than advising. Advising gives information; mentoring helps students grow. Mention trust, respect, listening, clear expectations, feedback, and independence.

### 4. Three Meeting System

Use these meetings:
- Initial Mentor-Mentee Meeting
- Mid-Semester Mentee Check-In
- Mentor Philosophy Meeting

Each should include:
- purpose,
- suggested length,
- sample questions,
- deliverable.

### 5. Mentor Office Hours

Include:
- general office hours,
- field-specific office hours,
- appointment-based help,
- use cases like professor emails, resume review, research group selection, REU/internship planning, semiconductor questions, and general career direction.

### 6. Research Entry Playbook

Use `researchEntryModules` from `src/data/siteContent.ts`.

Render the modules as practical cards grouped by category:
- Research Mindset
- Entering Research
- Mentorship
- Outreach Tools
- Research Habits
- Opportunities
- Long-Term Pathways

This section should include:
- start from zero,
- finding research opportunities,
- finding a research mentor,
- professor email builder,
- research interest statement builder,
- cold email vs warm intro,
- timing and follow-up,
- what professors/PIs value,
- common outreach mistakes,
- summer research and REU strategy,
- graduate school and PhD prep.

### 7. Research Outreach Toolkit

Create a practical toolkit with:
- 3-part email structure,
- research-interest statement structure,
- follow-up rule,
- timing guide,
- what PIs value,
- red-flag checklist.

Do not provide a robotic copy-paste template. Give a structure that forces the student to write in their own voice.

### 8. Semiconductor Guide Backbone

Explain that semiconductors are one example pathway based on Maahir’s UCF experience.

Include:
- process/manufacturing,
- materials/devices,
- design/computing,
- packaging/integration,
- quantum/photonics,
- data/AI,
- company/school map,
- UCF SEMI certificate,
- UCF cleanroom,
- SMART workshop,
- ECE scholarships,
- quantum initiative,
- PREM/CQ-MIEE.

### 9. Personal Experience Layer

Create a section titled:

**What I Learned Entering Semiconductor-Related Research Through Thin Films and ALD**

Use first-person-ready language. Mention:
- freshman uncertainty,
- how mentorship helped clarify direction,
- Dr. Parag Banerjee’s lab,
- ALD,
- thin films,
- in situ characterization,
- process science,
- how research connected coursework to semiconductor process engineering,
- how students can start by learning one process, one material system, or one measurement method.

Make this section editable so Maahir can add his own details later.

### 10. UCF Faculty Starter Map

Render faculty cards from the data.

Add a clear note:
“This is a starter list, not a final or exhaustive list. Students should verify current faculty research pages before outreach and should not mass-email professors.”

### 11. Other Materials Pathways

Keep visible cards for:
- biomaterials,
- polymers,
- metals/manufacturing,
- ceramics/energy,
- computational materials/materials informatics.

### 12. Conferences and Networking

Explain why talks, conferences, career fairs, industry visits, and company events matter. Emphasize:
- meeting hiring engineers,
- practicing technical conversations,
- learning what companies actually need,
- following up,
- turning interactions into opportunities.

### 13. Feature Roadmap

Include:
- searchable resource cards,
- mentor profiles,
- office hour calendar,
- professor email builder,
- research-interest builder,
- follow-up reminder workflow,
- semiconductor roadmap,
- feedback form,
- downloadable templates,
- expanded pathways.

## Design direction

Use:
- Next.js App Router,
- TypeScript,
- clean responsive layout,
- UCF black/gold palette with cyan semiconductor accents,
- card-based sections,
- readable mobile design,
- simple interactions only.

Avoid:
- overdone animations,
- corporate-sounding language,
- huge blocks of dense text,
- medical school content,
- high school student content,
- external blog source labels.

## Acceptance criteria

The task is complete when:
- `npm run build` passes,
- the site includes both documentation tracks,
- research is framed as useful for any career pathway,
- semiconductors are framed as one example/backbone path,
- the three-meeting system is clear,
- office hours are clearly explained,
- research outreach tools are practical and human,
- faculty/resource lists are marked as starter/non-exhaustive where appropriate,
- the content sounds like a student made it for other students.
