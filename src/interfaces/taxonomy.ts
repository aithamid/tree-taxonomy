import { z } from "zod"

export const layer3Schema = z.object({
  id: z.string(),
  name: z.string(),
  active: z.boolean()
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


export interface Layer1 {
    id : string;
    name: string;
    children?: Layer2[];
}

export interface Layer2 {
    id : string;
    name: string;
    children?: Layer3[];
}

export interface Layer3 {
    id : string;
    name: string;
    active: boolean;
}

export type L1 = z.infer<typeof taxonomySchema>["layers"][number];

export type L2 = z.infer<typeof layer2Schema>;

export type L3 = z.infer<typeof layer3Schema>;