import { useState } from "react";
import axios from"axios" ;
import './Delete.css';


export function Delete(){
    const[id,setID] = useState("");

    async function deleteData(e){
        e.preventDefault();
        try{
            const response = await axios.delete(`https://my-project-m8st.onrender.com/api/employees/${id}`);
            alert(response.data.message);
        }
        catch(err){
            alert("Record not found:" +err);
        }
                
        };
        return(
            <div className="delete-container">
                
               
                <form className="delete-form"onSubmit = {deleteData}>
                    <h1>Delete Record By ID</h1>
                     <hr/>
                    <input type="text" 
                    placeholder="Enter id"
                    value={id} onChange = {e => setID(e.target.value)} required/>
                    <br/><br/>
                    <button type="submit"> Remove Data</button>
                </form>
            </div>
        )
    }
