import type { ArchitectureDiagramContent } from '@/content/case-studies/types';
import styles from './CaseStudy.module.css';

interface ArchitectureDiagramProps {
  content: ArchitectureDiagramContent;
  slug: string;
}

const statusLabels = {
  implemented: 'Implemented',
  prototype: 'Prototype',
  'architectural-exploration': 'Architectural exploration',
  planned: 'Planned',
  sanitized: 'Generalized',
} as const;

export function ArchitectureDiagram({ content, slug }: ArchitectureDiagramProps) {
  const titleId = `${slug}-diagram-title`;
  const descriptionId = `${slug}-diagram-description`;
  const markerId = `${slug}-arrow`;
  const statuses = [...new Set(content.nodes.map((node) => node.status))];

  return (
    <figure className={styles.diagramFrame}>
      <div className={styles.diagramHeader}>
        <div>
          <p className="eyebrow">System view</p>
          <h3>{content.title}</h3>
        </div>
        <ul className={styles.diagramLegend} aria-label="Diagram status key">
          {statuses.map((status) => (
            <li key={status} data-status={status}>
              <span aria-hidden="true" />
              {statusLabels[status]}
            </li>
          ))}
        </ul>
      </div>

      <svg
        className={styles.diagram}
        viewBox="0 0 856 400"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <title id={titleId}>{content.title}</title>
        <desc id={descriptionId}>{content.description}</desc>
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        <g className={styles.diagramEdges}>
          {content.edges.map((edge) => (
            <g key={edge.id}>
              <path
                d={edge.path}
                markerEnd={`url(#${markerId})`}
                data-dashed={edge.dashed || undefined}
              />
              <text x={edge.labelX} y={edge.labelY} textAnchor="middle">
                {edge.label}
              </text>
            </g>
          ))}
        </g>
        <g className={styles.diagramNodes}>
          {content.nodes.map((node) => (
            <g key={node.id} data-status={node.status}>
              <rect x={node.x} y={node.y} width={node.width} height={node.height} rx="6" />
              <text className={styles.nodeLabel} x={node.x + 12} y={node.y + 27}>
                {node.label}
              </text>
              <text className={styles.nodeDetail} x={node.x + 12} y={node.y + 49}>
                {node.detail}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <ol className={styles.mobileFlow} aria-label={`${content.title} flow`}>
        {content.mobileSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <figcaption>{content.boundaryNote}</figcaption>
    </figure>
  );
}
