import * as React from 'react';
import {FilterProps} from '../types'

const Filter = ({ filterText, changeHandler }: FilterProps) => {
  return (
    <div>
      filter shown with <input onChange={changeHandler} value={filterText} />
    </div>
  );
};

export default React.memo(Filter);
