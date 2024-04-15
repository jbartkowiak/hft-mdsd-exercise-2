import { IPerson } from 'app/entities/person/person.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  person?: Pick<IPerson, 'id'> | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
