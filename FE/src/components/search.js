import {Alert, Button,Form} from 'react-bootstrap'
import Camera from './img/camera.png'
import {useState} from 'react'
import PopUp from './modal';

function Search({setStatus, itemInfo, setItemInfo}){
    const [itemCode,setItemCode] = useState("");
    const [showModal,setShowModal] = useState(false);
    const [modalData,setModalData] = useState({});

    async function search(){
      const data = { itemCode:itemCode };
      fetch('http://localhost:3065/search/', {
        method: 'POST', // 또는 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        setStatus('item')
      })
      .catch((error) => {
        setModalData({
          title:"에러",
          content:"코드를 정확히 입력해주세요."
        })
        setShowModal(true)
        return;
      });
    }

    return(
        <Alert className='Search' style={{backgroundColor:'#BCABC2', position : 'fixed', width:'500px'}}>
            <div className='text' style={{display:'flex', marginBottom:'10px', color:"#000000"}}>
            제품코드를 직접입력하거나
            QR코드를 스캔하세요.
            </div>  
            <Form.Control 
                    value={itemCode}
                    onChange = {(e) =>{
                      setItemCode(e.target.value);
                    }
                  }
                    type="text"
                    placeholder="aX9asdnVa"
                  />
            <div className='SearchButtons' style={{marginTop:'15px'}}>
                <Button variant="light" style={{marginLeft:'10px', marginRight:'10px'}}>
                    <img src={Camera} height={'20px'}/>
                </Button>
                <Button variant="light" style={{marginLeft:'10px', marginRight:'10px'}} onClick={()=>{setStatus("item")}}>
                    검색
                </Button>
            </div>
            <PopUp setShowModal={setShowModal} showModal={showModal} modalData={modalData}/>
        </Alert>
    )
}

export default Search;