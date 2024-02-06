// pages/index.tsx
"use client";

import React from 'react';
import Layer1Component from '@/components/taxonomy/layer1';
import  {taxonomySchema}  from '@/interfaces/taxonomy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { layersInitial } from './data';


export default function HomePage() {

  const defaultValue = ""

  return (
    <div>
      <h1>Taxonomy</h1>
        <div className="m-8">
        <Tabs defaultValue="1" className="space-y-4">
              <TabsList>
                {layersInitial.map((layer1) => (
                  <TabsTrigger key={layer1.id} value={layer1.id}>
                    {layer1.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {layersInitial.map((layer1, index) => (
                <React.Fragment key={layer1.id}>
                  <Layer1Component Layer1={layer1} l1index={index}/>
                </React.Fragment>
              ))}
          </Tabs>
        </div>
    </div>
  );
};
