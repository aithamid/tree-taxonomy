import { z } from "zod"

export const one_choiceSchema = z.object({
  list: z.array(z.string()),
  value: z.string()
})

export const inputSchema = z.object({
  double: z.number().optional(),
  one_choice: one_choiceSchema.optional()
})

export const layer4Schema = z.object({
  id: z.string(),
  name: z.string(),
  active: z.boolean(),
  input: inputSchema.optional()
})

export const layer3Schema = z.object({
  id: z.string(),
  name: z.string(),
  active: z.boolean(),
  description: z.string().optional(),
  children: z.array(layer4Schema).optional()
})

export const layer2Schema = z.object({
  id: z.string(),
  name: z.string(),
  children: z.array(layer3Schema).optional()
})

export const layer1Schema = z.object({
  id: z.string(),
  name: z.string(),
  children: z.array(layer2Schema).optional()
})

export const taxonomySchema = z.object({
    layers: z.array(layer1Schema)
  })

export type L1 = z.infer<typeof taxonomySchema>["layers"][number];

export type L2 = z.infer<typeof layer2Schema>;

export type L3 = z.infer<typeof layer3Schema>;

export type L4 = z.infer<typeof layer4Schema>;

export type InputType = z.infer<typeof inputSchema>;