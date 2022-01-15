import { addCallback, setGlobal } from 'reactn';

addCallback(global => {
  console.log({ global });
});

setGlobal({
  user: {},
  info: [],
  data:null,
  adviceList:[],
  creatinin: null
});