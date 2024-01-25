export interface L1 {
    name: string;
    L2: L2[];
}

export interface L2 {
    name: string;
    L3: L3[];
}

export interface L3 {
    name: string;
    children?: L4[];
    multi_choices?: Multi_choice;
    one_choice?: One_choice;
    double_values?: Double[];
    enable?: boolean;
}

export interface L4 {
    name: string;
    multi_choices?: Multi_choice;
    one_choice?: One_choice;
    double_values?: Double[];
    enable?: boolean;
}

export interface Multi_choice {
    choices: string[];
    chosen: string[];
}

export interface One_choice {
    choices: string[];
    chosen: string;
}

export interface Double {
    name: string;
    value?: number;
}