import { useState } from 'react'
import '../styles/Login.css'
import '../styles/global.css'
import { useNavigate } from 'react-router-dom'
import baseApi from '../baseApi'

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() // agar page tidak refresh ketika button di submit
        try {
            const response = await baseApi.post('user/login', user)
            localStorage.setItem('token', response.data.data.token)
            navigate('/categories')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (field) => (e) => {
        setUser({
            ...user,
            [field]: e.target.value
        })
    }

    return (
        <div className='form-body'>
            <div className="container">
                <div className="box" style={{ backgroundColor: "#d31145" }}>
                    <img src="https://www.thejakartapost.com/longforms/longform-aiavitality/skin/img/longform/aiavitality/advlf_aia01.jpg" alt="" />
                </div>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" onChange={handleChange('email')} required />
                        </div>
                        <div className="input-box">
                            <label>Password</label>
                            <input type="password" onChange={handleChange('password')} required />
                        </div>
                        <button type='submit' className='login-btn'><h3>Login</h3></button>
                        <div className='log-reg-box'>
                            <p>Don't have an account?</p>
                            <button className='log-reg-btn' onClick={() => navigate('/register')}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login