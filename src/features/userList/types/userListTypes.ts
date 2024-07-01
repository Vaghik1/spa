export interface User {
    id: string;
    name: string;
    age: number;
    email: string;
}
export type Direction = 'asc' | 'desc';
export type SortedField = 'name' | 'age';