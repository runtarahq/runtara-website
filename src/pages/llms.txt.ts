import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://runtara.com';

const SITE_DESCRIPTION = `Runtara is a workflow engine that compiles JSON workflows and Rust code directly to native binaries with durable execution, automatic checkpointing, and distributed coordination capabilities.`;

const SITE_DETAILS = `Runtara provides:
- Native compilation without interpreter overhead
- Durable checkpoints that snapshot execution state
- Deterministic replay for consistent execution
- Distributed execution across multiple nodes and regions
- Managed deployment through Runtara Cloud or self-hosted options`;

const KEY_CONCEPTS = `## Key Concepts

- **#[durable] macro**: Rust attribute that wraps functions with retry and checkpointing logic
- **Idempotency keys**: First parameter to durable functions ensuring operations are safely retryable
- **Checkpointing**: Automatic state persistence enabling resume from any point after failures
- **Connection Service**: External component for centralized credential management and rate limit coordination
- **Native binaries**: Workflows compile to executables with minimal runtime dependencies`;

// Define section order for consistent output
const SECTION_ORDER = [
  'Overview',
  'Durable Execution',
  'Distributed Durable Execution',
  'Durable Workflows',
  'Managed Runtime Environments',
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
      const url = `${SITE_URL}/docs/${doc.slug}`;
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
