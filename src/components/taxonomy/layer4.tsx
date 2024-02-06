import React, { useEffect } from 'react';
import { L4 } from '@/interfaces/taxonomy';
import { Switch } from '@/components/ui/switch';
import { FormField, FormLabel, FormDescription, FormControl, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import InputComponent from './input';

const Layer4Component: React.FC<{ layer4: L4, form: any, parent: string, index: number }> = ({ layer4, form, parent, index }) => {
  const him = `${parent}.children[${index}]`;
  const fieldName = `${him}.active`;
  const doubleFieldName = `${him}.double`;

  // Utiliser useEffect pour définir la valeur initiale de `active` dans le formulaire
  useEffect(() => {
    form.setValue(fieldName, layer4.active);
  }, [form, fieldName, layer4.active]);

  return (
    <div className="rounded-lg border p-3 shadow-sm space-y-0.5">
          <FormField
          control={form.control}
          name={fieldName}
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <div className="space-y-0.5">
                <FormLabel>{layer4.name}</FormLabel>
                <FormDescription>
                  {layer4.description}
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={(value) => form.setValue(fieldName, value)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {layer4.input !== undefined && (
            <InputComponent input={layer4.input} form={form} him={him + ".input"} />
        )}
    </div>
  );
};

export default Layer4Component;
