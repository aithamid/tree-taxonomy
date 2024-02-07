// components/Layer1Component.tsx
import React, { useState } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import Layer2Component from '@/components/taxonomy/layer2';
import { Accordion } from  '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { L1, layer1Schema } from '@/interfaces/taxonomy';
import { toast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"
import {Flow} from '@/components/flow/index';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  passwordConfirm: z.string()
}).refine((data) => {
  return data.password === data.passwordConfirm
}, {
  message: 'Passwords must match',
  path: ['passwordConfirm']
}
);


const Layer1Component: React.FC<{ Layer1: L1, l1index: number }> = ({ Layer1, l1index }) => {
  const [layer1, setLayer1] = useState<L1>(Layer1);

  function handleLayer1Update(updatedLayer1: L1) {
    setLayer1(updatedLayer1);
  }

  const form = useForm<z.infer<typeof layer1Schema>>({
    resolver: zodResolver(layer1Schema),
    defaultValues: {
      id: Layer1.id,
      name: Layer1.name,
      children: Layer1.children,
    },
  });

  function onSubmit(data: z.infer<typeof layer1Schema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    console.log(data);
    handleLayer1Update(data);
  }

  return (
    <TabsContent value={layer1.id} className="space-y-4">
        <div className="container relative hidden flex-col items-start justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 max-h-full">
            <div className="">
            <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full">
                    <ScrollArea className="h-[700px] rounded-md p-4 m-4">
                {
                  layer1.children && layer1.children.map((layer2, index) => (
                    <Layer2Component key={layer2.id} layer2={layer2} form={form} l1index={l1index} l2index={index} />
                  ))
                }
                </ScrollArea>
                  <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
            </div>
            <div className="items-center">
              <div className="border">
              <Flow />
              </div>
            </div>
        </div>
    </TabsContent>
  );
};

export default Layer1Component;