import axios from "axios"
import {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = ()=>{
    const token = "0 + 0 = la tête a machicoulie"
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async (e : FormEvent)=>{
        e.preventDefault()
        const response = await axios.get("./src/assets/db/db.json")
        const data = response.data
        const loginString = JSON.stringify({...login})
        const dataString = JSON.stringify({...data})
        const match = new RegExp(loginString, 'i').test(dataString) ? true : false;
        if (match){
            sessionStorage.setItem('token', token)
            navigate("/list")
        }
        else {
            setError(true)
        }
    }
    useEffect(()=>(
        console.log(error)
    ), [error])

    return(
        <>
            <div className="flex justify-center items-center p-10 text-slate-50">
                <form action="" onSubmit={handleLogin}>
                    <div className=" bg-emerald-600 p-10 rounded drop-shadow-lg">
                        <div className="stroke">
                            <h1 className="font-bold text-5xl text-yellow-400 text-center">Login</h1>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="p-2.5 pl-0 font-bold">Email</label>
                            <input type="email" placeholder="Email" className="p-2.5 text-yellow-400 rounded w-full pr-24 border-2 border-emerald-600 drop-shadow-lg focus:outline-none focus:border-yellow-400 focus:ring-1 transition duration-200 delay-300" onChange={
                                (e)=>(setLogin({...login, email: e.target.value}))
                            }/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="p-2.5 pl-0 font-bold">Password</label>
                            <input type="password" placeholder="Password" className="p-2.5 text-yellow-400 rounded w-full pr-24 border-2 border-emerald-600 drop-shadow-lg focus:outline-none focus:border-yellow-400 focus:ring-1 transition duration-200 delay-300" onChange={
                                (e)=>(setLogin({...login, password: e.target.value}))
                            }/>
                        </div>
                        <div className="border-2 text-center mt-5 rounded border-yellow-400 text-yellow-400 hover:bg-yellow-400/50 hover:text-slate-50 font-bold transition duration-200 delay-300 drop-shadow-lg cursor-pointer">
                            <input type="submit" value="Login" className="p-2.5"/>
                        </div>
                        {error && (
                            <p className="text-red-500 text-center text-4xl p-5 stroke">Tu rentre pas </p>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login