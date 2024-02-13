// interfaces.ts
export interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "switch";
  placeholder?: string;
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

export interface FormStructure {
  sections: FormSection[];
}
