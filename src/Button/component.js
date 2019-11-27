import React from 'react';
import Indicator from './Indicator';

// Trying to style simple nested components with
// some derived styling exacerbates the problem
// in that they must live in their own connected 
// container with separate styles, including the 
// boilerplate that comes with that
// const Indicator = ({ styles }) => {
//   return (
//     <div className={styles.indicator} />
//   )
// };

export default ({ styles, clicked, setClicked }) => {
  // Ideally we would handle state within this component
  // and derive styling from that. However due to the way we
  // use fela to connect components to props we must manage this
  // state in the parent component, creating a top-heavy hierarchy
  const allowIndicators = true;
  return (
    <button className={styles.button} onClick={() => setClicked(!clicked)}>
      I'm a button
      <Indicator enabled={allowIndicators && clicked} styles={styles} />
    </button>
  )
};