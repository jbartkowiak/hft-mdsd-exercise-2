import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 37978,
  title: 'CSS Account Up-sized',
};

export const sampleWithPartialData: ITask = {
  id: 30677,
  title: 'synthesize Research structure',
};

export const sampleWithFullData: ITask = {
  id: 78520,
  title: 'functionalities',
  description: "Internal Pa'anga",
};

export const sampleWithNewData: NewTask = {
  title: 'auxiliary',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
