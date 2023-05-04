import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const PrivateRoutes = ()=>{
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()

   useEffect(()=>{
       if (token === null){
           navigate("/")
       }
   }, [])

    return (
        <>
            {token &&(
                <Outlet/>
            )}
        </>
    )
}

export default PrivateRoutes