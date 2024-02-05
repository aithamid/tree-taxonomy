import React from 'react';
import { InputType } from '@/interfaces/taxonomy';
import { FormField, FormLabel, FormDescription, FormControl, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const InputComponent: React.FC<{ input: InputType, form: any, him: string}> = ({ input, form, him }) => {
  return (
    <div>
        {input.double !== undefined && (
            <div className="rounded-lg border p-3 shadow-sm space-y-0.5">
            <FormField
            control={form.control}
            name={him + '.double'}
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                <FormControl>
                    <Input  {...field} type="number" onChange={event => field.onChange(+event.target.value)} />
                </FormControl>
                </FormItem>
            )}
            />
            </div>
        )}
    </div>
  );
};

export default InputComponent;

// Double : 

// Select One choice : 
