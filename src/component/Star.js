const Star = ({icon, click}) => {
    return ( <div className="Star">
         <div className="mt-2" onClick={click}>
                    {icon}
                </div>
    </div> );
}
 
export default Star;