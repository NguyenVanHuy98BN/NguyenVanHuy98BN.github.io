import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#f3e5f5',
  },
}));

function Account(props) {
  const classes = useStyles();
  const [adviceList] = useGlobal('adviceList');
  const [user] = useGlobal('user');
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: 50 }}>
      <Typography style={{fontSize: 22, fontWeight: "bold", paddingTop: 20}}>Hồ sơ bệnh án</Typography>
      <Typography style={{fontSize: 15}}>Họ và tên: {user.name}</Typography>
      <Typography style={{fontSize: 15}}>Tuổi: {user.age}</Typography>
      <Typography style={{fontSize: 15}}>Chiều cao: {user.height} cm</Typography>
      <Typography style={{fontSize: 15}}>Cân nặng: {user.weight} kg</Typography>

      <hr/>

      {
        adviceList?.length ?
          adviceList.map((item,index) =>(
            <Typography key={index}>{item.content}</Typography>
          ))
          :
          <Typography style={{marginTop: 20}}>Mời bạn nhập lại thông tin tại màn hình trang chủ!</Typography>
      }
      <Typography>Chúc bạn luôn mạnh khỏe!!!</Typography>
      <div style={{ display: 'flex', justifyContent:'center'}}>
        <Button color="secondary" onClick={goHome}>
          Quay lại trang chủ
        </Button>
      </div>
    </div>
  );
}

export default Account;