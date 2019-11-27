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
    ':hover': {
      color: clicked ? 'black' : 'white',
      boxShadow: '0px 2px 2px rgba(0,0,0,0.2)',
    },
  })
};