// pages/index.tsx

import React from 'react';
import Layer1Component from '@/components/taxonomy/layer1';
import  {Layer1}  from '@/interfaces/taxonomy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const countries: Layer1[] = [
  {
    "id": "1",
    "name": "Physical Infrastructure",
    "children": [
      {
        "id": "1.1",
        "name": "Roads",
        "children": [
        {
          "id": "1.1.1",
          "name": "Roads description",
          "active": true,
        }
        ]
      },
      {
        "id": "1.2",
        "name": "Railways"
      }
    ]
  },
  {
    "id": "2",
    "name": "Scenery",
  },
  {
    "id": "3",
    "name": "Environmental conditions",
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Taxonomy</h1>
            <Tabs defaultValue="1" className="space-y-4">
            <TabsList>
              {countries.map((layer1) => (
                <TabsTrigger key={layer1.id} value={layer1.id}>
                  {layer1.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {countries.map((layer1, index) => (
              <Layer1Component key={index} Layer1={layer1} />
            ))}
          </Tabs>
    </div>
  );
};

export default HomePage;
