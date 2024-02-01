// components/layer2Component.tsx
import React from 'react';
import { L2 } from '@/interfaces/taxonomy';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import {useForm} from 'react-hook-form';
import Layer3Component from '@/components/taxonomy/layer3';

const Layer2Component: React.FC<{ layer2: L2, form: any, l1index: number, l2index: number }> = ({ layer2, form, l1index, l2index}) => {
  return (
        <AccordionItem value={layer2.id}>
            <AccordionTrigger>{layer2.name}</AccordionTrigger>
            <AccordionContent>
                {layer2.children && layer2.children.map((layer3, index) => (
                    <Layer3Component key={layer3.id} layer3={layer3} form={form} l1index={l1index} l2index={l2index} l3index={index} />
                ))
                }
            </AccordionContent>
        </AccordionItem>
  );
};

export default Layer2Component;