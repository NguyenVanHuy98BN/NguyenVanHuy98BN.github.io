import React, { useEffect, useState } from 'react';
import { setGlobal, useGlobal } from 'reactn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#f3e5f5',
  },
  name:{
    fontSize:15,
    fontWeight:700
  },
  title:{
    fontSize:25,
    fontWeight:700,
    textAlign:'center',
    paddingTop:30
  },
  descr:{
    fontSize:13,
    fontWeight: 'normal',
    paddingLeft:20
  },
  questionList:{
    marginTop:20
  },
  question:{
    color:"red"
  },
  radio:{
    marginRight:20
  },
  label:{
    display:'flex',
    alignItems:'center',
    margin:10
  }
}));


function Account(props) {
  const [data, setData] = useGlobal('data');
  const [user] = useGlobal('user');
  const [creatinin] = useGlobal('creatinin');
  const history = useHistory();
  const classes = useStyles()
  const [loading, setLoading] = useState(false);
  const goHome = () => {
    history.push('/');
  };

  const updateUser = async () => {
    try {
      setLoading(true);
      const dataPost = {
        'name': user.name,
        'age': user.age,
        'gender': user.gender,
        'pregnant': user.pregnant,
        'weight': user.weight,
        'height': user.height,
        'creatinin': creatinin,
        'pathologyList': data.pathologyList.map(item => ({ id: item.id })),
        'questionSecondProcesses': data.questionList.map(item => ({ id: item.id, result: item.answer === 'yes' })),
      };
      const response = await axios.post('http://localhost:8080/blood-biochemistry-test/second-process', dataPost);
      setGlobal({
        adviceList: response.data.adviceList
      })
      history.push('/contact');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }

  };


  useEffect(() => {
    if (!data) {
      alert('M???i b???n quay v??? m??n h??nh trang ch??? ????? nh???p th??ng tin!');
      history.push('/');
    }
  }, [data]);

  const isNormal = () => {
    return data.pathologyList?.length && data.pathologyList[0]?.id === 'PATHOLOGY000'
  }


  const isError = () => {
    return data.pathologyList?.length && data.pathologyList[0]?.id === 'PATHOLOGY999' || !data.pathologyList?.length
  }

  const onAnswer = (index) => event => {
    data.questionList[index] = { ...data.questionList[index], answer: event.target.value };
    setData({ ...data });
  };
  if (!data)
    return null;
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: 50 }}>
      {
        !isError() && !isNormal() && data.pathologyList?.length ?
          <>
            <p className={classes.title}>Ch???n ??o??n s?? b??? v??? b???nh :</p>
            {
              data.pathologyList.map((item,index ) =>(
                <div key={item.id}>
                  <Typography className={classes.name}>{index +1}.{item?.name}</Typography>
                  <Typography className={classes.descr}>{item?.decription}</Typography>
                </div>
              ))
            }
          </>

          :
          null
      }


      <Typography style={{
        textAlign: 'left',
        fontSize: 20, marginTop: 20,
      }}
      >
        {(isNormal() || isError() )? data.pathologyList[0]?.decription
            :
            "Vui l??ng tr??? l???i nh???ng c??u h???i d?????i ????y ????? gi??p ch??ng t??i ch???n ??o??n ch??nh x??c t??nh tr???ng c???a b???n:"

        }

      </Typography>
      <div className={classes.questionList}>
        {
          !isError() && !isNormal() && data.questionList?.length ?
            data.questionList.map((item, index) => {
              return (
                <div key={index}>
                  <Typography style={{ fontSize: 18 }}> <span className={classes.question}>C??u {index + 1} </span>: {item.content}</Typography>
                  <form style={{ fontSize: 15 }}>
                    <div className="radio">
                      <label className={classes.label}>
                        <input type="radio" value="yes"
                               checked={item.answer === 'yes'}
                               className={classes.radio}
                               onChange={onAnswer(index)} />
                        C??
                      </label>
                    </div>
                    <div className="radio">
                      <label className={classes.label}>
                        <input type="radio" value="no"
                               checked={item.answer === 'no'}
                               className={classes.radio}
                               onChange={onAnswer(index)} />
                        Kh??ng
                      </label>
                    </div>
                  </form>
                </div>
              );
            })
            :
            null
        }
      </div>

      <div style={{ display: 'flex', margin: '5% 10% 0 65%' }}>
        <Button color="secondary" onClick={goHome}>
          H???y
        </Button>
        {
          (!isNormal() && !isError()) &&
          <Button color="primary" onClick={updateUser}
                  disabled={loading}
          >
            C???p Nh???t
          </Button>
        }

      </div>
    </div>
  );
}

export default Account;