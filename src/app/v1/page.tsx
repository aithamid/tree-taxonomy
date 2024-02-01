// pages/index.tsx
"use client";

import React from 'react';
import Layer1Component from '@/components/taxonomy/layer1';
import  {taxonomySchema}  from '@/interfaces/taxonomy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import * as z from 'zod';

type L1 = z.infer<typeof taxonomySchema>["layers"][number];

const layersInitial: L1[] = [
  { id: "1", name: "text 1", children: [
    { id: "1.1", name: "text 1.1", children: [
      { id: "1.1.1", name: "text 1.1.1", active: false},
      { id: "1.1.2", name: "text 1.1.2", active: false},
    ]},
    { id: "1.2", name: "text 1.2", children: [
      { id: "1.2.1", name: "text 1.2.1", active: false},
      { id: "1.2.2", name: "text 1.2.2", active: true},
    ] }
  ]},
  { id: "2", name: "text 2" }
];

export default function HomePage() {

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
