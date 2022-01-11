import React, { useEffect, useState } from 'react';
import { setGlobal, useGlobal } from 'reactn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Select } from 'antd';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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
  {
    question: 'Trong gia đình có người bị mắc bệnh tiểu đường',
    answer: '',
  },
  {
    question: 'Có được chẩn đoán tiểu đường tuýp 1, 2 trước đó(đối với có thai)',
    answer: '',
  },
  {
    question: 'Triệu chứng 4 nhiều: ăn nhiều, khát nhiều, gầy nhiều, tiểu nhiều',
    answer: '',
  },
];

const liverFailure = [
  {
    question: 'Uống nhiều rượu: Nữ >140g/tuần && Nam >210g/tuần',
    answer: '',
  },
];

const hemolysis = [];

const jaundice = [];

const CKD = [
  {
    question: 'Đi tiểu nhiều lần với lượng rất nhỏ',
    answer: '',
  },
  {
    question: 'Tiểu rát, tiểu rắt, tiểu đêm',
    answer: '',
  },
  {
    question: 'Đau hông, thắt lưng',
    answer: '',
  },
  {
    question: 'Mệt mỏi, chán ăn, buồn nôn',
    answer: '',
  },
  {
    question: 'Nước tiểu có máu, màu vàng rất sẫm',
    answer: '',
  },
  {
    question: 'Vận động nhiều trước khi xét nghiệm',
    answer: '',
  },
  {
    question: 'Chế độ dinh dưỡng hàng ngày chứa nhiều protein',
    answer: '',
  },
  {
    question: 'Huyết áp cao',
    answer: '',
  },
];

const KidneyStones = [
  {
    question: 'Sưng phù chân/tay/mặt',
    answer: '',
  },
  {
    question: 'Mệt mỏi, chán ăn, buồn nôn',
    answer: '',
  },
  {
    question: 'Ngứa, phát ban ở da',
    answer: '',
  },
  {
    question: 'Đau hông, thắt lưng',
    answer: '',
  },
  {
    question: 'Tiểu rát, tiểu rắt, tiểu đêm',
    answer: '',
  },
  {
    question: 'Đi tiểu nhiều lần với lượng rất nhỏ',
    answer: '',
  },
];

const Gout = [
  {
    question: 'Đau khớp về đêm',
    answer: '',
  },
  {
    question: 'Sưng đỏ khớp',
    answer: '',
  },
  {
    question: 'Cơn đau khớp bàn ngón đầu tiên(Điển hình)',
    answer: '',
  },
  {
    question: 'Đau 1 khớp',
    answer: '',
  },
];

const cholestasis = [];


