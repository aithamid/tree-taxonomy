import { Node, NodeProps } from 'reactflow';
import { InputType, NewClass } from '@/interfaces/taxonomy';

type NodeData = {
  input: InputType;
};
 
type CustomNode = Node<NodeData>;
 
export function MyCustomNode({ data }: NodeProps<NodeData>) {
  if(data.input.one_choice) {
    return OneChoice(data.input);
  }
  if(data.input.multi_choice) {
    return MultiChoice(data.input);
  }
  if(data.input.newClass) {
    return NewClass(data.input);
  }
  if(data.input.double) {
    return Double(data.input);
  }
}

function OneChoice(input: InputType) {
  let value = input.one_choice?.value;
  let list = input.one_choice?.list
  let label : string = "";
  if(value !== ""){
    input.one_choice?.list?.forEach((choice) => {
      if(choice.id === input.one_choice?.value)
      {
        label = choice.label;
      }
    });
  
    return <div>One choice : {label}</div>
  }
  else {
    return <></>
  }
}

function MultiChoice(input: InputType) {
  let value = input.multi_choice?.value;
  let list = input.multi_choice?.list
  let label:string[] = [];
  if(value){
    list?.forEach((choice) => {
      value?.forEach((choice2) => {
      if(choice.id === choice2)
      {
        label.push(choice.label);
      }
      });
    });
  
    return  <div>
    <div className="grid grid-cols-2 pt-2">
      {label.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  </div>
  }
  else {
    return <></>
  }
}

function NewClass(input: InputType) {
  let list: NewClass[] = input.newClass ?? [];

  return (
    <div> 
      {list.filter(item => item.active && item.value !== "").map((item, index) => (
      <li key={index}>{item.label} : {item.value}</li>
      ))}
    </div>
  );
}

function Double(input: InputType) {
  let double = input.double;

  return (
    <div> 
    {double?.toString()}
    </div>
  );
}