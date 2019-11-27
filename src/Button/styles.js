export const button = ({ clicked }) => {
  return ({
    background: clicked ? 'papayawhip' : 'palevioletred',
    outline: '0',
    border: '0',
    padding: '15px',
    borderRadius: '5px',
    margin: '15px',
    cursor: 'pointer',
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    ':hover': {
      color: clicked ? 'black' : 'white',
      boxShadow: '0px 2px 2px rgba(0,0,0,0.2)',
    },
  })
};

export const indicator = ({ enabled }) => ({
  width: '10px',
  height: '10px',
  marginLeft: '10px',
  background: enabled ? 'palegreen' : 'firebrick',
});