import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [name,setName]=useState('');
    const[description ,setDescription ]=useState('');
    const[creater,setCreater]=useState('taqi');
    const[isloding,setisloding]=useState(false);
    const history =useHistory() ;

    const addData =(e)=>{
      setisloding(true)
      e.preventDefault();
      const title =name
      const creator= creater
      const rubish=description
      const data={rubish ,title ,creator}  ;
      
      fetch('http://localhost:8000/Data',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)

      }).then(
        console.log("it is sending"),
        setisloding(false),
        history.push("/")
        )

    }

    return (
        <div className="create">
          <form onSubmit={addData}>
            <label >input your game Name</label><br/>
            <input 
            type="text" 
            required 
            value={name} 
            onChange={(e)=>setName(e.target.value)}/> <br />
            <label >input a Description for game</label><br/>
            <textarea 
            required
            value={description}
            onChange={e=>setDescription(e.target.value)}
            /><br />
            <select 
            value={creater} 
            onChange={e=>setCreater(e.target.value)}>
              <option >taqi</option>
              <option >ali</option>
              <option >noor</option>
            </select><br />
            {!isloding && <button>ADD</button>}
            {isloding && <button disabled >adding...</button>}

          </form>
        </div>
      );
}
 
export default Create;
