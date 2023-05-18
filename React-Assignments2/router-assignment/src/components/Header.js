import { useNavigate } from "react-router-dom"
import './Header.css'

export default function Header(){

    const navigate = useNavigate();
    return(
        <>
        <div className="header">
        <button onClick={()=>navigate('/')}>Home</button>
        <button onClick={()=>navigate('/AboutUs')}>AboutUs</button>
        <button onClick={()=>navigate('/Login')}>Login</button>
        <button onClick={()=>navigate('/Register')}>Register</button>
        </div>
        </>
    )
}