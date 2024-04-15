export interface IPerson {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  age?: number | null;
}

export type NewPerson = Omit<IPerson, 'id'> & { id: null };
