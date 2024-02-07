import { L1 } from "@/interfaces/taxonomy";
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
  } from 'reactflow';
import {Flow} from "@/components/flow/index";

const edgeType = 'smoothstep';

function convert(layer1: L1): [Node[], Edge[]] {
    let nodes: Node[] = [{
        id: layer1.id,
        data: { label: layer1.name },
        position: { x: 100, y: 100 },
    }];

    let edges: Edge[] = [];

    if (layer1.children) {
        layer1.children.forEach((layer2, index) => {
            // Ajouter un nouveau nœud pour chaque enfant
            nodes.push({
                id: layer2.id, // En supposant que layer2 a un id
                data: { label: layer2.name }, // En supposant que layer2 a un nom
                position: { x: 100 + index * 100, y: 200 }, // Positionnement exemple, ajustez selon les besoins
            });

            // Ajouter un nouvel edge pour chaque enfant
            edges.push({
                id: layer1.id + '-' + layer2.id, // Création d'un ID unique pour l'edge
                source: layer1.id, // ID du nœud source
                target: layer2.id, // ID du nœud cible
                // type: edgeType, // Assurez-vous que `edgeType` est défini quelque part dans votre code
                animated: true,
            });

            if(layer2.children) {
                layer2.children.forEach((layer3, index) => {
                    if(layer3.active) {
                        // Ajouter un nouveau nœud pour chaque enfant
                        nodes.push({
                            id: layer3.id, // En supposant que layer2 a un id
                            data: { label: layer3.name }, // En supposant que layer2 a un nom
                            position: { x: 150 + index * 100, y: 400 }, // Positionnement exemple, ajustez selon les besoins
                        });
            
                        // Ajouter un nouvel edge pour chaque enfant
                        edges.push({
                            id: layer2.id + '-' + layer3.id, // Création d'un ID unique pour l'edge
                            source: layer2.id, // ID du nœud source
                            target: layer3.id, // ID du nœud cible
                            // type: edgeType, // Assurez-vous que `edgeType` est défini quelque part dans votre code
                            animated: true,
                        });
                    }

                })
            }
        });
    }

    return [nodes, edges];
}


export const  DataHandler : React.FunctionComponent<{ layer1: L1 }> = ({ layer1 }) =>  {
  
  let [nodes,edges] : [Node[], Edge[]] = convert(layer1)
  return (
    <div>
        <Flow e={edges} n={nodes} />
    </div>
  );
}