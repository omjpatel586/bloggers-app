import { useState } from "react"
import { BiLogOutCircle } from "react-icons/bi"

export const Logout = () => {
    const logout = () => {
        window.localStorage.removeItem("uid")
        window.location.replace("http://localhost:3000/admin")
    }

    return (
        <>
            <div className="position-absolute directions">
                <div className="d-flex align-items-center logout">
                    <button className="btn p-0" onClick={logout}><i className="text-white fs-2"><BiLogOutCircle /></i></button>
                    <h1 className="fs-6 m-0">Logout</h1>
                </div>
            </div>
        </>
    )
}