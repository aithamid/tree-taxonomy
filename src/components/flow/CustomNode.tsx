import { Node, NodeProps } from "reactflow";
import { InputType, NewClass, SClass } from "@/interfaces/taxonomy";

type NodeData = {
  input: InputType;
};

type CustomNode = Node<NodeData>;

export function MyCustomNode({ data }: NodeProps<NodeData>) {
  if (data.input.one_choice) {
    return OneChoice(data.input);
  }
  if (data.input.multi_choice) {
    return MultiChoice(data.input);
  }
  if (data.input.newClass) {
    return NewClass(data.input);
  }
  if (data.input.double) {
    return Double(data.input);
  }
  if (data.input.text) {
    return Text(data.input);
  }
  if (data.input.specialClass) {
    return SpecialClass(data.input);
  }
}

function SpecialClass(input: InputType) {
  let list: SClass[] = input.specialClass ?? [];

  return (
    <div>
      {list
        .filter((item) => item.active && item.one_choice?.value !== "")
        .map((item, index) => {
          let label: string = "";
          item.one_choice?.list?.forEach((choice) => {
            if (choice.id === item.one_choice?.value) {
              label = choice.label;
            }
          });
          return (
            <div key={index} className="list-item">
              <div>{item.label} : {label}</div>
            </div>
          );
        })}
    </div>
  );
} 
function OneChoice(input: InputType) {
  let value = input.one_choice?.value;
  let list = input.one_choice?.list;
  let label: string = "";
  if (value !== "") {
    input.one_choice?.list?.forEach((choice) => {
      if (choice.id === input.one_choice?.value) {
        label = choice.label;
      }
    });

    return <div>{label}</div>;
  } else {
    return <></>;
  }
}

function MultiChoice(input: InputType) {
  let value = input.multi_choice?.value;
  let list = input.multi_choice?.list;
  let label: string[] = [];
  if (value) {
    list?.forEach((choice) => {
      value?.forEach((choice2) => {
        if (choice.id === choice2) {
          label.push(choice.label);
        }
      });
    });

    return (
      <div>
        <div className="grid grid-cols-2 pt-2">
          {label.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function NewClass(input: InputType) {
  let list: NewClass[] = input.newClass ?? [];

  return (
    <div>
      {list
        .filter((item) => item.active && item.value !== "")
        .map((item, index) => (
          <li key={index}>
            {item.label} : {item.value}
          </li>
        ))}
    </div>
  );
}

function Double(input: InputType) {
  let double = input.double;

  return <div>{double?.toString()}</div>;
}

function Text(input: InputType) {
  let text = input.text;

  return <div>{text}</div>;
}
