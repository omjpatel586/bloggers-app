import axios from 'axios'
import { useEffect, useState } from 'react'
import { Case, CaseElse, Switch } from 'react-context-switch'
import './css/style.css'

export const View = () => {
  const [data, setdata] = useState([])

  const fdata = new FormData()
  fdata.append('uid', window.localStorage.getItem('uid'))

  const reFetch = () => {
    axios
      .post('http://localhost/Patel_Om/project/getBlogs.php', fdata)
      .then(function (fetch) {
        setdata([...fetch.data])
        console.log(fetch.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleBtn = (id, status) => {
    const fdata = new FormData()
    fdata.append('id', id)
    fdata.append('status', Number(status))
    fdata.append('uid', window.localStorage.getItem('uid'))
    axios
      .post('http://localhost/Patel_Om/project/editBlogs.php', fdata)
      .then(function () {
        reFetch()
      })
  }

  const handleDelete = (id) => {
    const fdata = new FormData()
    fdata.append('id', id)
    fdata.append('blogs', 'delete')
    fdata.append('uid', window.localStorage.getItem('uid'))
    axios
      .post('http://localhost/Patel_Om/project/editBlogs.php', fdata)
      .then(function () {
        reFetch()
      })
  }

  const handleEdit = (props) => {
    data.map((i, j) => {
      if (i.id === props) {
        document.getElementById('editth1' + j).style.display = 'none'
        document.getElementById('editpd' + j).style.display = 'none'
        document.getElementById('editfimg' + j).style.display = 'none'
        document.getElementById('editt' + j).style.display = 'block'
        document.getElementById('editd' + j).style.display = 'block'
        document.getElementById('editf' + j).style.display = 'block'
        document.getElementsByClassName('hcbtn')[j].style.display = 'block'
      } else {
        document.getElementById('editth1' + j).style.display = 'block'
        document.getElementById('editpd' + j).style.display = 'block'
        document.getElementById('editfimg' + j).style.display = 'block'
        document.getElementById('editt' + j).style.display = 'none'
        document.getElementById('editd' + j).style.display = 'none'
        document.getElementById('editf' + j).style.display = 'none'
        document.getElementsByClassName('hcbtn')[j].style.display = 'none'
      }
    })
  }

  const handleConfirm = (props) => {
    data.map((i, j) => {
      if (i.id === props) {
        const fdata = new FormData()
        const image = document.getElementById('editf' + j).files[0]
        fdata.append('blogs', 'edit')
        fdata.append('id', i.id)
        fdata.append('title', document.getElementById('editt' + j).value)
        fdata.append('desp', document.getElementById('editd' + j).value)
        fdata.append('uid', window.localStorage.getItem('uid'))
        if (image === undefined) {
          fdata.append('image', i.frame)
          axios
            .post('http://localhost/Patel_Om/project/editBlogs.php', fdata)
            .then(function () {
              // window.location.reload()
            })
        } else {
          fdata.append('image', image)
          fdata.append('old_img', i.frame)
          axios
            .post('http://localhost/Patel_Om/project/editBlogs.php', fdata)
            .then(function () {
              // window.location.reload()
            })
        }
      }
    })
  }

  useEffect(() => {
    reFetch()
  }, [])

  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Blogs</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Blogs</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section style={{ width: '100%' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                      width={'100%'}
                      height={'100%'}
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>TITLE</th>
                          <th>DESCRIPTION</th>
                          <th>STATUS</th>
                          <th>FRAME</th>
                          <th colSpan={3}>EFFECTS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={5}></td>
                          <td className="d-flex">
                            <p className="fw-bolder border p-2 m-2">Approve</p>
                            <p className="fw-bolder border p-2 m-2">Delete </p>
                          </td>
                        </tr>
                        {data.map((i, j) => (
                          <tr className="position-relative">
                            <td>{i.id}</td>
                            <td>
                              <h1 className="fw-bolder fs-6" id={'editth1' + j}>
                                {i.title}
                              </h1>
                              <button
                                className="hebtn btn text-danger position-absolute bottom-0"
                                onClick={() => {
                                  handleEdit(i.id)
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="hcbtn btn text-danger position-absolute bottom-0"
                                style={{ left: '100px' }}
                                onClick={() => {
                                  handleConfirm(i.id)
                                }}
                              >
                                Confirm
                              </button>
                              <textarea
                                rows={5}
                                cols={15}
                                defaultValue={i.title}
                                style={{ display: 'none' }}
                                id={'editt' + j}
                              ></textarea>
                            </td>
                            <td>
                              <p id={'editpd' + j}>
                                {i?.description?.slice(0, 200)}
                              </p>
                              <textarea
                                rows={5}
                                cols={10}
                                defaultValue={i.description}
                                style={{ display: 'none' }}
                                id={'editd' + j}
                              ></textarea>
                            </td>
                            <td>
                              <Switch value={i.status}>
                                <Case when={(val) => val?.includes(1)}>
                                  <h1 className="fs-6">Visible</h1>
                                </Case>
                                <CaseElse>
                                  <h1 className="fs-6">Unseen</h1>
                                </CaseElse>
                              </Switch>
                            </td>
                            <td>
                              <div className="image1">
                                <img src={i.frame} id={'editfimg' + j}></img>
                                <input
                                  type="file"
                                  style={{ display: 'none' }}
                                  id={'editf' + j}
                                ></input>
                              </div>
                            </td>
                            <td className="text-center d-flex justify-content-between border h-100">
                              <div class="custom-control custom-switch align-self-center mx-auto">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id={'customSwitches' + j + 'a'}
                                  onChange={() =>
                                    handleBtn(i.id, !(i.status == 1))
                                  }
                                  checked={i.status == 1}
                                />
                                <label
                                  class="custom-control-label"
                                  htmlFor={'customSwitches' + j + 'a'}
                                ></label>
                              </div>
                              <div class="custom-control custom-switch align-self-center mx-auto">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id={'customSwitches' + j}
                                  onChange={() => handleDelete(i.id)}
                                />
                                <label
                                  class="custom-control-label"
                                  htmlFor={'customSwitches' + j}
                                ></label>
                              </div>
                            </td>
                          </tr>
                        ))}
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
