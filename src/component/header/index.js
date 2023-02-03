import { useState } from "react"
import { Container } from "react-bootstrap"
import { BsWhatsapp, BsTelegram, BsLinkedin, BsFacebook } from "react-icons/bs"
import "../css/style.css"
import "./css/header.css"

export const Header = () => {
    const [isMobile, setMobile] = useState(false)

    return (
        <>
            <div>
                <div className="p-1" style={{ backgroundColor: "#26442b" }}>
                    <Container>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="icons">
                                <i><BsWhatsapp /></i>
                                <i><BsTelegram /></i>
                                <i><BsLinkedin /></i>
                                <i><BsFacebook /></i>
                            </div>
                            <div className="d-none d-sm-block">
                                <div className="input-group">
                                    <div className="form-outline">
                                        <input type="search" id="form1" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="shadow">
                    <Container>
                        <div className="p-2 d-flex align-items-center justify-content-between">
                            <div className="image">
                                <img src={require("./Images/logo.png")}></img>
                            </div>
                            <button className="navbar-toggler d-block d-sm-none" type="button" onClick={() => {
                                setMobile((isMobile === true) ? false : true)
                            }}>
                                <span className="navbar-toggler-icon navbar-dark"></span>
                            </button>
                            <div className=" d-none d-lg-block p-2 justify-content-end">
                                <ul className="nav">
                                    <li className="p-3"><a href="/">Home</a></li>
                                    <li className="p-3"><a href="/">News Blogs</a></li>
                                    <li className="p-3"><a href="/">Entertainment Blogs</a></li>
                                    <li className="p-3"><a href="/">About</a></li>
                                </ul>
                            </div>
                            {(isMobile === true) ?
                                <div className="position-absolute w-100 p-3 d-header" style={{ backgroundColor: "#26442b" }}>
                                    <Container>
                                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">News Blogs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">Entertainment Blogs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">About</a>
                                            </li>
                                        </ul>
                                        <div>
                                            <div className="input-group">
                                                <div className="form-outline">
                                                    <input type="search" id="form1" className="form-control" placeholder="Search" />
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                                : ""}
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}