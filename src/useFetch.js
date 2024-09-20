import { useState,useEffect } from "react";
const useFetch = (url) => {

    const [object, setObject] = useState(null);
    const [isLoding, setisLoding]=useState(true);
    const [err, seterr]=useState(null);

    useEffect(()=>{
            fetch(url)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setObject(data)
                setisLoding(false)
            })
            .catch(er=>{
                seterr(er.message)
                setisLoding(false)
            })
            
        }, [url]
    );
    return {object , isLoding ,err}

}
 
export default useFetch;