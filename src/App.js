import React, { useState } from 'react';
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'

import Button from './Button';

const renderer = createRenderer()

function App() {
  const [clicked, setClicked] = useState();

  return (
    <Provider renderer={renderer}>
      <Button clicked={clicked} setClicked={setClicked} />
    </Provider>
  );
}

export default App;
