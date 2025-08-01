import axios from "axios";
import { useState} from "react";
import './Update.css';

export function Update(){

const[id,setId] = useState("");
const[empNo,setNo] = useState("");
const[empName,setName] = useState("");
const[empSal,setSal] = useState("");

async function updateHandler(e){
    e.preventDefault();
    try{
        const response = await axios.put(`https://my-project-m8st.onrender.com/api/employees/${id}`,
            {empNo:Number(empNo),
            empName,
            empSal:Number(empSal)
        });
        alert(response.data.message);

    }
    catch(err)
    {
        alert(err);
    }
}

return(
    <div className="container-update">
        
       
        <form className="login-form"  onSubmit={updateHandler}>
            <h1>Update Record</h1>
            <input type="text" 
            placeholder="Enter Id"
            value={id}
            onChange={e => setId(e.target.value)} required/>
            <br/>
            
            <input type="text" 
            placeholder="Enter No"
            value={empNo}
            onChange={e => setNo(e.target.value)} required/>
            <br/>

            <input type="text" 
            placeholder="Enter Name"
            value={empName}
            onChange={e => setName(e.target.value)} required/>
            <br/>

            <input type="text" 
            placeholder="Enter Salary"
            value={empSal}
            onChange={e => setSal(e.target.value)} required/>
            <br/><br/>
            <hr/>

            <button type="submit">Update Records</button>

        </form>

    </div>
)
}
