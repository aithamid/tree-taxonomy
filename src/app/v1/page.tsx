// pages/index.tsx
"use client";

import React from 'react';
import Layer1Component from '@/components/taxonomy/layer1';
import  {taxonomySchema}  from '@/interfaces/taxonomy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { layersInitial } from './data';
import { MainNav } from './navbar';

export default function HomePage() {

  const defaultValue = ""

  return (
    <div>
    <div className='h-full'>

        <MainNav className='border px-8 py-4'/>
        <div className="px-8 h-full">
        <div className="flex items-center justify-between space-y-2 m-5">
            <h2 className="text-3xl font-bold tracking-tight">Taxonomy</h2>
        </div>
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
    </div>
  );
};
