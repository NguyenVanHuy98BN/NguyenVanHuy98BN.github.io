import React, { useState } from 'react';
import { useGlobal, setGlobal } from 'reactn';

import { Grid, InputAdornment, OutlinedInput } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Select } from 'antd';
import axios from 'axios'
const { Option } = Select;

const useStyles = makeStyles((theme) => ({
  root:{
    "& .MuiOutlinedInput-input":{
      padding:10
    }
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#f3e5f5',
  },
  body: {
    width: '70%',
    display: 'flex',
    margin: '20px auto',
  },
  gridItem:{
    display:'flex',
    alignItems:'center'
  },
  actions:{
    display:'flex',
    justifyContent:'center',
    marginTop:20
  }
}));

const testData = {
  'pathologyList': [
    {
      'id': 'PATHOLOGY001',
      'name': 'Tiền tiểu đường',
      'decription': 'Chắc chắn',
    },
  ],
  'questionList': [
    {
      'id': 'QUESTION002',
      'pathologyId': 'PATHOLOGY001, PATHOLOGY002, PATHOLOGY003, PATHOLOGY004',
      'content': 'Trong gia đình có người bị bệnh tiểu đường',
    },
    {
      'id': 'QUESTION003',
      'pathologyId': 'PATHOLOGY001, PATHOLOGY002, PATHOLOGY003, PATHOLOGY004',
      'content': 'Triệu chứng 4 nhiều: ăn nhiều, khát nhiều, gầy nhiều, tiểu nhiều',
    },
  ],
};
function Home(props) {
  const classes = useStyles();

  const [info] = useGlobal('info');
  const [name, setName] = useState("")
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [sex, setSex] = useState(null);
  const [glucose, setGlucose] = useState(null);
  const [hbA1c, setHbA1c] = useState(null);
  const [bilirubinTT, setBilirubinTT] = useState(null);
  const [bilirubinTP, setBilirubinTP] = useState(null);
  const [ast, setAst] = useState(null);
  const [alt, setAlt] = useState(null);
  const [alp, setAlp] = useState(null);
  const [albumin, setAlbumin] = useState(null);
  const [ure, setUre] = useState(null);
  const [creatinin, setCreatinin] = useState(null);
  const [acid, setAcid] = useState(null);
  const [pregnant, setPregnant] = useState(false);
  const [loading ,setLoading] = useState(false)
  // const [userInfo, setUserInfo] = useState( [
  //   {label :"", value: null, type: 'number',id:'age'},
  //   {label :"", value: null,type: 'number',id:'height'},
  //   {label :"", value: null,type: 'number',id:'weight'},
  //   {label :"", value: null, type :'select', id:'sex',options:[{value:'male', label:'nam'},{value:'female', label:'nữ'}]},
  //   {label :"", value: null,type :'select',id:'pregnant', options:[{value: true, label:'có'},{value:false, label:'không'}],condition:{sex:"female"}}
  // ])
  //
  const history = useHistory();

  const handleChange = (value) => {
    setSex(value);
    // console.log(`selected ${value}`);
  };
  const parsedFloat = (value = '1') =>{
    return parseFloat(value).toFixed(1)
  }
  const updateUser = async () => {
    const user = {
      name:name,
      age: Number(age || 0),
      height: Number(height || 0),
      weight: Number(weight || 0),
      pregnant:pregnant,
      gender: sex,
      glucose: parsedFloat(glucose ),
      hba1c: parsedFloat(hbA1c),
      bilirubinTT:parsedFloat(bilirubinTT ) ,
      bilirubinTP: parsedFloat(bilirubinTP),
      ast: parsedFloat(ast),
      alt: parsedFloat(alt),
      alp: parsedFloat(alp),
      albumin: parsedFloat(albumin),
      ure: parsedFloat(ure),
      creatinin: parsedFloat(creatinin),
      acidUric: parsedFloat(acid)
    }

    try{
      setLoading(true)

      const { data } = await axios.post('http://localhost:8080/blood-biochemistry-test/first-process',user)
      setGlobal({
        data: data,
        user
      })

      // info.push(user)
      history.push('/account');
    }catch (e){
      console.log(e);
    }finally {
      setLoading(false)
    }

  };

  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: 'center', fontSize: 30, marginTop: 50, marginBottom: 50 }}>Thông tin cá nhân</h2>
      <Grid container className={classes.body} spacing={2}>
        <Grid item xs={12} wrap="nowrap" className={classes.gridItem}>
          <Typography style={{ width: 120 }}>Họ và tên</Typography>
          <TextField value={name}
                     type="text"
                     onChange={event => {
                       setName(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} wrap="nowrap" className={classes.gridItem}>
          <Typography style={{ width: 120 }}>Tuổi</Typography>
          <TextField value={age}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setAge(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} wrap="nowrap" className={classes.gridItem}>
          <Typography style={{ width: 120 }}>Chiều cao</Typography>
          <OutlinedInput
            // label={'Chiều cao'}
            value={height}
            type="number"
            inputProps={{
              min:0
            }}
            onChange={event => {
              setHeight(event.target.value);
            }}
            endAdornment={<InputAdornment position="end">Cm</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
        </Grid>
        <Grid item xs={12} sm={6} wrap="nowrap" className={classes.gridItem}>
          <Typography style={{ width: 120 }}>Giới tính</Typography>
          <Select style={{ width: 120 }} value={sex} onChange={(value) =>{
            if(value === 'male'){
              setPregnant(false)
            }
            setSex(value)
          }}>
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
          </Select>
        </Grid>


        <Grid item xs={12} sm={6} wrap="nowrap" className={classes.gridItem}>
          <Typography style={{ width: 120 }}>Cân nặng</Typography>
          <OutlinedInput
            type="number"
            inputProps={{
              min:0
            }}
            value={weight}
            onChange={event => {
              setWeight(event.target.value);
            }}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
        </Grid>
      </Grid>

      <div className={classes.body}>
        {
          sex === 'female' &&
          <Grid container wrap="nowrap" className={classes.gridItem}>
            <Typography style={{ width: 120 }}>Bạn có mang thai không ?</Typography>
            <Select style={{ width: 120 }} value={pregnant} onChange={(value) =>setPregnant(value)}>
              <Option value={true}> Có</Option>
              <Option value={false}>Không</Option>
            </Select>
          </Grid>
        }
      </div>
      <h3 style={{ textAlign: 'center', fontSize: 22, marginTop: 40 }}>Chỉ số sinh hóa</h3>
      <Grid container className={classes.body} spacing={2}>
        <Grid item xs={12} sm={4}  >
          <Typography style={{ width: 120 }}>Glucose</Typography>
          <TextField value={glucose}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setGlucose(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4} >
          <Typography style={{ width: 120 }}>HbA1c</Typography>
          <TextField value={hbA1c}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setHbA1c(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4} >
          <Typography style={{ width: 120 }}>Bilirubin TT</Typography>
          <TextField value={bilirubinTT}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setBilirubinTT(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </Grid>
      <Grid container className={classes.body} spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>Bilirubin TP</Typography>
          <TextField value={bilirubinTP}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setBilirubinTP(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4} spacing={2}>
          <Typography style={{ width: 120 }}>AST</Typography>
          <TextField value={ast}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setAst(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>ALT</Typography>
          <TextField value={alt}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setAlt(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </Grid>
      <Grid container className={classes.body} spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>Albumin</Typography>
          <TextField value={albumin}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setAlbumin(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>ALP</Typography>
          <TextField value={alp}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setAlp(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>URE</Typography>
          <TextField value={ure}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setUre(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </Grid>
      <Grid container className={classes.body} spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>CREATININ</Typography>
          <TextField value={creatinin}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setCreatinin(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ width: 120 }}>Acid Uric</Typography>
          <TextField value={acid}
                     type="number"
                     inputProps={{
                       min:0
                     }}
                     onChange={event => {
                       setAcid(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </Grid>
      <div className={classes.actions}>
        <Button variant={'contained'} color="primary" onClick={updateUser}
                disabled={loading}
        >
          Xác Nhận
        </Button>
      </div>
    </div>
  );
}

export default Home;