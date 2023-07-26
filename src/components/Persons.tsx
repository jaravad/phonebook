import { PersonType, PersonsProps } from '../types';
import PersonDetails from './PersonDetails';

const Persons = ({ persons }: PersonsProps) => {
  return (
    <table>
      <tbody>
        {persons.map((p: PersonType) => (
          <PersonDetails person={p} key={p.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Persons;
