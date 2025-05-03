import axios from 'axios'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import {
  BsDoorOpenFill,
  BsPersonBoundingBox,
  BsShieldLockFill,
} from 'react-icons/bs'
import { Dashboard } from '../dashboard'
import './css/default.css'
import './css/media.css'
import './css/style.css'

const Login = () => {
  const [data, setdata] = useState([])
  const [val, setval] = useState([[], false])

  const login = () => {
    const fdata = new FormData()
    fdata.append('email', data[0].email)
    fdata.append('password', data[1].password)

    axios
      .post('http://localhost/Patel_Om/project/', fdata)
      .then(function (success) {
        setval([success.data, true])
        console.log(success.data)
      })
  }

  if (val[1] === true && val[0] !== 'Yo..!') {
    window.localStorage.setItem('uid', val[0].id)
    return <Dashboard data={''} />
  }

  return (
    <div className="position-relative bg-color">
      <div className="position-absolute direct-1 d-none d-sm-block">
        <Container>
          <div>
            <h1 className="text-center fs-1" style={{ color: '#562C51' }}>
              Admin
            </h1>
          </div>
          <div className="d-flex p-3 border-bottom">
            <i className="icon">
              <BsPersonBoundingBox />
            </i>
            <input
              type="email"
              name="email"
              placeholder="Email :-"
              className="input"
              id="in1"
              onChange={(i) => {
                let arr = data
                arr[0] = { email: i.target.value }
                setdata(arr)
              }}
            />
          </div>
          <div className="d-flex p-3 border-bottom">
            <i className="icon">
              <BsShieldLockFill />
            </i>
            <input
              type="password"
              name="pw"
              placeholder="Password :-"
              className="input"
              id="in2"
              onChange={(i) => {
                let arr = data
                arr[1] = { password: i.target.value }
                setdata([...arr])
              }}
            />
          </div>
          <div className="p-3">
            <input
              type="button"
              name="login"
              value="Sign In"
              className="button-login"
              onClick={login}
            />
          </div>
          <div className="d-flex justify-content-between p-3">
            {/* <a href="/admin/register" className="a-edit">Register?</a> */}
            <a href="#" className="a-edit">
              Forget Password?
            </a>
          </div>
        </Container>
      </div>
      <div className="position-absolute direct-register d-sm-none d-block width-mobile p-2">
        <Container>
          <div>
            <i className="icon-color">
              <BsDoorOpenFill />
            </i>
          </div>
          <div className="d-flex p-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              id="in3"
            />
          </div>
          <div className="d-flex p-3">
            <input
              type="password"
              name="pw"
              placeholder="Password"
              className="input"
              id="in4"
            />
          </div>
          <div className="d-flex p-3" style={{ columnGap: '20px' }}>
            <input
              type="button"
              name="login"
              value="SIGN IN"
              className="button-login mx-auto"
            />
          </div>
          <div class="d-flex justify-content-between p-3">
            <a href="/register" class="a-edit">
              Register?
            </a>
            <a href="#" class="a-edit">
              Forget Password?
            </a>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Login
