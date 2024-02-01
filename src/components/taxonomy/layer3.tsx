import React from 'react';
import { L3 } from '@/interfaces/taxonomy';
import { Switch } from '@/components/ui/switch';
import { FormField, FormLabel, FormDescription, FormControl, FormItem } from '@/components/ui/form';

const Layer3Component: React.FC<{ layer3: L3, form: any, l1index: number, l2index: number, l3index: number }> = ({ layer3, form, l1index, l2index, l3index}) => {
  return (
        <FormField
        control={form.control}
        name="security_emails"
        render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-0.5">
            <FormLabel>{layer3.name}</FormLabel>
            <FormDescription>
                Bla bla description
            </FormDescription>
            </div>
            <FormControl>
            <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-readonly
            />
            </FormControl>
        </FormItem>
        )}
    />
  );
};

export default Layer3Component;