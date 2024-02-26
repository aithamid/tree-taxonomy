// pages/index.tsx
"use client";

import React, { useState } from "react";
import Layer1Component from "@/components/taxonomy/layer1";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Layers, Taxo, taxonomySchema } from "@/interfaces/taxonomy";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";
import { GlobalView } from "@/components/flow/datahandler";
import { Files } from "@prisma/client";
import { on } from "events";
import { updateFile } from "@/server/helper-dashboard";

export function FileRenderer(file : Files) {
  const json = file.jsonfile as Taxo;
  const [layers, setLayers] = useState<Layers>(json.layers);

  function handleLayersUpdate(updatedLayers: Layers) {
    setLayers(updatedLayers);
  }

  const form = useForm<z.infer<typeof taxonomySchema>>({
    resolver: zodResolver(taxonomySchema),
    defaultValues: {
      layers: layers,
    },
  });

  function onChange(data: z.infer<typeof taxonomySchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
    handleLayersUpdate(data.layers);
  }

  async function onSubmit(data: z.infer<typeof taxonomySchema>) {
    const update = await updateFile(data, file.id);
    console.log("test");
  }

  return (
    <div>
      <div className="h-full">
        <div className="px-8 h-full">
          <div className="flex items-center justify-between my-3">
          </div>
          <Form {...form}>
            <form
              onChange={form.handleSubmit(onChange)}
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full"
            >
              <Tabs defaultValue={layers[0].id} className="space-y-4">
                <div className="flex">
                  <TabsList>
                    {layers.map((layer1) => (
                      <TabsTrigger
                        key={layer1.id}
                        value={layer1.id}
                        className="text-l"
                      >
                        {layer1.name}
                      </TabsTrigger>
                    ))}
                    <TabsTrigger key="all" value="all" className="text-l">
                      Global view
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex-1 text-right  text-2xl font-semibold grid-cols-2  items-start">
                    <h1>ODD Descriptor</h1>
                    <Button type="submit" className="text-right">
                      Save
                    </Button>
                  </div>
                </div>
                {layers.map((layer1, index) => (
                  <div key={layer1.id}>
                    <Layer1Component
                      Layer1={layer1}
                      child={`layers[${index}]`}
                      form={form}
                    />
                  </div>
                ))}
                <div key="all" className="">
                  <TabsContent
                    value="all"
                    className="space-y-4 rounded-lg border p-3 shadow-sm relative"
                  >
                    <GlobalView layers={layers} />
                  </TabsContent>
                </div>
              </Tabs>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
