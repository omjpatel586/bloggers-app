import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Case, CaseElse, Switch } from "react-context-switch"

export const View_Comments = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch("https://omcdmiweb.000webhostapp.com/React.js_Project_API./getComments.php")
            .then((resp) => resp.json())
            .then((fetch) => {
                setdata(fetch)
                console.log(data)
            })
    }, [])

    const handleBtn = () => {
        const fdata = new FormData()
        data.map((i, j) => {
            if (document.getElementById("customSwitches" + j + "a").checked === true) {
                fdata.append("id", i.id)
                fdata.append("status", 1)
                fdata.append("cid", i.blogId)
                axios.post("https://omcdmiweb.000webhostapp.com/React.js_Project_API./AComments.php", fdata)
                    .then(function () {
                        window.location.reload()
                    })
            } else {
                fdata.append("id", i.id)
                fdata.append("status", 0)
                fdata.append("cid", i.blogId)
                axios.post("https://omcdmiweb.000webhostapp.com/React.js_Project_API./AComments.php", fdata)
                    .then(function () {
                        window.location.reload()
                    })
            }
        })
    }

    const handleDelete = () => {
        const fdata = new FormData()
        data.map((i, j) => {
            if (document.getElementById("customSwitches" + j).checked === true) {
                fdata.append("id", i.id)
                fdata.append("cid", i.blogId)
                axios.post("https://omcdmiweb.000webhostapp.com/React.js_Project_API./DeleteComments.php", fdata)
                    .then(function () {
                        window.location.reload()
                    })
            }
        })
    }

    useEffect(()=>{
        data.map((i,j)=>{
            document.getElementById("customSwitches"+j+"a").checked=(i.status == 1) ? true : false
        })
    }, [data])

    return (
        <>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>User Comments</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Comments</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section style={{ width: "100%" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover" width={"100%"} height={"100%"}>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>NAME</th>
                                                    <th>SUBJECT</th>
                                                    <th>STATUS</th>
                                                    <th>COMMENT</th>
                                                    <th>DATE&TIME</th>
                                                    <th>BLOG-ID</th>
                                                    <th colspan={3}>EFFECTS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan={7}></td>
                                                    <td className="d-flex">
                                                        <p className="fw-bolder border p-2 m-2">
                                                            Approve
                                                            <button type="submit" className="btn btn-primary" onClick={handleBtn}>Submit</button>
                                                        </p>
                                                        <p className="fw-bolder border p-2 m-2">
                                                            Delete
                                                            <button type="submit" className="btn btn-primary" onClick={handleDelete}>Submit</button>
                                                        </p>
                                                    </td>
                                                </tr>
                                                {
                                                    data.map((i, j) =>
                                                        <tr className="position-relative">
                                                            <td>{i.id}</td>
                                                            <td>
                                                                <h1 className="fw-bolder fs-6">{i.name}</h1>
                                                            </td>
                                                            <td>
                                                                <p>
                                                                    {i.subject}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <Switch value={i.status}>
                                                                    <Case when={(val) => val.includes(1)}>
                                                                        <h1 className="fs-6">Visible</h1>
                                                                    </Case>
                                                                    <CaseElse>
                                                                        <h1 className="fs-6">Unseen</h1>
                                                                    </CaseElse>
                                                                </Switch>
                                                            </td>
                                                            <td>
                                                                <p>{i.comment}</p>
                                                            </td>
                                                            <td>
                                                                <p>{i.datetime}</p>
                                                            </td>
                                                            <td>{i.blogId}</td>
                                                            <td className="text-center d-flex justify-content-between border h-100">
                                                                <div class="custom-control custom-switch align-self-center mx-auto">
                                                                    <input type="checkbox" class="custom-control-input" id={"customSwitches" + j + "a"} />
                                                                    <label class="custom-control-label" htmlFor={"customSwitches" + j + "a"}></label>
                                                                </div>
                                                                <div class="custom-control custom-switch align-self-center mx-auto">
                                                                    <input type="checkbox" class="custom-control-input" id={"customSwitches" + j} />
                                                                    <label class="custom-control-label" htmlFor={"customSwitches" + j}></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}