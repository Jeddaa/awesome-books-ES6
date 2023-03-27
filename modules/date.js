import { DateTime } from './luxon.js';
// import { DateTime } from '../node_modules/@types/luxon/index';
const current = () => {
  // let utcDatetime;
  let utcDatetime = DateTime.now().toLocaleString({ month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  console.log(utcDatetime);
  return utcDatetime;
};
export default current;
