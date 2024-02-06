import React, { useEffect } from 'react';
import { L3 } from '@/interfaces/taxonomy';
import { Switch } from '@/components/ui/switch';
import { FormField, FormLabel, FormDescription, FormControl, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Layer4Component from '@/components/taxonomy/layer4';
import InputComponent from './input';

const Layer3Component: React.FC<{ layer3: L3, form: any, l1index: number, l2index: number, l3index: number }> = ({ layer3, form, l1index, l2index, l3index }) => {
  const him = `children[${l2index}].children[${l3index}]`;
  const fieldName = `${him}.active`;

  // Utiliser useEffect pour définir la valeur initiale de `active` dans le formulaire
  useEffect(() => {
    form.setValue(fieldName, layer3.active);
  }, [form, fieldName, layer3.active]);

  return (
    <div className="rounded-lg border p-3 shadow-sm space-y-0.5 my-3">
          <FormField
          control={form.control}
          name={fieldName}
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <div className="space-y-0.5">
                <FormLabel>{layer3.name}</FormLabel>
                <FormDescription>
                  {layer3.description}
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
        {layer3.input !== undefined && (
            <InputComponent input={layer3.input} form={form} him={him + ".input"} />
        )}
        {layer3.children && layer3.children.map((layer4, index) => (
             <Layer4Component key={layer4.id} layer4={layer4} form={form} parent={him} index={index} />
        ))
        }
    </div>
  );
};

export default Layer3Component;
