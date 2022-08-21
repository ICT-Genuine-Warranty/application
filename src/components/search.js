import {Alert, Button,Form} from 'react-bootstrap'
import Camera from './img/camera.png'
import {useState} from 'react'

function Search({setStatus, itemCode, setItemCode}){
    return(
        <Alert className='Search' variant={"balance"} style={{backgroundColor:'#BCABC2', position : 'fixed', width:'500px'}}>
            <div className='text' style={{display:'flex', marginBottom:'10px'}}>
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
        </Alert>
    )
}

export default Search;