function Account(props) {
  const [info] = useGlobal('info');
  const [data, setData] = useGlobal('data');
  const [user] = useGlobal('user');
  console.log(data);
  // console.log('info', info);
  const classes = useStyles();
  const [check, setCheck] = useState('');
  const history = useHistory();
  const [listCKD, setListCKD] = useState(CKD);
  const [listDIA, setListDIA] = useState(diabetes);
  const [listLIV, setListLIV] = useState(liverFailure);
  const [listHEM, setListHEM] = useState(hemolysis);
  const [listJAU, setListJAU] = useState(jaundice);
  const [listKID, setListKID] = useState(KidneyStones);
  const [listGOUT, setListGOUT] = useState(Gout);
  const [listCHO, setListCHO] = useState(cholestasis);
  const [loading, setLoading] = useState(false);
  const goHome = () => {
    history.push('/');
  };

  const updateUser = async () => {
    // console.log('CKD', listCKD);
    try {
      setLoading(true);
      const dataPost = {
        'name': '',
        'age': user.age,
        'gender': user.gender,
        'pregnant': user.pregnant,
        'weight': user.weight,
        'height': user.height,
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

  const handleOptionChangeCKD = (index) => (changeEvent) => {
    listCKD[index].answer = changeEvent.target.value;
    setListCKD([...listCKD]);
  };
  const handleOptionChangeDIA = (index) => (changeEvent) => {
    listDIA[index].answer = changeEvent.target.value;
    setListDIA([...listDIA]);
  };
  const handleOptionChangeLIV = (index) => (changeEvent) => {
    listLIV[index].answer = changeEvent.target.value;
    setListLIV([...listLIV]);
  };
  const handleOptionChangeHEM = (index) => (changeEvent) => {
    listHEM[index].answer = changeEvent.target.value;
    setListHEM([...listHEM]);
  };
  const handleOptionChangeJAU = (index) => (changeEvent) => {
    listJAU[index].answer = changeEvent.target.value;
    setListJAU([...listJAU]);
  };
  const handleOptionChangeKID = (index) => (changeEvent) => {
    listKID[index].answer = changeEvent.target.value;
    setListKID([...listKID]);
  };
  const handleOptionChangeGOUT = (index) => (changeEvent) => {
    listGOUT[index].answer = changeEvent.target.value;
    setListGOUT([...listGOUT]);
  };
  const handleOptionChangeCHO = (index) => (changeEvent) => {
    listCHO[index].answer = changeEvent.target.value;
    setListCHO([...listCHO]);
  };

  useEffect(() => {
    if (!data) {
      alert('quay ve trang chu va dien thong tin');
      history.push('/');
    }
  }, [data]);

  const onAnswer = (index) => event => {
    console.log(index, event.target.value);
    data.questionList[index] = { ...data.questionList[index], answer: event.target.value };
    setData({ ...data });
  };
  if (!data)
    return null;
  return (
    <div style={{ backgroundColor: '#f5f5f5', margin: 50 }}>
      {
        data.pathologyList?.length ?
          <Typography>{data.pathologyList[0]?.name}</Typography>
          :
          null
      }

      <Typography style={{
        textAlign: 'center',
        fontSize: 25, marginBottom: 20,
      }}
      >Vui lòng trả lời những câu hỏi dưới đây để giúp chúng
        tôi chẩn đoán chính xác tình trạng của bạn</Typography>
      {
        data.questionList?.length ?
          data.questionList.map((item, index) => {
            return (
              <div key={index}>
                <Typography style={{ fontSize: 25 }}>Câu {index + 1}: {item.content}</Typography>
                <form style={{ fontSize: 20 }}>
                  <div className="radio">
                    <label>
                      <input type="radio" value="yes"
                             checked={item.answer === 'yes'}
                             onChange={onAnswer(index)} />
                      Có
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="no"
                             checked={item.answer === 'no'}
                             onChange={onAnswer(index)} />
                      Không
                    </label>
                  </div>
                </form>
              </div>
            );
          })
          :
          null
      }
      {/*{*/}
      {/*  check == 'diabetes' ?*/}
      {/*    <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*      {*/}
      {/*        listDIA.map((c, i) => (*/}
      {/*          <div key={i}>*/}
      {/*            <Typography style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*            <form style={{ fontSize: 20 }}>*/}
      {/*              <div className="radio">*/}
      {/*                <label>*/}
      {/*                  <input type="radio" value="yes"*/}
      {/*                         checked={c.answer === 'yes'}*/}
      {/*                         onChange={handleOptionChangeDIA(i)} />*/}
      {/*                  Có*/}
      {/*                </label>*/}
      {/*              </div>*/}
      {/*              <div className="radio">*/}
      {/*                <label>*/}
      {/*                  <input type="radio" value="no"*/}
      {/*                         checked={c.answer === 'no'}*/}
      {/*                         onChange={handleOptionChangeDIA(i)} />*/}
      {/*                  Không*/}
      {/*                </label>*/}
      {/*              </div>*/}
      {/*            </form>*/}
      {/*          </div>*/}
      {/*        ))*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*    :*/}
      {/*    <div>*/}
      {/*      {*/}
      {/*        check == 'liverFailure' ?*/}
      {/*          <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*            {*/}
      {/*              listLIV.map((c, i) => (*/}
      {/*                <div key={i}>*/}
      {/*                  <Typography style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                  <form style={{ fontSize: 20 }}>*/}
      {/*                    <div className="radio">*/}
      {/*                      <label>*/}
      {/*                        <input type="radio" value="yes"*/}
      {/*                               checked={c.answer === 'yes'}*/}
      {/*                               onChange={handleOptionChangeLIV(i)} />*/}
      {/*                        Có*/}
      {/*                      </label>*/}
      {/*                    </div>*/}
      {/*                    <div className="radio">*/}
      {/*                      <label>*/}
      {/*                        <input type="radio" value="no"*/}
      {/*                               checked={c.answer === 'no'}*/}
      {/*                               onChange={handleOptionChangeLIV(i)} />*/}
      {/*                        Không*/}
      {/*                      </label>*/}
      {/*                    </div>*/}
      {/*                  </form>*/}
      {/*                </div>*/}
      {/*              ))*/}
      {/*            }*/}
      {/*          </div>*/}
      {/*          :*/}
      {/*          <div>*/}
      {/*            {*/}
      {/*              check == 'hemolysis' ?*/}
      {/*                <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*                  {*/}
      {/*                    listHEM.map((c, i) => (*/}
      {/*                      <div key={i}>*/}
      {/*                        <Typography style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                        <form style={{ fontSize: 20 }}>*/}
      {/*                          <div className="radio">*/}
      {/*                            <label>*/}
      {/*                              <input type="radio" value="yes"*/}
      {/*                                     checked={c.answer === 'yes'}*/}
      {/*                                     onChange={handleOptionChangeHEM(i)} />*/}
      {/*                              Có*/}
      {/*                            </label>*/}
      {/*                          </div>*/}
      {/*                          <div className="radio">*/}
      {/*                            <label>*/}
      {/*                              <input type="radio" value="no"*/}
      {/*                                     checked={c.answer === 'no'}*/}
      {/*                                     onChange={handleOptionChangeHEM(i)} />*/}
      {/*                              Không*/}
      {/*                            </label>*/}
      {/*                          </div>*/}
      {/*                        </form>*/}
      {/*                      </div>*/}
      {/*                    ))*/}
      {/*                  }*/}
      {/*                </div>*/}
      {/*                :*/}
      {/*                <div>*/}
      {/*                  {*/}
      {/*                    check == 'jaundice' ?*/}
      {/*                      <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*                        {*/}
      {/*                          listJAU.map((c, i) => (*/}
      {/*                            <div key={i}>*/}
      {/*                              <Typography style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                              <form style={{ fontSize: 20 }}>*/}
      {/*                                <div className="radio">*/}
      {/*                                  <label>*/}
      {/*                                    <input type="radio" value="yes"*/}
      {/*                                           checked={c.answer === 'yes'}*/}
      {/*                                           onChange={handleOptionChangeJAU(i)} />*/}
      {/*                                    Có*/}
      {/*                                  </label>*/}
      {/*                                </div>*/}
      {/*                                <div className="radio">*/}
      {/*                                  <label>*/}
      {/*                                    <input type="radio" value="no"*/}
      {/*                                           checked={c.answer === 'no'}*/}
      {/*                                           onChange={handleOptionChangeJAU(i)} />*/}
      {/*                                    Không*/}
      {/*                                  </label>*/}
      {/*                                </div>*/}
      {/*                              </form>*/}
      {/*                            </div>*/}
      {/*                          ))*/}
      {/*                        }*/}
      {/*                      </div>*/}
      {/*                      :*/}
      {/*                      <div>*/}
      {/*                        {*/}
      {/*                          check == 'CKD' ?*/}
      {/*                            <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*                              {*/}
      {/*                                listCKD.map((c, i) => (*/}
      {/*                                  <div key={i}>*/}
      {/*                                    <Typography style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                                    <form style={{ fontSize: 20 }}>*/}
      {/*                                      <div className="radio">*/}
      {/*                                        <label>*/}
      {/*                                          <input type="radio" value="yes"*/}
      {/*                                                 checked={c.answer === 'yes'}*/}
      {/*                                                 onChange={handleOptionChangeCKD(i)} />*/}
      {/*                                          Có*/}
      {/*                                        </label>*/}
      {/*                                      </div>*/}
      {/*                                      <div className="radio">*/}
      {/*                                        <label>*/}
      {/*                                          <input type="radio" value="no"*/}
      {/*                                                 checked={c.answer === 'no'}*/}
      {/*                                                 onChange={handleOptionChangeCKD(i)} />*/}
      {/*                                          Không*/}
      {/*                                        </label>*/}
      {/*                                      </div>*/}
      {/*                                    </form>*/}
      {/*                                  </div>*/}
      {/*                                ))*/}
      {/*                              }*/}
      {/*                            </div>*/}
      {/*                            :*/}
      {/*                            <div>*/}
      {/*                              {*/}
      {/*                                check == 'KidneyStones' ?*/}
      {/*                                  <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*                                    {*/}
      {/*                                      listKID.map((c, i) => (*/}
      {/*                                        <div key={i}>*/}
      {/*                                          <Typography*/}
      {/*                                            style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                                          <form style={{ fontSize: 20 }}>*/}
      {/*                                            <div className="radio">*/}
      {/*                                              <label>*/}
      {/*                                                <input type="radio" value="yes"*/}
      {/*                                                       checked={c.answer === 'yes'}*/}
      {/*                                                       onChange={handleOptionChangeKID(i)} />*/}
      {/*                                                Có*/}
      {/*                                              </label>*/}
      {/*                                            </div>*/}
      {/*                                            <div className="radio">*/}
      {/*                                              <label>*/}
      {/*                                                <input type="radio" value="no"*/}
      {/*                                                       checked={c.answer === 'no'}*/}
      {/*                                                       onChange={handleOptionChangeKID(i)} />*/}
      {/*                                                Không*/}
      {/*                                              </label>*/}
      {/*                                            </div>*/}
      {/*                                          </form>*/}
      {/*                                        </div>*/}
      {/*                                      ))*/}
      {/*                                    }*/}
      {/*                                  </div>*/}
      {/*                                  :*/}
      {/*                                  <div>*/}
      {/*                                    {*/}
      {/*                                      check == 'cholestasis' ?*/}
      {/*                                        <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*                                          {*/}
      {/*                                            listCHO.map((c, i) => (*/}
      {/*                                              <div key={i}>*/}
      {/*                                                <Typography*/}
      {/*                                                  style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                                                <form style={{ fontSize: 20 }}>*/}
      {/*                                                  <div className="radio">*/}
      {/*                                                    <label>*/}
      {/*                                                      <input type="radio" value="yes"*/}
      {/*                                                             checked={c.answer === 'yes'}*/}
      {/*                                                             onChange={handleOptionChangeCHO(i)} />*/}
      {/*                                                      Có*/}
      {/*                                                    </label>*/}
      {/*                                                  </div>*/}
      {/*                                                  <div className="radio">*/}
      {/*                                                    <label>*/}
      {/*                                                      <input type="radio" value="no"*/}
      {/*                                                             checked={c.answer === 'no'}*/}
      {/*                                                             onChange={handleOptionChangeCHO(i)} />*/}
      {/*                                                      Không*/}
      {/*                                                    </label>*/}
      {/*                                                  </div>*/}
      {/*                                                </form>*/}
      {/*                                              </div>*/}
      {/*                                            ))*/}
      {/*                                          }*/}
      {/*                                        </div>*/}
      {/*                                        :*/}
      {/*                                        <div style={{ width: '60%', margin: 'auto' }}>*/}
      {/*                                          {*/}
      {/*                                            listGOUT.map((c, i) => (*/}
      {/*                                              <div key={i}>*/}
      {/*                                                <Typography*/}
      {/*                                                  style={{ fontSize: 25 }}>Câu {i + 1}: {c.question}</Typography>*/}
      {/*                                                <form style={{ fontSize: 20 }}>*/}
      {/*                                                  <div className="radio">*/}
      {/*                                                    <label>*/}
      {/*                                                      <input type="radio" value="yes"*/}
      {/*                                                             checked={c.answer === 'yes'}*/}
      {/*                                                             onChange={handleOptionChangeGOUT(i)} />*/}
      {/*                                                      Có*/}
      {/*                                                    </label>*/}
      {/*                                                  </div>*/}
      {/*                                                  <div className="radio">*/}
      {/*                                                    <label>*/}
      {/*                                                      <input type="radio" value="no"*/}
      {/*                                                             checked={c.answer === 'no'}*/}
      {/*                                                             onChange={handleOptionChangeGOUT(i)} />*/}
      {/*                                                      Không*/}
      {/*                                                    </label>*/}
      {/*                                                  </div>*/}
      {/*                                                </form>*/}
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
      <div style={{ display: 'flex', margin: '5% 10% 0 65%' }}>
        <Button color="secondary" onClick={goHome}>
          Hủy
        </Button>
        <Button color="primary" onClick={updateUser}
                disabled={loading || !data.questionList?.length}
        >
          Cập Nhật
        </Button>
      </div>
    </div>
  );
}

export default Account;