import { taxonomySchema } from "@/interfaces/taxonomy";
import * as z from 'zod';

type L1 = z.infer<typeof taxonomySchema>["layers"][number];

export let layersInitial: L1[] = [
  {
    id: "1",
    name: "Physical Infrastructure",
    children: [
      {
        id: "1.1",
        name: "Roadway Type",
        children: [
          {
            id: "1.1.1",
            name: "Road category",
            active: true,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "One-way roads" },
                  { id: "2", label: "Two-way roads" },
                  { id: "3", label: "Divided Roads" },
                  { id: "4", label: "Roads with variable lane assignment" }
                ],
                value: ""
              }
            }
          },
          {
            id: "1.1.2",
            name: "Specific infrastructure configuration",
            active: true,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Current traffic (not applicable)" },
                  { id: "2", label: "Distress lane" },
                  { id: "3", label: "Storage lane" },
                  { id: "4", label: "Parking" },
                  { id: "5", label: "Toll booth" },
                  { id: "6", label: "bridge/viaduct" },
                  { id: "7", label: "tunnel/underpass" },
                  { id: "7", label: "ramp" },
                  { id: "7", label: "intersection Railroad crossing" },
                  { id: "7", label: "tramway intersection " },
                ],
                value: ""
              }
            }
          },
          {
            id: "1.1.3",
            name: "Eventual roadway use type ",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Roads open to all traffic types (no restriction)" },
                  { id: "2", label: "Ego-only road" },
                  { id: "3", label: "Car-only lanes" },
                  { id: "4", label: "Meeting Zone" },
                  { id: "5", label: "\"30\" zone" },
                  { id: "6", label: "Pedestrian walkways" },
                  { id: "7", label: "Roads closed to motor vehicles" },
                ],
                value: ["1","2"]
              }}
          }
        ]
      },
      {
        id: "1.2",
        name: "Roadway Edge",
        children: [
          {
            id: "1.2.1",
            name: "Use of lanes",
            active: true,
            children: [
              {
                id: "1.2.1.1",
                name: "Use of ego lane",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "1", label: "Ego only traffic lane" },
                      { id: "2", label: "All traffic" },
                      { id: "3", label: "Pedestrian zone / soft modes" },
                      { id: "4", label: "Bus lane" },
                    ],
                    value: "3"
                  }
                }
              },
              {
                id: "1.2.1.2",
                name: "Use of left lane",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "1", label: "Shoulder lane" },
                      { id: "2", label: "All traffic" },
                      { id: "3", label: "Pedestrian zone / soft modes" },
                      { id: "4", label: "Bus lane" },
                    ],
                    value: "3"
                  }
                }
              },
              {
                id: "1.2.1.3",
                name: "Use of right lane",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "1", label: "Shoulder lane" },
                      { id: "2", label: "All traffic" },
                      { id: "3", label: "Pedestrian zone / soft modes" },
                      { id: "4", label: "Bus lane" },
                    ],
                    value: "3"
                  }
                }
              }
            ]
          },
          {
            id: "1.2.2",
            name: "Traffic lanes direction",
            active: true,
            children: [
              {
                id: "1.2.2.1",
                name: "Direction of left traffic lane",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "1", label: "Not applicable" },
                      { id: "2", label: "Ego direction" },
                      { id: "3", label: "Opposite direction" }
                    ],
                    value: "1"
                  }
                }
              },
              {
                id: "1.2.2.2",
                name: "Direction of right traffic lane",
                active: true,
                input: {
                  one_choice: {
                    list: [
                      { id: "1", label: "Not applicable" },
                      { id: "2", label: "Ego direction" },
                      { id: "3", label: "Opposite direction" }
                    ],
                    value: "1"
                  }
                }
              }
            ]
          },
          {
            id: "1.2.3",
            name: "Element on the lanes not preventing traffic",
            active: true,
            children: [
              {
                id: "1.2.3.1",
                name: "Possible element on the ego traffic lane not preventing traffic",
                active: true,
                input: {
                  multi_choice: {
                    list: [
                      { id: "1", label: "Rutting" },
                      { id: "2", label: "Subsidence" },
                      { id: "3", label: "Pothole" },
                      { id: "4", label: "Manhole" },
                      { id: "5", label: "Fillings" },
                      { id: "6", label: "Speed bump" },
                      { id: "7", label: "Speed bump with sound strip" },
                      { id: "8", label: "Chicane speed bump" },
                      { id: "9", label: "Lock speed bump" },
                      { id: "10", label: "Tight curve retarder" },
                      { id: "11", label: "Cushion-type speed bump" },
                      { id: "12", label: "Trapezoidal type speed bumps" },
                      { id: "13", label: "Roadway elevation" },
                      { id: "14", label: "Railway level crossing platform" },
                      { id: "15", label: "Parking bumps" },
                    ],
                    value: ["1","2"]
                  }
                }
              }
            ]
          },
          {
            id: "1.2.4",
            name: "Type of pavement surface",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Asphalt pavement" },
                  { id: "2", label: "Concrete" },
                  { id: "3", label: "Composite pavement" },
                  { id: "4", label: "Gravel surface" },
                  { id: "5", label: "Pavers" },
                  { id: "6", label: "Thin geo-textile membrane" },
                  { id: "7", label: "Unpaved" }
                ],
                value: ["1","2"]
              }
            }
          },
          {
            id: "1.2.5",
            name: "Luminance of the road surface",
            active: true,
            input: {
              double: 0,
            }
          },
          {
            id: "1.2.6",
            name: "Pavement grip coefficient",
            active: true,
            input: {
              double: 0,
            }
          },
          {
            id: "1.2.7",
            name: "Road marking contrast",
            active: true,
            input: {
              double: 0,
            }
          }
        ]
      },
      {
        id: "1.3",
        name : "Roadway Geometry"
      },
      {
        id: "1.4",
        name: "Junctions"
      },
      {
        id: "1.5",
        name: "Temporary structures"
      },
      {
        id: "1.6",
        name: "Fixed surroundings structures" 
      },
      {
        id: "1.7",
        name: "Special structures"
      },
      {
        id: "1.8",
        name: "Signage"
      },
      {
        id: "1.9",
        name: "Man-made landmark"
      }
    ]
  },
  {
    id: "2",
    name: "Scenary",
  }
];
