// components/Layer1Component.tsx
import React from 'react';
import { Layer1 } from '@/interfaces/taxonomy';
import { TabsContent } from '@/components/ui/tabs';
import { Layer2 } from '@/interfaces/taxonomy';
import Layer2Component from '@/components/taxonomy/layer2';
import { Accordion } from  '@/components/ui/accordion';

const Layer1Component: React.FC<{ Layer1: Layer1 }> = ({ Layer1 }) => {
  return (
    <TabsContent value={Layer1.id} className="space-y-4">
        <div className="container relative hidden flex-col items-start justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div>
            <Accordion type="single" collapsible className="w-full">
            {Layer1.children && Layer1.children.map((layer2) => (
                <Layer2Component key={layer2.id} layer2={layer2} />
            ))}
            </Accordion>
            </div>
            <div className="items-center">
                Droite
            </div>
        </div>
    </TabsContent>
  );
};

export default Layer1Component;