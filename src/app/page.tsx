'use client';

import { Edge, Node, Position, ReactFlowProvider } from 'reactflow';

import styles from './page.module.css';
import Flow from '@/components/Flow';

const nodeSize = {
  width: 100,
  height: 40,
};

const edgeType = 'smoothstep';

// this example uses some v12 features that are not released yet
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Node 4' },
    position: { x: 400, y: 100 },
  },
  {
    id: '5',
    data: { label: 'Node 5' },
    position: { x: 400, y: 100 },
  },
  {
    id: '6',
    data: { label: 'Node 6' },
    position: { x: 400, y: 100 },
  },
  {
    id: '7',
    data: { label: 'Node 7' },
    position: { x: 400, y: 100 },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: edgeType, animated: true },
  { id: 'e1-3', source: '1', target: '3', type: edgeType, animated: true },
  { id: 'e2-4', source: '2', target: '4', type: edgeType, animated: true },
  { id: 'e2-5', source: '2', target: '5', type: edgeType, animated: true },
  { id: 'e3-6', source: '3', target: '6', type: edgeType, animated: true },
  { id: 'e3-7', source: '3', target: '7', type: edgeType, animated: true },
];

async function fetchData(): Promise<{ nodes: Node[]; edges: Edge[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nodes: initialNodes, edges: initialEdges });
    }, 1000);
  });
}

export default async function App() {
  const { nodes, edges } = await fetchData();
  return (
    <main className={styles.main}>
      <ReactFlowProvider initialNodes={nodes} initialEdges={edges}>
        <Flow nodes={nodes} edges={edges} />
      </ReactFlowProvider>
    </main>
  );
}