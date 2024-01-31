// components/layer2Component.tsx
import React from 'react';
import { Layer2 } from '@/interfaces/taxonomy';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';

const Layer2Component: React.FC<{ layer2: Layer2 }> = ({ layer2 }) => {
  return (
        <AccordionItem value={layer2.id}>
            <AccordionTrigger>{layer2.name}</AccordionTrigger>
            <AccordionContent>
                <Switch>Switch</Switch>
            </AccordionContent>
        </AccordionItem>
  );
};

export default Layer2Component;