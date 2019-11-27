import React from 'react';
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'

import Button from './Button';

const renderer = createRenderer()

function App() {

  return (
    <Provider renderer={renderer}>
      <Button />
    </Provider>
  );
}

export default App;
