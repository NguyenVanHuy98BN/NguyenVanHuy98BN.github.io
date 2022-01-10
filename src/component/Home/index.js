import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import { Grid, InputAdornment, OutlinedInput } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { Select } from 'antd';

const { Option } = Select;

const useStyles = makeStyles((theme) => ({
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
}));

function Home(props) {
  const classes = useStyles();
  // const [user] = useGlobal('user');
  const [info] = useGlobal('info');
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
  const history = useHistory();

  const handleChange = (value) => {
    setSex(value);
    // console.log(`selected ${value}`);
  };

  const updateUser = () => {
    const user = {
      age: age,
      height: height,
      weight: weight,
      sex: sex,
      glucose: glucose,
      hbA1c: hbA1c,
      bilirubinTT: bilirubinTT,
      bilirubinTP: bilirubinTP,
      ast: ast,
      alt: alt,
      alp: alp,
      albumin: albumin,
      ure: ure,
      creatinin: creatinin,
      acid: acid
    }
    info.push(user)
    history.push('/account');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: 30, marginTop: 50, marginBottom: 50 }}>Cập nhật thông tin Cá Nhân</h2>
      <div className={classes.body}>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Tuổi</Typography>
          <TextField value={age}
                     // id="outlined-basic"
                     onChange={event => {
                       setAge(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Chiều cao</Typography>
          <OutlinedInput
            value={height}
            onChange={event => {
              setHeight(event.target.value);
            }}
            endAdornment={<InputAdornment position="end">Cm</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
        </Grid>
      </div>
      <div className={classes.body}>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Giới tính</Typography>
          <Select style={{ width: 120 }} onChange={handleChange}>
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
            <Option value="different">Khác</Option>
          </Select>
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Cân nặng</Typography>
          <OutlinedInput
            value={weight}
            onChange={event => {
              setWeight(event.target.value);
            }}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
        </Grid>
      </div>
        <h3 style={{textAlign: 'center', fontSize: 22, marginTop: 40}}>Chỉ số sinh hóa</h3>
      <div className={classes.body}>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Glucose</Typography>
          <TextField value={glucose}
                     onChange={event => {
                       setGlucose(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>HbA1c</Typography>
          <TextField value={hbA1c}
                     onChange={event => {
                       setHbA1c(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Bilirubin TT</Typography>
          <TextField value={bilirubinTT}
                     onChange={event => {
                       setBilirubinTT(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </div>
      <div className={classes.body}>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Bilirubin TP</Typography>
          <TextField value={bilirubinTP}
                     onChange={event => {
                       setBilirubinTP(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>AST</Typography>
          <TextField value={ast}
                     onChange={event => {
                       setAst(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>ALT</Typography>
          <TextField value={alt}
                     onChange={event => {
                       setAlt(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </div>
      <div className={classes.body}>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Albumin</Typography>
          <TextField value={albumin}
                     onChange={event => {
                       setAlbumin(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>ALP</Typography>
          <TextField value={alp}
                     onChange={event => {
                       setAlp(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>URE</Typography>
          <TextField value={ure}
                     onChange={event => {
                       setUre(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </div>
      <div className={classes.body}>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>CREATININ</Typography>
          <TextField value={creatinin}
                     onChange={event => {
                       setCreatinin(event.target.value);
                     }} variant="outlined" />
        </Grid>
        <Grid container wrap="nowrap">
          <Typography style={{ width: 120 }}>Acid Uric</Typography>
          <TextField value={acid}
                     onChange={event => {
                       setAcid(event.target.value);
                     }} variant="outlined" />
        </Grid>
      </div>
      <div style={{ display: 'flex', margin: '5% 10% 0 65%' }}>

        {/*{*/}
        {/*  glucose == null || hbA1c == null || bilirubinTP == null || bilirubinTT == null || ast == null || alt == null || alp == null || albumin == null || ure == null || creatinin == null || acid == null ?*/}
        {/*    <Button variant={'contained'} disabled>*/}
        {/*      Xác Nhận*/}
        {/*    </Button>*/}
        {/*    :*/}
        {/*    <Button variant={'contained'} color="primary" onClick={updateUser}>*/}
        {/*      Xác Nhận*/}
        {/*    </Button>*/}
        {/*}*/}
        <Button variant={'contained'} color="primary" onClick={updateUser}>
          Xác Nhận
        </Button>
      </div>
    </div>
  );
}

export default Home;