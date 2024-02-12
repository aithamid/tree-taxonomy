import React from 'react';
import { InputType } from '@/interfaces/taxonomy';
import { FormField, FormLabel, FormDescription, FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const InputComponent: React.FC<{ input: InputType, form: any, him: string}> = ({ input, form, him }) => {
  return (
    <div className='pt-2'>
        {input.double !== undefined && (
            <div>
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

        {input.text !== undefined && (
            <div>
            <FormField
            control={form.control}
            name={him + '.text'}
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                <FormControl>
                    <Input  {...field} type="text" onChange={event => field.onChange(event.target.value)} />
                </FormControl>
                </FormItem>
            )}
            />
            </div>
        )}

        {input.one_choice !== undefined && (
            <div>
            <FormField
            control={form.control}
            name={him + '.one_choice.value'}
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={input.one_choice?.value}>
                {input.one_choice?.list.map((item, index) => (
                <div key={item.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.id} id={item.id} />
                    <Label htmlFor={item.id}>{item.label}</Label>
                </div>
                ))}
                </RadioGroup>
                </FormControl>
                </FormItem>
            )}
            />
            </div>
        )}

        {input.multi_choice !== undefined && (
            <div>
            <FormField
                    control={form.control}
                    name={him + '.multi_choice.value'}
                    render={() => (
                        <FormItem>
                        {input.multi_choice?.list.map((choice, index) => (
                            <FormField
                            key={choice.id}
                            control={form.control}
                            name={him + '.multi_choice.value'}
                            render={({ field }) => {
                                return (
                                <FormItem
                                    key={choice.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                    <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(choice.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, choice.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value : string) => value !== choice.id
                                                )
                                            )
                                        }}
                                    />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                    {choice.label}
                                    </FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                        </FormItem>
                    )}
                    />
            </div>
        )}
        {input.newClass !== undefined && (
            <div>
                <FormField
                    control={form.control}
                    name={him + '.newClass'}
                    render={() => (
                        <FormItem>
                        {input.newClass !== undefined && (
    <div>
        <FormField
            control={form.control}
            name={him + '.newClass'}
            render={() => (
                <FormItem>
                {input.newClass?.map((item, index) => (
                    <React.Fragment key={index}>
                        <FormField
                            key={item.id+"-active"}
                            control={form.control}
                            name={him + `.newClass.[${index}].active`}
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item.id+"-active2"}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={(value) => form.setValue(him + `.newClass.[${index}].active`, value)} />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                );
                            }} />
                        <FormField
                            key={item.id+"-value"}
                            control={form.control}
                            name={him + `.newClass.[${index}].value`}
                            render={({ field: valueField, fieldState }) => {
                                // Utilisez l'état du champ 'active' pour déterminer si l'Input doit être désactivé
                                const isActive = form.watch(`${him}.newClass.[${index}].active`);
                                return (
                                    <FormItem
                                        key={item.id+"-value2"}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Input
                                                {...valueField}
                                                type="text"
                                                onChange={event => valueField.onChange(event.target.value)}
                                                disabled={!isActive} // Désactive l'Input si le Checkbox n'est pas coché
                                            />
                                        </FormControl>
                                    </FormItem>
                                );
                            }} />
                    </React.Fragment>
                ))}
                </FormItem>
            )}
        />
    </div>
)}

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
