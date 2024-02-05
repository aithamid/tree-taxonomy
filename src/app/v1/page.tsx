// pages/index.tsx
"use client";

import React from 'react';
import Layer1Component from '@/components/taxonomy/layer1';
import  {taxonomySchema}  from '@/interfaces/taxonomy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import * as z from 'zod';


type L1 = z.infer<typeof taxonomySchema>["layers"][number];

const layersInitial: L1[] = [
  {
    id: "PI",
    name: "Physical Infrastructure",
    children: [
      {
        id: "PI-RT",
        name: "Roadway Type",
        children: [
          {
            id: "PI-RT-RC",
            name: "Road category",
            active: true,
            description: "Road category based on lane traffic",
            children: [
              {
                id: "PI-RT-RC-1",
                name: "One-way roads, Two-way roads, Divided Roads, Roads with variable lane assignment",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "owr", label: "One-way roads" },
                      { id: "twr", label: "Two-way roads" },
                      { id: "dr", label: "Divided Roads" },
                      { id: "rwlva", label: "Roads with variable lane assignment" }
                    ],
                    value: ""
                  }
                }
              }
            ]
          },
          {
            id: "PI-RT-SIC",
            name: "Specific infrastructure configuration",
            active: true,
            description: "Configuration of the roadway",
            children: [
              {
                id: "PI-RT-SIC-1",
                name: "Current traffic (not applicable), Distress lane, ...",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "ctna", label: "Current traffic (not applicable)" },
                      { id: "dl", label: "Distress lane" },
                      // Add all other options here
                    ],
                    value: ""
                  }
                }
              }
            ]
          },
          {
            id: "PI-RT-RGO",
            name: "Roadway general orientation",
            active: true,
            description: "Geographical orientation of the roadway",
            children: [
              {
                id: "PI-RT-RGO-1",
                name: "Eastbound, South-East bound, ...",
                active: true,
                input: {
                  multi_choice: {
                    list: [
                      { id: "eb", label: "Eastbound" },
                      { id: "seb", label: "South-East bound" },
                      // Add all other directions here
                    ],
                    value: []
                  }
                }
              }
            ]
          },
          // Additional L3 items go here following the same structure
        ]
      },
      // Additional L2 categories go here
      {
        id: "PI-RE",
        name: "Roadway Edge",
        children: [
          {
            id: "PI-RE-IE",
            name: "Element of Infrastructure adjacent to the lane",
            active: true,
            description: "Element of Infrastructure adjacent to the lane where traffic is physically not possible",
            children: [
              {
                id: "PI-RE-IE-1",
                name: "sidewalk, central reservation, fence, wall, tree, angle parking, ...",
                active: true,
                input: {
                  multi_choice: {
                    list: [
                      { id: "sidewalk", label: "sidewalk" },
                      { id: "central_reservation", label: "central reservation" },
                      // Add all other options here
                    ],
                    value: []
                  }
                }
              }
            ]
          }
        ]
      },
      // Add other L2 categories like "Junctions" and their children here
    ]
  }
];

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
