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
    active?: boolean;
}