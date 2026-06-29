export interface IBook {
    id: string;
    title: string;
    author: string;
    year: number;
    genre: string;
    isAvailable: boolean;
    description: string;

    publisher?: string
    pages?: number
    language?: string
    isbn?: string
    location?: string
    copies?: number
    availableCopies?: number
    tags?: string[]
}

