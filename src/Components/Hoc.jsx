// withData.jsx
import React from 'react';

const Hoc = (WrappedComponent) => {
  const data = "vimal";

  return () => (
    <>
        <h1>hoc component</h1>
        
      <h1>Hello</h1>
      <WrappedComponent data={data}  />
    </>
  );
};

export default Hoc;
