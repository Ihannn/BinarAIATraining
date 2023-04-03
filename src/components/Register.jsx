import { useState } from 'react'
import '../styles/Login.css'
import '../styles/global.css'
import {useNavigate} from 'react-router-dom'
import baseApi from '../baseApi'

function Register() {

    const [user, setUser] = useState({
        email: '',
        name:'',
        phone: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await baseApi.post('user/register', user)
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (field) => (e) => {
        setUser({
            ...user,
            [field] : e.target.value
        })
    }

    return (
        <div className='form-body'>
            <div className="container">
                <div className="box" style={{backgroundColor: "#d31145"}}>
                    
                </div>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <div className="input-box">
                            <p>Email</p>
                            <input type="email" onChange={handleChange('email')}/>
                        </div>
                        <div className="input-box">
                            <p>Name</p>
                            <input type="text" onChange={handleChange('name')}/>
                        </div>
                        <div className="input-box">
                            <p>phone Number</p>
                            <input type="number" onChange={handleChange('phone')}/>
                        </div>
                        <div className="input-box">
                            <p>Password</p>
                            <input type="password" onChange={handleChange('password')}/>
                        </div>
                        <button type='submit' className='login-btn'><h3>Register</h3></button>
                        <div className='log-reg-box'>
                            <p>Already have an account?</p>
                            <button className='log-reg-btn'onClick={() => navigate('/login')}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register