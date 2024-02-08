import { taxonomySchema } from "@/interfaces/taxonomy";
import * as z from 'zod';

type L1 = z.infer<typeof taxonomySchema>["layers"][number];

export let layersInitial: L1[] = [
  {
    id: "PI",
    name: "Physical Infrastructure",
    children: [
      {
        id: "1.1",
        name: "Text 1.1",
        children: [
          {
            id: "1.1.1",
            name: "Text 1.1.1",
            active: true,
            input: {
              double: 0,
            }
          },
          {
            id: "1.1.2",
            name: "Text 1.1.2",
            active: true,
            input: {
              one_choice: {
                list: [
                  {id: "A", label: "A"},
                  {id: "B", label: "B"},
                  {id: "C", label: "C"},
                ],
                value: "A"
              }
            }
          },
          {
            id: "1.1.3",
            name: "Text 1.1.3",
            active: false,
            input: {
              multi_choice: {
                list: [
                  {id: "D", label: "D"},
                  {id: "E", label: "E"},
                  {id: "F", label: "F"},
                ],
                value: ["E", "F"]
              }
            }
          },
          {
            id: "1.1.4",
            name: "Text 1.1.4",
            active: false,
            input: {
              newClass: [
                {
                  id: "1",
                  label: "One",
                  value: "",
                  active: false,
                },
                {
                  id: "2",
                  label: "Two",
                  value: "",
                  active: false,
                },
                {
                  id: "3",
                  label: "Three",
                  value: "",
                  active: true,
                },
              ]
            }
          },
          {
            id: "1.1.5",
            name: "Text 1.1.5",
            active: false,
            children: [
              {
                id: "1.1.1.1",
                name: "Text 1.1.1.1",
                active: false,
                input: {
                  double: 0,
                }}]
          },
        ]
      },
    ]
  },
  {
    id: "TI",
    name: "Traffic Infrastructure",
  }
];
