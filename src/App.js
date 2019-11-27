import React from 'react';
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'

import Button from './Button';

function App() {
  const renderer = createRenderer()

  return (
    <Provider renderer={renderer}>
      <Button />
    </Provider>
  );
}

export default App;
