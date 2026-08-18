import styles from '@/app/HomePage.module.css';

const nodes = [
  { x: 18, width: 92, label: 'API' },
  { x: 145, width: 102, label: 'EVENT' },
  { x: 282, width: 112, label: 'COMPUTE' },
  { x: 429, width: 92, label: 'STATE' },
  { x: 556, width: 102, label: 'OPERATE' },
] as const;

export function SystemFlow() {
  return (
    <figure className={styles.systemFlow}>
      <div className={styles.systemFlowHeader}>
        <span>System boundary</span>
        <span>01—05</span>
      </div>
      <svg
        className={styles.systemFlowGraphic}
        viewBox="0 0 676 230"
        role="img"
        aria-labelledby="system-flow-title system-flow-description"
      >
        <title id="system-flow-title">A system flow crossing five engineering boundaries</title>
        <desc id="system-flow-description">
          A request moves from an API through an event boundary and compute layer into state and
          operational visibility.
        </desc>
        <path className={styles.flowBase} d="M64 114 H607" />
        <path className={styles.flowSignal} d="M64 114 H607" />
        {nodes.map((node, index) => (
          <g key={node.label}>
            <rect
              className={styles.flowNode}
              x={node.x}
              y={84}
              width={node.width}
              height={60}
              rx={2}
            />
            <text className={styles.flowIndex} x={node.x + 10} y={101}>
              {String(index + 1).padStart(2, '0')}
            </text>
            <text className={styles.flowLabel} x={node.x + node.width / 2} y={121}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <ol className={styles.mobileFlow} aria-label="System flow steps">
        {nodes.map((node, index) => (
          <li key={node.label}>
            <span>
              {String(index + 1).padStart(2, '0')} — {node.label}
            </span>
          </li>
        ))}
      </ol>
      <figcaption>Application → events → compute → state → operations</figcaption>
    </figure>
  );
}
