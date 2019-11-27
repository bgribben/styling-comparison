import React, { useState } from 'react';

import { StyledButton, StyledIndicator } from './styled';

// Using styled-components to write the exact same 
// functionality is a much cleaner experience.
export default () => {
  // State gets to live where it should
  const [clicked, setClicked] = useState();

  const allowIndicators = true;
  return (
    // And component props are available in the styling
    // declarations without any 'connect' containers
    <StyledButton clicked={clicked} onClick={() => setClicked(!clicked)}>
      I'm a button
      <StyledIndicator enabled={allowIndicators && clicked} />
    </StyledButton>
  )
};