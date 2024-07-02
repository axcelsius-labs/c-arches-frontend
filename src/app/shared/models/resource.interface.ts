
export interface Resource {
    name: string;
    description: string;
    url: string;
    contacts: Contact[];
    hours: string;
}

export interface Contact {
    key: string;
    value: string;
}

