import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
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
  console.log('info', info);
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

  const goHome = () => {
    history.push('/');
  };

  const updateUser = () => {
    console.log("CKD", listCKD)
    history.push('/contact');
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

  return (
    <div style={{ backgroundColor: '#f5f5f5', margin: 50 }}>
      <Typography style={{ textAlign: 'center',
        fontSize: 25, marginBottom: 20 }}
      >Vui lòng trả lời những câu hỏi dưới đây để giúp chúng
        tôi chẩn đoán chính xác tình trạng của bạn</Typography>
      <TextField value={check}
        // id="outlined-basic"
                 onChange={event => {
                   setCheck(event.target.value);
                 }} variant="outlined" />
      {
        check == 'diabetes' ?
          <div style={{width: '60%', margin: 'auto'}}>
            {
              listDIA.map((c, i) => (
                <div key={i}>
                  <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                  <form style={{fontSize: 20}}>
                    <div className="radio">
                      <label>
                        <input type="radio" value="yes"
                               checked={c.answer === 'yes'}
                               onChange={handleOptionChangeDIA(i)} />
                        Có
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="no"
                               checked={c.answer === 'no'}
                               onChange={handleOptionChangeDIA(i)} />
                        Không
                      </label>
                    </div>
                  </form>
                </div>
              ))
            }
          </div>
          :
          <div>
            {
              check == 'liverFailure' ?
                <div style={{width: '60%', margin: 'auto'}}>
                  {
                    listLIV.map((c, i) => (
                      <div key={i}>
                        <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                        <form style={{fontSize: 20}}>
                          <div className="radio">
                            <label>
                              <input type="radio" value="yes"
                                     checked={c.answer === 'yes'}
                                     onChange={handleOptionChangeLIV(i)} />
                              Có
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" value="no"
                                     checked={c.answer === 'no'}
                                     onChange={handleOptionChangeLIV(i)} />
                              Không
                            </label>
                          </div>
                        </form>
                      </div>
                    ))
                  }
                </div>
                :
                <div>
                  {
                    check == 'hemolysis' ?
                      <div style={{width: '60%', margin: 'auto'}}>
                        {
                          listHEM.map((c, i) => (
                            <div key={i}>
                              <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                              <form style={{fontSize: 20}}>
                                <div className="radio">
                                  <label>
                                    <input type="radio" value="yes"
                                           checked={c.answer === 'yes'}
                                           onChange={handleOptionChangeHEM(i)} />
                                    Có
                                  </label>
                                </div>
                                <div className="radio">
                                  <label>
                                    <input type="radio" value="no"
                                           checked={c.answer === 'no'}
                                           onChange={handleOptionChangeHEM(i)} />
                                    Không
                                  </label>
                                </div>
                              </form>
                            </div>
                          ))
                        }
                      </div>
                      :
                      <div>
                        {
                          check == 'jaundice' ?
                            <div style={{width: '60%', margin: 'auto'}}>
                              {
                                listJAU.map((c, i) => (
                                  <div key={i}>
                                    <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                                    <form style={{fontSize: 20}}>
                                      <div className="radio">
                                        <label>
                                          <input type="radio" value="yes"
                                                 checked={c.answer === 'yes'}
                                                 onChange={handleOptionChangeJAU(i)} />
                                          Có
                                        </label>
                                      </div>
                                      <div className="radio">
                                        <label>
                                          <input type="radio" value="no"
                                                 checked={c.answer === 'no'}
                                                 onChange={handleOptionChangeJAU(i)} />
                                          Không
                                        </label>
                                      </div>
                                    </form>
                                  </div>
                                ))
                              }
                            </div>
                            :
                            <div>
                              {
                                check == 'CKD' ?
                                  <div style={{width: '60%', margin: 'auto'}}>
                                    {
                                      listCKD.map((c, i) => (
                                        <div key={i}>
                                          <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                                          <form style={{fontSize: 20}}>
                                            <div className="radio">
                                              <label>
                                                <input type="radio" value="yes"
                                                       checked={c.answer === 'yes'}
                                                       onChange={handleOptionChangeCKD(i)} />
                                                Có
                                              </label>
                                            </div>
                                            <div className="radio">
                                              <label>
                                                <input type="radio" value="no"
                                                       checked={c.answer === 'no'}
                                                       onChange={handleOptionChangeCKD(i)} />
                                                Không
                                              </label>
                                            </div>
                                          </form>
                                        </div>
                                      ))
                                    }
                                  </div>
                                  :
                                  <div>
                                    {
                                      check == 'KidneyStones' ?
                                        <div style={{width: '60%', margin: 'auto'}}>
                                          {
                                            listKID.map((c, i) => (
                                              <div key={i}>
                                                <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                                                <form style={{fontSize: 20}}>
                                                  <div className="radio">
                                                    <label>
                                                      <input type="radio" value="yes"
                                                             checked={c.answer === 'yes'}
                                                             onChange={handleOptionChangeKID(i)} />
                                                      Có
                                                    </label>
                                                  </div>
                                                  <div className="radio">
                                                    <label>
                                                      <input type="radio" value="no"
                                                             checked={c.answer === 'no'}
                                                             onChange={handleOptionChangeKID(i)} />
                                                      Không
                                                    </label>
                                                  </div>
                                                </form>
                                              </div>
                                            ))
                                          }
                                        </div>
                                        :
                                        <div>
                                          {
                                            check == 'cholestasis' ?
                                              <div style={{width: '60%', margin: 'auto'}}>
                                                {
                                                  listCHO.map((c, i) => (
                                                    <div key={i}>
                                                      <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                                                      <form style={{fontSize: 20}}>
                                                        <div className="radio">
                                                          <label>
                                                            <input type="radio" value="yes"
                                                                   checked={c.answer === 'yes'}
                                                                   onChange={handleOptionChangeCHO(i)} />
                                                            Có
                                                          </label>
                                                        </div>
                                                        <div className="radio">
                                                          <label>
                                                            <input type="radio" value="no"
                                                                   checked={c.answer === 'no'}
                                                                   onChange={handleOptionChangeCHO(i)} />
                                                            Không
                                                          </label>
                                                        </div>
                                                      </form>
                                                    </div>
                                                  ))
                                                }
                                              </div>
                                              :
                                              <div style={{width: '60%', margin: 'auto'}}>
                                                {
                                                  listGOUT.map((c, i) => (
                                                    <div key={i}>
                                                      <Typography style={{fontSize: 25}}>Câu {i + 1}: {c.question}</Typography>
                                                      <form style={{fontSize: 20}}>
                                                        <div className="radio">
                                                          <label>
                                                            <input type="radio" value="yes"
                                                                   checked={c.answer === 'yes'}
                                                                   onChange={handleOptionChangeGOUT(i)} />
                                                            Có
                                                          </label>
                                                        </div>
                                                        <div className="radio">
                                                          <label>
                                                            <input type="radio" value="no"
                                                                   checked={c.answer === 'no'}
                                                                   onChange={handleOptionChangeGOUT(i)} />
                                                            Không
                                                          </label>
                                                        </div>
                                                      </form>
                                                    </div>
                                                  ))
                                                }
                                              </div>
                                          }
                                        </div>
                                    }
                                  </div>
                              }
                            </div>
                        }
                      </div>
                  }
                </div>
            }
          </div>
      }
      <div style={{ display: 'flex', margin: '5% 10% 0 65%' }}>
        <Button color="secondary" onClick={goHome}>
          Hủy
        </Button>
        <Button color="primary" onClick={updateUser}>
          Cập Nhật
        </Button>
      </div>
    </div>
  );
}

export default Account;