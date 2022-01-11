import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Select } from 'antd';
import TextField from '@material-ui/core/TextField';

const { Option } = Select;

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#f3e5f5',
  },
}));

const diabetes = [
  'Bạn nên đi xét nghiệm lượt 2 về chỉ số đường huyết đói và HbA1C trong 1-7 ngày' +
  ' sau đó để đánh giá chính xác và hướng điều trị bệnh',
];

const LiverFailure = [
  'Ngưng sử dụng rượu, chất kích thích có cồn',
  'Xét nghiệm chức năng gan'
]

const hemolysis = [

]

const jaundice = [

]

const CKD = [
  'Tổng phân tích nước tiểu',
  'Siêu âm bụng',
  'Chụp X quang'
]

const KidneyStones = [
  'Tổng phân tích nước tiểu',
  'Siêu âm bụng',
  'Chụp X quang'
]

const Gout = [
  'Xét nghiệm dịch khớp',
  'Chụp X quang'
]

const cholestasis = [

]

function Account(props) {
  const classes = useStyles();
  const [user] = useGlobal('user');
  const [adviceList] = useGlobal('adviceList');
  const [check, setCheck] = useState('')
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState("")

  const goHome = () => {
    history.push('/');
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const updateUser = () => {

  };

  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value)
    // console.log(selectedOption, "selectedOption")
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', margin: 50 }}>
      {
        adviceList?.length ?
          adviceList.map((item,index) =>(
            <Typography key={index}>{item.content}</Typography>
          ))
          :
          <Typography>Khong co loi khuyen nao</Typography>
      }
      {/*<TextField value={check}*/}
      {/*  // id="outlined-basic"*/}
      {/*           onChange={event => {*/}
      {/*             setCheck(event.target.value);*/}
      {/*           }} variant="outlined" />*/}
      {/*<Typography style={{textAlign: 'center', fontSize: 25}}>Bạn có thể đang mắc phải bệnh {check}. Bạn nên đi xét nghiệm thêm để có kết quả chính xác</Typography>*/}
      {/*<Typography style={{textAlign: 'center', fontSize: 25}}>Dưới đây là 1 số xét nghiệm cần thiết để bạn tham khảo</Typography>*/}
      {/*{*/}
      {/*  check == 'diabetes' ?*/}
      {/*    <div>*/}
      {/*      {*/}
      {/*        diabetes.map((c, i) => (*/}
      {/*          <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*            <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*          </div>*/}
      {/*        ))*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*    :*/}
      {/*    <div>*/}
      {/*      {*/}
      {/*        check == 'LiverFailure' ?*/}
      {/*          <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*            {*/}
      {/*              LiverFailure.map((c, i) => (*/}
      {/*                <div>*/}
      {/*                  <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                </div>*/}
      {/*              ))*/}
      {/*            }*/}
      {/*          </div>*/}
      {/*          :*/}
      {/*          <div>*/}
      {/*            {*/}
      {/*              check == 'hemolysis' ?*/}
      {/*                <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*                  {*/}
      {/*                    hemolysis.map((c, i) => (*/}
      {/*                      <div>*/}
      {/*                        <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                      </div>*/}
      {/*                    ))*/}
      {/*                  }*/}
      {/*                </div>*/}
      {/*                :*/}
      {/*                <div>*/}
      {/*                  {*/}
      {/*                    check == 'jaundice' ?*/}
      {/*                      <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*                        {*/}
      {/*                          jaundice.map((c, i) => (*/}
      {/*                            <div>*/}
      {/*                              <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                            </div>*/}
      {/*                          ))*/}
      {/*                        }*/}
      {/*                      </div>*/}
      {/*                      :*/}
      {/*                      <div>*/}
      {/*                        {*/}
      {/*                          check == 'KidneyStones' ?*/}
      {/*                            <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*                              {*/}
      {/*                                KidneyStones.map((c, i) => (*/}
      {/*                                  <div>*/}
      {/*                                    <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                                  </div>*/}
      {/*                                ))*/}
      {/*                              }*/}
      {/*                            </div>*/}
      {/*                            :*/}
      {/*                            <div>*/}
      {/*                              {*/}
      {/*                                check == 'CKD' ?*/}
      {/*                                  <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*                                    {*/}
      {/*                                      CKD.map((c, i) => (*/}
      {/*                                        <div>*/}
      {/*                                          <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                                        </div>*/}
      {/*                                      ))*/}
      {/*                                    }*/}
      {/*                                  </div>*/}
      {/*                                  :*/}
      {/*                                  <div>*/}
      {/*                                    {*/}
      {/*                                      check == 'GOUT' ?*/}
      {/*                                        <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*                                          {*/}
      {/*                                            Gout.map((c, i) => (*/}
      {/*                                              <div>*/}
      {/*                                                <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                                              </div>*/}
      {/*                                            ))*/}
      {/*                                          }*/}
      {/*                                        </div>*/}
      {/*                                        :*/}
      {/*                                        <div style={{width: '60%', margin: 'auto'}}>*/}
      {/*                                          {*/}
      {/*                                            cholestasis.map((c, i) => (*/}
      {/*                                              <div>*/}
      {/*                                                <Typography style={{fontSize: 22}}>- {c}</Typography>*/}
      {/*                                              </div>*/}
      {/*                                            ))*/}
      {/*                                          }*/}
      {/*                                        </div>*/}
      {/*                                    }*/}
      {/*                                  </div>*/}
      {/*                              }*/}
      {/*                            </div>*/}
      {/*                        }*/}
      {/*                      </div>*/}
      {/*                  }*/}
      {/*                </div>*/}
      {/*            }*/}
      {/*          </div>*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*}*/}
      <div style={{ display: 'flex', justifyContent:'center'}}>
        <Button color="secondary" onClick={goHome}>
          Quay lại trang chủ
        </Button>
      </div>
    </div>
  );
}

export default Account;