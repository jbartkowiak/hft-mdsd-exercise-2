import { IPerson, NewPerson } from './person.model';

export const sampleWithRequiredData: IPerson = {
  id: 31094,
  firstName: 'Alexis',
  lastName: 'Reichel',
};

export const sampleWithPartialData: IPerson = {
  id: 64466,
  firstName: 'Youssef',
  lastName: 'Rossberg',
};

export const sampleWithFullData: IPerson = {
  id: 75319,
  firstName: 'Willi',
  lastName: 'Deuschle',
  age: 10151,
};

export const sampleWithNewData: NewPerson = {
  firstName: 'Joost',
  lastName: 'Brunner',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
