import styled from 'styled-components';

// And we get to write actual CSS
export const StyledButton = styled.button`
  background: ${p => p.clicked ? 'papayawhip' : 'palevioletred'};
  outline: 0;
  border: 0;
  padding: 15px;
  border-radius: 5px;
  margin: 15px;
  cursor: pointer;
  position: relative;
  align-items: center;
  display: flex;
  :hover {
    color: ${p => p.clicked ? 'black' : 'white'};
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
  }
`;

export const StyledIndicator = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  background: ${p => p.enabled ? 'palegreen' : 'firebrick'};
`;