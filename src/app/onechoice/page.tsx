"use client";

import { one_choiceSchema, OneChoice } from "@/interfaces/taxonomy";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";


let data : OneChoice = {
    list: [
        {
            id: "1",
            label: "First"
        },
        {
            id: "2",
            label: "Second"
        }
    ],
    value: "2"
}

export function onChange(data: z.infer<typeof one_choiceSchema>) {
    console.log(data);
    toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
    });
}

export default function Home() {

    const form = useForm<z.infer<typeof one_choiceSchema>>({
        resolver: zodResolver(one_choiceSchema),
        defaultValues: {
            list: data.list,
            value: data.value,
        }
    });

    return (
        <div>
            <h1>One Choice</h1>
            <Form {...form}>
                <form onChange={form.handleSubmit(onChange)}>
                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                    <FormItem>
                    <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={data.value}>
                        {data.list.map((item) => (
                            <div
                            key={item.id}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                                onClick={field.onChange}
                                id={item.id}
                                value={item.id} />
                            <Label>{item.label}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                    </FormItem>
                    )}
                />
                </form>
            </Form>
        </div>
    )

}