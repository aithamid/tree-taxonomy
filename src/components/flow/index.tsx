"use client";
import styles from './Flow.module.css';

import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  ConnectionLineType,
  Position,
  MiniMap,
  ControlButton,
  Controls,
  ReactFlowProvider,
} from 'reactflow';
import dagre from 'dagre';

import 'reactflow/dist/style.css';
import { L1 } from '@/interfaces/taxonomy';
import DownloadButton from './downloadbutton';
import { toPng } from 'html-to-image';

const nodeSize = {
    width: 100,
    height: 40,
  };
  
  const edgeType = 'smoothstep';
  
  // this example uses some v12 features that are not released yet
  const initialNodes: Node[] = [
    {
      id: '1',
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
  const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'LR', nodeSpacing = 100, rankSpacing = 100): Node[] => {
    const isHorizontal = direction === 'LR';
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    // Configurez le graphe avec un espacement personnalisé
    dagreGraph.setGraph({
      rankdir: direction,
      nodesep: nodeSpacing, // Espacement entre les nœuds adjacents
      ranksep: rankSpacing, // Espacement entre les rangs
      marginx: 20, // Marge optionnelle autour du graphe en x
      marginy: 20, // Marge optionnelle autour du graphe en y
    });
  
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeSize.width, height: nodeSize.height });
    });
  
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    return nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? Position.Left : Position.Top;
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
      return {
        ...node,
        position: {
          x: nodeWithPosition.x - nodeSize.width / 2,
          y: nodeWithPosition.y - nodeSize.height / 2,
        },
      };
    });
  };

export const  Flow : React.FunctionComponent<{ n: Node[], e : Edge[] }> = ({ n, e }) =>  {
    const [nodes, setNodes] = useState<Node[]>(n);
    useEffect(() => {
        // Appliquer le positionnement automatique lors du chargement initial des nœuds
        const layoutedNodes = getLayoutedElements(n, e);
        setNodes(layoutedNodes);
      }, [n, e]);
  return (
    <div className={styles.flow}>
      <ReactFlowProvider>
      <DownloadButton />
      <ReactFlow
        nodes={nodes}
        edges={e}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView={true}
        className="download-image"
      >
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
    </ReactFlow>
    </ReactFlowProvider>
    </div>
  );
}
