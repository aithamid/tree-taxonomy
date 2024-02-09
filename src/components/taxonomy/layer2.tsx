// components/layer2Component.tsx
import React from 'react';
import { L2 } from '@/interfaces/taxonomy';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import {useForm} from 'react-hook-form';
import Layer3Component from '@/components/taxonomy/layer3';
import InputComponent from './input';

const Layer2Component: React.FC<{ layer2: L2, form: any, l1index: number, l2index: number }> = ({ layer2, form, l1index, l2index}) => {
  const him = `children[${l2index}]`;
  return (
    <div>
            <h1 className='text-xl font-bold tracking-tight'>{layer2.name}</h1>
                {layer2.children && layer2.children.map((layer3, index) => (
                    <Layer3Component key={layer3.id} layer3={layer3} form={form} l1index={l1index} l2index={l2index} l3index={index} />
                ))
                }
                {layer2.input !== undefined && (
                  <div className="my-2 border-t-2">
                      <InputComponent input={layer2.input} form={form} him={him + ".input"}/>
                  </div>
                )}
      </div>
  );
};

export default Layer2Component;