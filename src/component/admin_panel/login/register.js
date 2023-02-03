import { useRef, useState } from "react"
import "./css/style.css"
import "./css/default.css"
import "./css/media.css"
import { Container } from "react-bootstrap"
import { BsPersonBadgeFill, BsEnvelopeFill, BsFillShieldLockFill, BsFillImageFill } from "react-icons/bs"
import axios from "axios"

export const Register = () => {
    const [data,setdata] = useState([])
    const ref = useRef()

    const register = () => {
        if(data[0].name===""||data[1].email===""||data[2].pw==="") {
            return
        } else if(data[2].pw === data[3].pw) {
            return
        }

        const fdata = new FormData()
        fdata.append("name", data[0].name)
        fdata.append("email", data[1].email)
        fdata.append("password", data[2].pw)
        fdata.append("image", ref.current.files[0])

        axios.post("https://omcdmiweb.000webhostapp.com/React.js_Project_API./registerapi.php", fdata)
            .then((data)=>{
                console.log(data)
                window.location.reload()
             })
    }

    return (
        <>
            <div class="position-relative bg-color">
                <div class="position-absolute direct direct-register d-none d-sm-block d-md">
                    <Container>
                        <div>
                            <h1 className="text-center fs-1">Sign Up</h1>
                            <p>Please fill in this form to create an account!</p>
                        </div>
                        <div className="d-flex p-3 border-bottom">
                            <i className="icon"><BsPersonBadgeFill /></i>
                            <input type="text" name="name" placeholder="Enter Name :-" className="input" onChange={(i) => {setdata([{"name":i.target.value}])}} />
                        </div>
                        <div className="d-flex p-3 border-bottom">
                            <i className="icon"><BsEnvelopeFill /></i>
                            <input type="email" name="email" placeholder="Enter Email :-" className="input" onChange={(i) => { let arr=data;
                            arr[1] = {"email":i.target.value}; setdata([...arr])}} />
                        </div>
                        <div className="d-flex p-3 border-bottom">
                            <i className="icon"><BsFillShieldLockFill /></i>
                            <input type="password" name="pw" placeholder="Enter Password :-" className="input" onChange={(i) => { let arr=data;
                            arr[2] = {"pw":i.target.value}; setdata([...arr])}} />
                        </div>
                        <div className="d-flex p-3 border-bottom">
                            <i className="icon"><BsFillShieldLockFill /></i>
                            <input type="password" name="cpw" placeholder="Enter Confirm Password :-" className="input" onChange={(i)=>{let arr=data;
                            arr[3] = {"cpw":i.target.value}; setdata([...arr])}}/>
                        </div>
                        <div className="d-flex p-3 border-bottom">
                            <i className="icon"><BsFillImageFill /></i>
                            <input type="file" name="image[]" className="input" 
                            ref={ref} multiple />
                        </div>
                        <div className="p-3">
                            <input type="button" name="register" value="Sign Up" className="button-login" onClick={register} />
                        </div>
                    </Container>
                </div>
                <div className="position-absolute direct-register d-sm-none d-block">
                    <Container>
                        <div>
                            <h1 className="text-center fs-1 text-white">Sign Up</h1>
                            <p className="text-white">Please fill in this form to create an account!</p>
                        </div>
                        <div className="d-flex p-3">
                            <input type="text" name="name" placeholder="Name" className="input" onChange={(i) => {setdata([{"name":i.target.value}])}} id="in1"/>
                        </div>
                        <div className="d-flex p-3">
                            <input type="email" name="email" placeholder="Email" className="input" onChange={(i) => { let arr=data;
                            arr[1] = {"email":i.target.value}; setdata([...arr])}} id="in2"/>
                        </div>
                        <div className="d-flex p-3">
                            <input type="password" name="pw" placeholder="Password" className="input" onChange={(i) => { let arr=data;
                            arr[2] = {"pw":i.target.value}; setdata([...arr])}} id="in3"/>
                        </div>
                        <div className="d-flex p-3">
                            <input type="password" name="cpw" placeholder="Confirm Password" className="input" onChange={(i) => { let arr=data;
                            arr[3] = {"cpw":i.target.value}; setdata([...arr])}}  id="in4"/>
                        </div>
                        <div className="d-flex p-3">
                            <input type="file" name="image" className="input" onChange={(i)=>{ let arr=data;
                                arr[4] = {"image":i.target.value}; setdata([...arr])}} id="in5" multiple />
                        </div>
                        <div className="d-flex p-3" style={{columnGap:"20px"}}>
                            <input type="button" name="register" value="Sign Up" className="button-login" onClick={register} />
                            <a href="/" className="button-login text-decoration-none">Back</a>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}