import {PersonDetailsProps} from '../types'

const PersonDetails = ({ person }: PersonDetailsProps) => {
  return (
    <tr key={person.name}>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  );
};

export default PersonDetails;
