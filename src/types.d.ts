export interface PersonType {
  name: string;
  number: string;
  id: number;
}

// Components props types definitions:

export type ChangeEventHandlerType = (e: React.ChangeEvent) => void

export interface FilterProps {
  filterText: string,
  changeHandler: ChangeEventHandlerType
}

export interface PersonsProps {
  persons: Array<PersonType>
}

export interface PersonDetailsProps {
  person: PersonType
}