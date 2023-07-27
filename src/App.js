import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeToolbar
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1',type: 'input', position: { x: 150, y: 100 }, data: { label: '1' } ,},
  { id: '2', position: { x: 50, y: 200 }, data: { label: '2' } },
  { id: '3', position: { x: 250, y: 200 }, data: { label: '3' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' ,type:'step',arrowHeadType: 'none'},{ id: 'e2-3', source: '1', target: '3',type:'step',arrowHeadType: 'none'}];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <NodeToolbar />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}