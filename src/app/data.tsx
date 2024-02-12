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
                value: "1"
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
                value: "1"
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
    name: "Scenery",
    children: [
      {
        id: "2.2",
        name: "Region / State",
        input: {
          multi_choice: {
            list: [
              { id: "1", label: "Country" },
              { id: "2", label: "Geographic Area" },
            ],
            value: []
          }
        }
      },
      {
        id: "2.3",
        name: "Interference zones",
        input: {
          multi_choice: {
            list: [
              { id: "1", label: "Tunnels" },
              { id: "2", label: "Garages / Parking" },
            ],
            value: []
          }
        }
      },
      {
        id: "2.4",
        name: "Interference zones",
      },
      {
        id: "2.5",
        name: "Landmark",
        input: {
          multi_choice: {
            list: [
              { id: "1", label: "Bridge" },
              { id: "2", label: "Tunnels" },
              { id: "3", label: "Specific buildings with specific shapes" },
              { id: "4", label: "Signatures at building's roof" },
              { id: "5", label: "Electrical poles" },
              { id: "6", label: "Wind turbines" },
            ],
            value: []
          }
        }
      }
    ]
  },
  {
    id: "3",
    name: "Environmental conditions",
    children: [
      {
        id: "3.1",
        name: "Weather conditions",
        children: [
          {
            id: "3.1.1",
            name: "Rain",
            active: false,
            input: {
              newClass: [
                { id: "1", label: "Size (µm)", value: "", active: false },
                { id: "2", label: "Rain intensity (mm/h)", value: "", active: false },
                { id: "3", label: "Opacity level", value: "", active: false },
                { id: "4", label: "Speed (m/s)", value: "", active: false },
                { id: "5", label: "Direction", value: "", active: false },
              ]
            }
          },
          {
            id: "3.1.2",
            name: "Snow",
            active: false,
            input: {
              newClass: [
                { id: "1", label: "Size (µm)", value: "", active: false },
                { id: "2", label: "Visibility (m)", value: "", active: false },
                { id: "3", label: "Speed (m/s)", value: "", active: false },
                { id: "4", label: "Direction", value: "", active: false },
              ]
            }
          },
          {
            id: "3.1.3",
            name: "Hail",
            active: false,
            input: {
              newClass: [
                { id: "1", label: "Size (µm)", value: "", active: false },
                { id: "2", label: "Visibility (m)", value: "", active: false },
                { id: "3", label: "Speed (m/s)", value: "", active: false },
              ]
            }
          },
          {
            id: "3.1.4",
            name: "Fog",
            active: false,
            input: {
              newClass: [
                { id: "1", label: "Size (µm)", value: "", active: false },
                { id: "2", label: "Visibility (m)", value: "", active: false },
              ]
            }
          },
          {
            id: "3.1.5",
            name: "Wind",
            active: false,
            input: {
              newClass: [
                { id: "1", label: "Speed (m/s)", value: "", active: false },
                { id: "2", label: "Speed gradient", value: "", active: false },
                { id: "3", label: "Direction", value: "", active: false },
              ]
            }
          },
        ]
      },
      {
        id: "3.2",
        name: "Particulates",
        input: {
          multi_choice: {
            list: [
              { id: "1", label: "Smoke" },
              { id: "2", label: "Sand" },
              { id: "3", label: "Dust" },
              { id: "4", label: "Wind-blown debris" },
            ],
            value: []
          }
        }
      },
      {
        id: "3.3",
        name: "Weather-induced roadway conditions",
        input: {
          multi_choice: {
            list: [
              { id: "1", label: "Normal" },
              { id: "2", label: "Wet" },
              { id: "3", label: "Puddles, accumulations" },
              { id: "4", label: "Flooded" },
              { id: "5", label: "Snowy" },
              { id: "6", label: "Muddy" },
              { id: "7", label: "Icy" },
            ],
            value: []
          }
        }
      },
      {
        id: "3.4",
        name: "Illumination",
        children: [
          {
            id: "3.4.1",
            name: "Illumination level",
            description: "Illumination level in lux",
            active: false,
            input: {
              double: 0,
            }
          },
          {
            id: "3.4.2",
            name: "Illumination conditions",
            active: false,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Daylight" },
                  { id: "2", label: "Night" },
                  { id: "3", label: "Dusk" },
                  { id: "4", label: "Dawn" },
                  { id: "5", label: "Natural light" },
                  { id: "6", label: "Artificial light" },
                  { id: "7", label: "Fog"},
                  { id: "8", label: "Night with public lighting"},
                  { id: "9", label: "Night without public lighting"},
                  { id: "10", label: "Sunrise"},
                  { id: "11", label: "Sunset"},
                ],
                value: []
              
              }
            }
          },
          {
            id: "3.4.3",
            name: "Interfering illuminances",
            active: false,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Not applicable" },
                  { id: "2", label: "Passing vehicle headlights" },
                  { id: "3", label: "Headlights of the following vehicles" },
                  { id: "4", label: "Position lights of the other vehicles in lane" },
                  { id: "5", label: "Grazing sun in front" },
                  { id: "6", label: "Reflections" },
                ],
                value: []
              }
            }
          },
          {
            id: "3.4.4",
            name: "Illumination variation",
            description: "Gradient of illumination variation",
            active: false,
            input: {
              double: 0,
            }
          }
        ]
      },
      {
        id: "3.5",
        name: "Minimum / Maximum ambient air temperature",
        children: [
          {
            id: "3.5.1",
            name: "Minimum ambient air temperature",
            active: false,
            input: {
              double : 0,
            }
          },
          {
            id: "3.5.2",
            name: "Maximum ambient air temperature",
            active: false,
            input: {
              double : 0,
            }
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Traffic conditions",
    children: [
      {
        id: "4.1",
        name: "Traffic density",
        children: [
          {
            id: "4.1.1",
            name: "Traffic density on the ego direction traffic lane(s)",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Fluid (0.75*Vmax < V < Vmax)" },
                  { id: "2", label: "Dense (0.50*Vmax < V < 0.75* Vmax)" },
                  { id: "3", label: "Saturated (0.25*Vmax < V < 0.50*Vmax)" },
                  { id: "4", label: "Blocked (V < 0.25*Vmax)" },
                ],
                value: "1"
              }
            }
          },
          {
            id: "4.1.2",
            name: "Traffic density on the opposite direction lane(s)",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: "1"
              }
            }
          },
          {
            id: "4.1.3",
            name: "Traffic density on ramp in",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: "1"
              }
            }
          },
          {
            id: "4.1.4",
            name: "Traffic density on ramp off",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: "1"
              }
            }
          },
          {
            id: "4.1.5",
            name: "Traffic density on the crossing lane(s)",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: "1"
              }
            }
          },
        ]
      },
      {
        id: "4.2",
        name: "Road-users (type & speed)",
        children: [
          {
            id: "4.2.1",
            name: "Road-users Type",
            active: true,
            children: [
              {
                id: "4.2.1.1",
                name: "Road users type on the ego direction traffic lane(s)",
                active: true,
                input: {
                  multi_choice: {
                    list: [
                      { id: "1", label: "Pedestrian" },
                      { id: "2", label: "Bicycle" },
                      { id: "3", label: "2 Wheel Drive" },
                      { id: "4", label: "Light vehicles" },
                      { id: "5", label: "Heavy vehicles" },
                    ],
                    value: []
                  }
                }
              },
              {
                id: "4.2.1.2",
                name: "Road users type on the opposite direction traffic lane(s)",
                active: true,
                input: {
                  multi_choice: {
                    list: [
                      { id: "1", label: "Pedestrian" },
                      { id: "2", label: "Bicycle" },
                      { id: "3", label: "2 Wheel Drive" },
                      { id: "4", label: "Light vehicles" },
                      { id: "5", label: "Heavy vehicles" },
                    ],
                    value: []
                  }
                }
              },
              {
                id: "4.2.1.3",
                name: "Road users type on the crossing traffic lane(s)",
                active: true,
                input: {
                  multi_choice: {
                    list: [
                      { id: "1", label: "Pedestrian" },
                      { id: "2", label: "Bicycle" },
                      { id: "3", label: "2 Wheel Drive" },
                      { id: "4", label: "Light vehicles" },
                      { id: "5", label: "Heavy vehicles" },
                    ],
                    value: []
                  }
                }
              },
            ]
          }
        ]
      },
      {
        id: "4.3",
        name: "Road-users (behavior)",
        children: [
          {
            id: "4.3.1",
            name: "Road-users behavior on the ego direction traffic lane(s)",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: ""
              }
            }
          },
          {
            id: "4.3.2",
            name: "Road users speed on the opposite direction traffic lane(s)",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: ""
              }
            }
          },
          {
            id: "4.3.3",
            name: "Road users speed on the crossing traffic lane(s)",
            active: false,
            input: {
              one_choice: {
                list: [
                  { id: "1", label: "Low" },
                  { id: "2", label: "Middle" },
                  { id: "3", label: "High" },
                ],
                value: ""
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Digital infrastructure",
    children: [
      {
        id: "5.1",
        name: "Type of information",
        children: [
          {
            id: "5.1.1",
            name: "GPS Signal",
            active: true,
            input: {
              text: "",
            }
          },
          {
            id: "5.1.2",
            name: "Radio landmark for geo positioning recalibration",
            active: true,
            input: {
              text: "",
            }
          },
          {
            id: "5.1.3",
            name: "Information expected by the vehicle ",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Temperature" },
                  { id: "2", label: "Traffic conditions" },
                  { id: "3", label: "Accident" },
                  { id: "4", label: "Priority vehicles approaching" },
                  { id: "5", label: "Traffic light status" },
                  { id: "6", label: "Weather conditions" },
                  { id: "7", label: "Mobile equipement position" },
                  { id: "8", label: "Recommended path"},
                  { id: "9", label: "Position of the cone"},
                  { id : "10", label: "Excessive speed warning" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.1.4",
            name: "Information expected by the system",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Position of the cone" },
                  { id: "2", label: "Topology of the roadwork," },
                  { id: "3", label: "Other" },
                ],
                value: []
              }
            }
          }
        ]
      },
      {
        id: "5.2",
        name: "Radio access technology",
        children: [
          {
            id: "5.2.1",
            name: "V2V",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.2.2",
            name: "V2FLEET",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.2.3",
            name: "V2PCC",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.2.4",
            name: "V2SEN",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.2.5",
            name: "V2DEV",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.2.6",
            name: "V2P",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.2.7",
            name: "V2FO",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "5G" },
                  { id: "2", label: "ITS-G5" },
                  { id: "3", label: "C-V2X" },
                ],
                value: []
              }
            }
          }
        ]
      },
      {
        id: "5.3",
        name: "Service type",
        children: [
          {
            id: "5.3.1",
            name: "C-ITS Day 1 Services",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Slow or stationary vehicle(s) (SSV)" },
                  { id: "2", label: "Traffic jam ahead warning (TJW)" },
                  { id: "3", label: "Hazardous location notification (HLN)" },
                  { id: "4", label: "Road works warning (RWW)" },
                  { id: "5", label: "Weather conditions (WTC)" },
                  { id: "6", label: "Emergency brake light (EBL)" },
                  { id: "7", label: "Emergency vehicle approaching (EVA)" },
                  { id: "8", label: "In-vehicle signage (VSGN)" },
                  { id: "9", label: "In-vehicle speed limits (VSPD)" },
                  { id: "10", label: "Signal violation / Intersection safety (SigV)" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.3.2",
            name: "C-ITS Day 1.5 Services",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Infontainment services" },
                  { id: "2", label: "Vulnerable Road User protection (VRU)" },
                  { id: "3", label: "Connected and cooperative navigation into and out of the city (CCN)" },
                  { id: "4", label: "Zone Access Control for urban areas (ZAC)" },
                  { id: "5", label: "Cooperative Collision Risk Warning (CCRW)" },
                  { id: "6", label: "MotorCycle Approaching indication (MCA)" },
                  { id: "7", label: "Wrong Way Driving (WWD)" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.3.3",
            name: "C-ITS Day 2 Services",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Vulnerable Road User protection (VRU)" },
                  { id: "2", label: "Advanced Pre-crash sensing warning (APCSW)" },
                  { id: "3", label: "Cooperative Adaptive Cruise Control (C-ACC)" },
                  { id: "4", label: "Cooperative ACC String (C-ACC S)" },
                  { id: "5", label: "MotorCycle Approaching warning or protection (MAW)" },
                  { id: "6", label: "Overtaking vehicle warning (OVW)" },
                  { id: "7", label: "Advanced Intersection Collision Warning (AICW)" },
                  { id: "8", label: "Road works warning (long term) (RWW LT)" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.3.4",
            name: "C-ITS Day 3+ Services",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Advanced Cooperative ACC (String) (ACACC)" },
                  { id: "2", label: "Target Driving Area Reservation (TDAR)" },
                  { id: "3", label: "Transition of control notification (ToCN)" },
                  { id: "4", label: "Improved Vulnerable Road User Protection (IVRUP)" },
                  { id: "5", label: "Platooning (platoon)" },
                  { id: "6", label: "Co-operative merging assistance (CM)" },
                  { id: "7", label: "Cooperative lane change (CLC)" },
                  { id: "8", label: "Cooperative overtaking (CO)" },
                  { id: "9", label: "Cooperative ACC string management (CACCS M)" },
                  { id: "10", label: "Cooperative Transition of Control (CToC)" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.3.5",
            name: "Augmented CCAM Services",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Equipped VRUs protection" },
                  { id: "2", label: "Ad-hoc on-demand UAV based VRU protection for closed environments" },
                  { id: "3", label: "Road workers in the field" },
                  { id: "4", label: "Insertion (on current lane or on insertion lane)" },
                  { id: "5", label: "Temporary road works" },
                  { id: "6", label: "Non-equipped VRU protection" },
                  { id: "7", label: "Localisation of assets and CCAM vehicles" },
                  { id: "8", label: "Minimum risk manœuvre" },
                  { id: "9", label: "Optimised logistic operation of AVs leveraging on advanced digital technologies and DT" },
                ],
                value: []
              }
            }
          }
        ]
      },
      {
        id: "5.4",
        name: "Road side sensors",
        children: [
          {
            id: "5.4.1",
            name: "Type of sensors",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Camera" },
                  { id: "2", label: "Inductive loop" },
                  { id: "3", label: "Radar" },
                  { id: "4", label: "Lidar" },
                  { id: "5", label: "GPS" },
                  { id: "6", label: "Meteorogical sensors" },
                  { id: "7", label: "RSU" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.4.2",
            name: "Type of service",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Localization" },
                  { id: "2", label: "Accident/incident detection" },
                  { id: "3", label: "Traffic density assessment" },
                  { id: "4", label: "Traveling time estimation" },
                  { id: "5", label: "Weather condition assessment" },
                  { id: "6", label: "Distance of visibility" },
                  { id: "7", label: "Risk assessment" },
                  { id: "8", label: "Object detection (box, part of a car, rock, tree branch, etc.)" },
                ],
                value: []
              }
            }
          },
        ]
      },
      {
        id: "5.5",
        name: "HD Maps",
        children: [
          {
            id: "5.5.1",
            name: "Level 1 : Road network and traffic guidance objects",
            active: true,
            input : {
            multi_choice: {
              list: [
                { id: "1", label: "Roadwork geometry" },
                { id: "2", label: "Road shoulders and sidewalks" },
                { id: "3", label: "Parking spaces" },
                { id: "4", label: "Road markings" },
                { id: "5", label: "Traffic signs and traffic lights" },
                { id: "6", label: "Intersections" },
                { id: "7", label: "Pedestrian crossing" },
                { id: "8", label: "Bicycle lane" },
                { id: "9", label: "Speed bumps" },
              ],
              value: []
            }
           }
          },
          {
            id: "5.5.2",
            name: "Level 2 : Roadside structures and permanent furniture",
            active: true,
            input: {
              multi_choice: {
               list: [
                { id: "1", label: "Buildings, Tunnels, Bridges" },
                { id: "2", label: "Road side furniture : bench, bus station" },
                { id: "3", label: "Vegetation (grass, trees, bushes)" },
                { id: "4", label: "Safety furniture: guardrails, construction plot, barrier, concrete separator" },
                { id: "5", label: "Street lamps" },
                { id: "6", label: "Road signs: advertising boards and pillars" },
               ],
               value: []
              }
            }
          },
          {
            id: "5.5.3",
            name: "Level 3 : Temporary modification of Level1 and Level2",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Roadwork signs" },
                  { id: "2", label: "Temporary road marking" },
                  { id: "3", label: "Covered road marking" },
                  { id: "4", label: "Fallen branch and tree on the road surface" },
                  { id: "5", label: "Pothole" },
                  { id: "6", label: "Speed bump" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.5.4",
            name: "Level 4 : Static and dynamic modeling",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Vehicles (moving and non moving): conventional car, pick-up, shuttle, bus, truck (with or without trailer)" },
                  { id: "2", label: "Vulnerable (pedestrian, cyclist, motorcyclist)" },
                  { id: "3", label: "Animals (flying, walking)" },
                  { id: "4", label: "Moving objects (box, tree, falling, flying leave and papers, ball, beverage can,...)" },
                  { id: "5", label: "Static objects (box, tree and branch, leave, ball, beverage can,...)" },
                  { id: "6", label: "Ground truth: observers, mask, bounding boxes" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.5.5",
            name: "Level 5 : Environment conditions and disturbers",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "Adverse and degraded conditions: Rain, snow, fog, dust" },
                  { id: "2", label: "Energy sources: sun, lamp, heat, electromagnetic wave, front headlight" },
                  { id: "3", label: "Wind" },
                  { id: "4", label: "Shadows and cloud effect" },
                  { id: "5", label: "Specific effect on material (environment reflection,...)" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.5.6",
            name: "Level 6 : Digital information and sensors",
            active: true,
            input: {
              multi_choice: {
                list: [
                  { id: "1", label: "State of traffic lights and switchable traffic signs" },
                  { id: "2", label: "Variable message sign" },
                  { id: "3", label: "V2X messages" },
                  { id: "4", label: "Cellular network coverage" },
                  { id: "5", label: "Infra sensors (LiDAR, RADAR, camera (IR, neuromorphic, cyclop, fisheye,...))" },
                  { id: "6", label: "GPS and satellite constellation (ref station)" },
                  { id: "7", label: "Road Side Unit" },
                  { id: "8", label: "Meteo station" },
                ],
                value: []
              }
            }
          },
          {
            id: "5.5.7",
            name: "Level 7 : Ego-vehicle",
            active: true,
          }
        ]
      }
    ]
  }
];
