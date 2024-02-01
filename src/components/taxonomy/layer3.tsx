import React, { useEffect } from 'react';
import { L3 } from '@/interfaces/taxonomy';
import { Switch } from '@/components/ui/switch';
import { FormField, FormLabel, FormDescription, FormControl, FormItem } from '@/components/ui/form';

const Layer3Component: React.FC<{ layer3: L3, form: any, l1index: number, l2index: number, l3index: number }> = ({ layer3, form, l1index, l2index, l3index }) => {
  const fieldName = `children[${l2index}].children[${l3index}].active`;

  // Utiliser useEffect pour définir la valeur initiale de `active` dans le formulaire
  useEffect(() => {
    form.setValue(fieldName, layer3.active);
  }, [form, fieldName, layer3.active]);

  return (
    <FormField
      control={form.control}
      name={fieldName}
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
              onCheckedChange={(value) => form.setValue(fieldName, value)}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default Layer3Component;
