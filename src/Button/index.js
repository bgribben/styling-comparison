import React, { useState } from 'react';
import { createComponent } from 'react-fela';
import Indicator from './Indicator';
import * as styles from './styles';

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

export default () => {
  const [clicked, setClicked] = useState();
  const allowIndicators = true;

  // I started rewriting this using the FelaComponent component
  // which I thought would deliver the same functionality as 
  // styled-components and get rid of the containers
  // however it looks like it doesn't pass through
  // all props to the element it ultimately renders, so the onClick
  // handler here doesn't work - something that didn't (but now does)
  // work in styled-components
  
  // return (
  //   <FelaComponent as='button' style={styles.button} clicked={clicked} onClick={() => setClicked(!clicked)}>
  //     I'm a button
  //     <Indicator enabled={allowIndicators && clicked} styles={styles} />
  //   </FelaComponent>
  // )

  // The alternative is this
  const Button = createComponent(styles.button, 'button', ['onClick']);

  return(
    <Button clicked={clicked} onClick={() => setClicked(!clicked)}>
      I'm a button
      <Indicator enabled={allowIndicators && clicked} styles={styles} />
    </Button>
  )
};