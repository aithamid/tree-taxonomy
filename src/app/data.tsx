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
            active: false,
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
            active: false,
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
                  { id: "8", label: "ramp" },
                  { id: "9", label: "intersection Railroad crossing" },
                  { id: "10", label: "tramway intersection " },
                ],
                value: ""
              }
            }
          },
          {
            id: "1.1.3",
            name: "Eventual roadway use type ",
            active: false,
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
            active: false,
            children: [
              {
                id: "1.2.1.1",
                name: "Use of ego lane",
                active: false,
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
                active: false,
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
                active: false,
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
            active: false,
            children: [
              {
                id: "1.2.2.1",
                name: "Direction of left traffic lane",
                active: false,
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
                active: false,
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
            active: false,
            children: [
              {
                id: "1.2.3.1",
                name: "Possible element on the ego traffic lane not preventing traffic",
                active: false,
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
            active: false,
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
            active: false,
            input: {
              double: 0,
            }
          },
          {
            id: "1.2.6",
            name: "Pavement grip coefficient",
            active: false,
            input: {
              double: 0,
            }
          },
          {
            id: "1.2.7",
            name: "Road marking contrast",
            active: false,
            input: {
              double: 0,
            }
          }
        ]
      },
      {
        id: "1.3",
        name : "Roadway Geometry",
        children: [
          {
            id: "1.3.1",
            name: "Width of the lanes",
            active: false,
            children: [
              {
                id: "1.3.1.1",
                name: "Minimal width of the ego lane",
                active: false,
                input: {
                  double: 0,
                }
              }
            ]
          },
          {
            id: "1.3.3",
            name: "Radius of curvature",
            active: false,
            input: {
              double: 0,
            }
          },
          {
            id: "1.3.5",
            name: "Slope",
            active: false,
            input: {
              double: 0,
            }
          },
        ]
      },
      {
        id: "1.4",
        name: "Junctions",
        children: [
          {
            id: "1.4.1",
            name: "Configuration of the intersection",
            active: false,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "X intersection" },
                  { id: "2", label: "T intersection" },
                  { id: "3", label: "Y intersection" },
                  { id: "4", label: "Star intersection" },
                  { id: "5", label: "Single traffic round about "},
                  { id: "6", label: "Double traffic round about" },
                  { id: "7", label: "Triple traffic round about" },
                  { id: "8", label: "Left turn" },
                  { id: "9", label: "Merging lane" },
                  { id: "10", label: "Merging of lanes" },
                  { id: "11", label: "Roundabout" },
                  { id: "12", label: "Railway level crossing platform" },
                  { id: "13", label: "Tramway lane intersection" },
                  { id: "14", label: "Ramp in" },
                  { id: "15", label: "Ramp off" },
                ],
                value: []
              }
            }
          },
          {
            id: "1.4.2",
            name: "Angle of the crossing lanes",
            active: false,
            children: [
              {
                id: "1.4.2.1",
                name: "Maximal angle between ego lane and intersection branch",
                active: false,
                input: {
                  double: 0,
                }
              }
            ]
          },
          {
            id: "1.4.3",
            name: "Priority rules",
            active: false,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Right priority lane" },
                  { id: "2", label: "Priority roundabout" },
                  { id: "3", label: "Traffic lights" },
                  { id: "4", label: "Flashing light" },
                  { id: "5", label: "R24 light" },
                  { id: "6", label: "YIELD" },
                  { id: "7", label: "STOP" },
                  { id: "8", label: "Tramway line priority" },
                  { id: "9", label: "Priority lane TW" },
                ],
                value: []
              }
            }
          },
          {
            id: "1.4.4",
            name: "Particularity of the intersection",
            active: false,
          }
        ]
      },
      {
        id: "1.5",
        name: "Temporary structures",
        children: [
          {
            id: "1.5.1",
            name: "Workzone",
            active: false,
          }
        ]
      },
      {
        id: "1.6",
        name: "Fixed surroundings structures",
        children: [
          {
            id: "1.6.1",
            name: "Constraints on masks from the geo-positioning point of view",
            active: false,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Tunnel" },
                  { id: "2", label: "Trench" },
                  { id: "3", label: "Parking / Garage" },
                  { id: "4", label: "Toll booth" },
                  { id: "5", label: "Urban canyon" },
                  { id: "6", label: "Multiple reflections"},
                  { id: "7", label: "Dense vegetation cover"},
                  { id: "8", label: "GPS / GNSS Disturbance zone"}
                ],
                value: []
              }
            }
          },
          {
            id: "1.6.2",
            name: "Constraints on masks from the connectivity point of view",
            active: false,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Vegetated area " },
                  { id: "2", label: "Tunnel" },
                  { id: "3", label: "Trench" },
                  { id: "4", label: "Metalic structure" },
                  { id: "5", label: "Parking/ Garage" },
                  { id: "6", label: "Toll booth"},
                  { id: "7", label: "Urban canyon"},
                  { id: "8", label: "Multiple reflections"},
                  { id: "9", label: "Radio interference zone"},
                ],
                value: []
              }
            }
          }
        ]
      },
      {
        id: "1.7",
        name: "Special structures",
        children: [
          {
            id: "1.7.1",
            name: "Marking of cycle zone on the ego lane",
            active: false,
          }
        ]
      },
      {
        id: "1.8",
        name: "Signage",
        children: [
          {
            id: "1.8.1",
            name: "Vertical traffic signs",
            active: false,
            children: [
              {
                id: "1.8.1.1",
                name: "Type A : hazard",
                active: false,
              },
              {
                id: "1.8.1.2",
                name: "Type AB : priorities at intersection",
                active: false,
              },
              {
                id: "1.8.1.3",
                name: "Type B : prescriptions",
                active: false,
              },
              {
                id: "1.8.1.4",
                name: "Type C : useful indications",
                active: false,
              },
              {
                id: "1.8.1.5",
                name: "Type CE : useful services indication",
                active: false,
              },
              {
                id: "1.8.1.6",
                name: "Type D : signalization and positioning",
                active: false,
              },
              {
                id: "1.8.1.7",
                name: "Type E : entries/end of urban zones",
                active: false,
              },
              {
                id: "1.8.1.8",
                name: "Type G : Railway crossing localization",
                active: false,
              },
              {
                id: "1.8.1.9",
                name: "Type SR : information for road safety",
                active: false,
              },
            ]
          },
          {
            id: "1.8.2",
            name: "Traffic lights",
            active: false,
          },
          {
            id: "1.8.3",
            name: "Road markings (horizontal markings)",
            active: false,
          },
          {
            id: "1.8.4",
            name: "Guidance equipment",
            active: false,
          },
          {
            id: "1.8.5",
            name: "Boundary markers",
            active: false,
          },
          {
            id: "1.8.6",
            name: "Closing devices",
            active: false,
          },
          {
            id: "1.8.7",
            name: "Dynamic signs ",
            active: false,
          },
          {
            id: "1.8.8",
            name: "Temporary signs",
            active: true,
            children: [
              {
                id: "1.8.8.1",
                name: "Type AK : Hazard",
                active: false,
              },
              {
                id: "1.8.8.2",
                name: "Type K : Specific",
                active: false,
              },
              {
                id: "1.8.8.3",
                name: "Type KC : Work-zones",
                active: false,
              },
              {
                id: "1.8.8.4",
                name: "Type KD : Lane merging",
                active: false,
              },
            ]
          },
          {
            id: "1.8.9",
            name: "Connected equipments",
            active: false,
            input: {
              multi_choice: {
                list: [],
                value: []
              }
            }
          }
        ]
      },
      {
        id: "1.9",
        name: "Man-made landmark",
        children: [
          {
            id: "1.9.1",
            name: "Infrared objects",
            active: false,
          },
          {
            id: "1.9.2",
            name: "Beacon",
            active: false,
          },
          {
            id: "1.9.3",
            name: "Speed bump",
            active: false,
          },
          {
            id: "1.9.4",
            name: "Electromagnetic",
            active: false,
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Scenary",
  }
];
