import React from 'react';

export default ({ styles, clicked, setClicked }) => {
  // Ideally we would handle state within this component
  // and derive styling from that. However due to the way we
  // use fela to connect components to props we must manage this
  // state in the parent component, creating a top-heavy hierarchy
  return (
    <button className={styles.button} onClick={() => setClicked(!clicked)}>I'm a button</button>
  )
};