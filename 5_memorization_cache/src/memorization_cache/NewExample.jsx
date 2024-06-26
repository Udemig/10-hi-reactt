import React, { useCallback, useState } from "react";
import Display from "./Display";

const NewExample = () => {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Sayaç</h2>

      <Display count={count} updateCount={updateCount} />
    </div>
  );
};

export default NewExample;
