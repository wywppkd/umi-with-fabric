import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={add}>add {count}</button>
    </div>
  );
};

export default Home;
