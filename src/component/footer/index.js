import { Container } from "react-bootstrap"
import { BsWhatsapp, BsTelegram, BsLinkedin, BsFacebook } from "react-icons/bs"
import "../css/style.css"
import "../header/css/header.css"
import "./css/footer.css"

export const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "#26442b" }}>
                <Container>
                    <div className="p-3">
                        <div className="image mx-auto">
                            <img src={require("../header/Images/logo.png")}></img>
                        </div>
                        <div className="d-none d-sm-block">
                            <div className="py-3 d-flex justify-content-center">
                                <ul className="nav">
                                    <li className="px-2">Home</li>
                                    <li className="px-2">News Blogs</li>
                                    <li className="px-2">Entertainment Blogs</li>
                                    <li className="px-2">About</li>
                                </ul>
                            </div>
                        </div>
                        <div className="icons text-center p-3 p-sm-0">
                            <i><BsWhatsapp /></i>
                            <i><BsTelegram /></i>
                            <i><BsLinkedin /></i>
                            <i><BsFacebook /></i>
                        </div>
                    </div>
                </Container>
                <div className="p-1 bg-white">
                    <Container>
                        <h1 className="fw-bolder fs-6" style={{ color: "gray" }}>@ Copyright</h1>
                    </Container>
                </div>
            </div>
        </>
    )
}