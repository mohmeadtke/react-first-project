const Method = ({ object }) => {
    return ( 
        <div className="Method">
            {object.map((ob) => (
                <div className="insideHome" key={ob.id}>
                    <h3>{ob.title}</h3> 
                    <p>{ob.creator}</p> 
                </div>
            ))}
        </div>
     );
}

export default Method;
