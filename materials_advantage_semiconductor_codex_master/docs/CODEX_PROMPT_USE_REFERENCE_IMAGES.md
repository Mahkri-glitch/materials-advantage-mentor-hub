# Codex Prompt: Use Uploaded Mentoring Reference Images

I uploaded the reference screenshots into the project under:

```text
public/reference-images/mentoring/
public/reference-images/semiconductors/
```

Use these as source/reference images for the mentorship documentation and semiconductor mentor resources.

Important:
- Do not display every screenshot by default.
- Do not make the website look like a screenshot dump.
- Use the screenshots as reference material to build clean, adapted website sections.
- Keep the screenshots available in a collapsed section called “Reference Images / Source Notes.”
- Keep the page readable and student-facing.

Add or update a collapsed section near the bottom of the Mentorship page:

Title:
Reference Images / Source Notes

Purpose:
These screenshots were used as source notes while building the mentorship playbook. They are kept here for future edits, but the main page should use adapted checklists, reflection prompts, and mentor tools instead of raw screenshot text.

Implementation:
- Read images from `/reference-images/mentoring/`.
- Display them as small thumbnails only inside the collapsed Reference Images section.
- Use a responsive grid.
- Add alt text such as “Mentoring reference screenshot 01.”
- Do not load giant full-size images above the fold.
- If possible, lazy-load the images.

Also add a similar collapsed section on the Semiconductor page for:

```text
/reference-images/semiconductors/
```

Use those semiconductor poster images as reference notes only.

Final UX rule:
The screenshots should support the site, not become the site.
