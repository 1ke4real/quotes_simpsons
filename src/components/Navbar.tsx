import {Link, Outlet, useNavigate} from "react-router-dom";

const Navbar = () =>{
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate()
    return(
       <>
        <nav className="flex justify-between p-10 px-20 bg-emerald-600 text-slate-50 uppercase">
                <div className="stroke">
                    <h1 className="font-bold text-2xl text-yellow-400">The Simpsons</h1>
                </div>
                <ul className="flex justify-between items-center w-[15%] font-bold">
                    <li><Link to={"/list"} className="text-shadow-lg hover:text-yellow-400 transition duration-200 delay-300">All</Link></li>
                    <li><Link to={"/details"} className="text-shadow-lg hover:text-yellow-400 transition duration-200 delay-300">Details</Link></li>
                    {token ?(
                        <li className="text-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-400/50 hover:text-white transition duration-200 delay-300 stroke"><Link to={"/"} className="px-5" onClick={
                            ()=>{
                                sessionStorage.removeItem('token')
                                navigate('/')
                            }
                        }>Logout</Link></li>
                    ):(
                        <li className="text-yellow-400 border-2 border-yellow-400 rounded-md hover:bg-yellow-400/50 hover:text-white transition duration-200 delay-300 stroke"><Link to={"/"} className="px-5">Login</Link></li>
                        )}

                </ul>
        </nav>
           <Outlet/>
       </>
    )
}

export default Navbar