import React from 'react';

import Hoc from './Hoc';

const OtherComponent = (props) => {
  // Access 'data' from props
  const { data } = props;

  return (
    <div>
      <h2>Other Component</h2>
      <p>Data: {data}</p>
    </div>
  );
};

export default Hoc(OtherComponent);
