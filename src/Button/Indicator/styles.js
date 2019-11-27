export const indicator = ({ enabled }) => ({
  width: '10px',
  height: '10px',
  marginLeft: '10px',
  background: enabled ? 'palegreen' : 'firebrick',
});