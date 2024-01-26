"use client";// components/DynamicForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormStructure, FormField } from '@/interfaces/types';
import { Switch } from '@/components/ui/switch';
import formStructureJson from '@/app/data/formFields.json';

const formStructure: FormStructure = formStructureJson;

const DynamicForm: React.FC = () => {
  // Initialize form state with fields for all sections
  const initialState = formStructure.sections.reduce((acc, section) => {
    section.fields.forEach(field => {
      acc[field.id] = field.type === 'switch' ? false : '';
    });
    return acc;
  }, {} as { [key: string]: string | boolean });

  // State to store form values
  const [formState, setFormState] = useState<{ [key: string]: string | boolean }>(initialState);

  // Handle field change
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formState);
    // Here you would typically send the formState to your backend or handle it as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      {formStructure.sections.map((section, sectionIndex) => (
        <fieldset key={sectionIndex}>
          <legend>{section.title}</legend>
          {section.fields.map(field => (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}:</label>
              {field.type === 'switch' ? (
                <Switch
                  id={field.id}
                  checked={!!formState[field.id]}
                  onCheckedChange={(checked) => handleFieldChange({
                    target: {
                      id: field.id,
                      value: '',
                      type: 'checkbox',
                      checked: checked as boolean
                    }
                  } as ChangeEvent<HTMLInputElement>)}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formState[field.id] as string}
                  onChange={handleFieldChange}
                />
              )}
            </div>
          ))}
        </fieldset>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
