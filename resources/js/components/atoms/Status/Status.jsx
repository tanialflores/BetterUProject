import { useEffect } from "react";
import './Status.scss'

const Status = ({title,value,setValue})=>
{
    useEffect(()=>
    {
        const statusG = document.getElementById("status")
        if(value)
        {
            statusG.classList.add("animate")
            statusG.style.background="#fbb030"
        }
        else
        {
            statusG.classList.remove("animate")
            statusG.style.background="#c8c6c6"
        }
    },[value])
    return(
        <>
            <div className={"Status"}>
                <div className={"title-e"}>{title}</div>
                <div id={"status"} className={"status-container"} onClick={()=>{setValue(!value)}}>
                <div className="circle"></div>
                <div className={"text"}>{value?"Activo":"Inactivo"}</div>
                </div>
            </div>
        </>
    )
}
export default Status