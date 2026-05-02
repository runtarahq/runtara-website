import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://runtara.com';

const SITE_DESCRIPTION = `Runtara is a secure AI automation platform for building, running, and operating workflow automations with integrations, reports, files, analytics, and managed operational data.`;

const SITE_DETAILS = `Runtara provides:
- Workflow automation for operational processes
- Triggers for HTTP, scheduled, and channel-driven starts
- Reusable connections for provider credentials and shared integrations
- Reports, files, analytics, and invocation history for operational review
- Account-level controls such as API keys and platform settings`;

const KEY_CONCEPTS = `## User Guide Areas

- **Workflows**: Build, validate, run, version, and inspect workflow automations
- **Triggers**: Start workflows from HTTP calls, schedules, and channel events
- **Connections**: Configure provider credentials, file storage, and shared integrations
- **Reports and files**: Review operational outputs and generated artifacts
- **Analytics and invocation history**: Monitor usage, executions, failures, and rate limits`;

// Define section order for consistent output
const SECTION_ORDER = [
  'Runtara Platform',
];

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs', ({ data }) => !data.draft);

  // Sort by predefined section order, then by order within section
  const sortedDocs = docs.sort((a, b) => {
    const aSection = a.data.section || '';
    const bSection = b.data.section || '';
    const aSectionIndex = SECTION_ORDER.indexOf(aSection);
    const bSectionIndex = SECTION_ORDER.indexOf(bSection);
    const aOrder = aSectionIndex === -1 ? 999 : aSectionIndex;
    const bOrder = bSectionIndex === -1 ? 999 : bSectionIndex;

    if (aOrder !== bOrder) return aOrder - bOrder;
    return (a.data.order || 999) - (b.data.order || 999);
  });

  // Generate documentation links with section context for generic titles
  const docLinks = sortedDocs
    .map((doc) => {
      const url = `${SITE_URL}/docs/${doc.id}`;
      const section = doc.data.section || '';
      // Use section name for generic titles like "Introduction"
      const title =
        doc.data.title === 'Introduction' && section ? section : doc.data.title;
      const description = doc.data.description || '';
      return `- [${title}](${url})${description ? `: ${description}` : ''}`;
    })
    .join('\n');

  const content = `# Runtara

> ${SITE_DESCRIPTION}

${SITE_DETAILS}

## Documentation

${docLinks}

${KEY_CONCEPTS}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
