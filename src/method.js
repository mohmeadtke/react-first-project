const Method = ({ object ,deletefun}) => {
    return ( 
        <div className="Method">
            {object.map((ob) => (
                <div className="insideHome" key={ob.id}>
                    <h3>{ob.title}</h3> 
                    <p>{ob.creator}</p> 
                    <button onClick={()=> deletefun(ob.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}

export default Method;
