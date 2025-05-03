import axios from 'axios'
import { useEffect, useState } from 'react'
import './css/adminlte.css'
import './css/all.min.css'

export const General_Form = () => {
  const [status, setstatus] = useState('')

  const handleSubmit = () => {
    const form = document.getElementById('form-admin')
    const title = form.elements[0].value
    const desp = form.elements[1].value
    const s = window.localStorage.getItem('count')
    let img = ''
    if (status === 'offline') {
      img = form.img.files[0]
    } else {
      img = form.img.value
    }
    const fdata = new FormData()
    fdata.append('add', 'blogs')
    fdata.append('title', title)
    fdata.append('desp', desp)
    fdata.append('status', s)
    fdata.append('image', img)
    fdata.append('simg', status)
    fdata.append('uid', window.localStorage.getItem('uid'))
    axios
      .post('http://blogapplicaton.free.nf/project/', fdata)
      .then(function (fetch) {
        console.log(fetch)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const incr = () => {
    if (parseInt(window.localStorage.getItem('count')) >= 1) {
      return
    }
    window.localStorage.setItem('count', 1)
    document.getElementById('count').innerHTML = 1
  }

  const decr = () => {
    if (parseInt(window.localStorage.getItem('count')) <= 0) {
      return
    }
    window.localStorage.setItem('count', 0)
    document.getElementById('count').innerHTML = 0
  }

  useEffect(() => {
    window.localStorage.setItem('count', 0)
    document.getElementById('count').innerHTML = 0
  }, [])

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add Blogs</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Add Blogs</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-6">
              {/* general form elements */}
              <div className="card card-primary">
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={handleSubmit} id="form-admin">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Blog Title"
                        name="title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Description</label>
                      <textarea
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Blog Description"
                        rows={3}
                        cols={4}
                        name="extra"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <div className="d-flex" style={{ columnGap: '10px' }}>
                        <input
                          type="button"
                          value="+"
                          className="btn btn-dark align-self-center"
                          onClick={incr}
                        ></input>
                        <h1 className="fw-bolder fs-1" id="count"></h1>
                        <input
                          type="button"
                          value="-"
                          className="btn btn-dark align-self-center"
                          onClick={decr}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">Image</label>
                      <div
                        className="d-flex align-items-center"
                        style={{ columnGap: '10px' }}
                      >
                        <div className="d-flex" style={{ columnGap: '10px' }}>
                          <input
                            type="radio"
                            name="image"
                            value="online"
                            onChange={() => {
                              setstatus('offline')
                            }}
                          ></input>
                          <h1 className="fs-6 fw-bolder m-0">
                            Browse From Computer
                          </h1>
                        </div>
                        <div className="d-flex" style={{ columnGap: '10px' }}>
                          <input
                            type="radio"
                            name="image"
                            value="offline"
                            onChange={() => {
                              setstatus('online')
                            }}
                          ></input>
                          <h1 className="fs-6 fw-bolder m-0">URL</h1>
                        </div>
                      </div>
                      <div className="p-2">
                        {status === 'offline' ? (
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="exampleInputFile"
                                name="img"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="exampleInputFile"
                              >
                                Choose file
                              </label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        ) : status === 'online' ? (
                          <div className="input-group">
                            <div>
                              <input
                                className="form-control"
                                placeholder="Blog Frame URL"
                                type="text"
                                name="img"
                              ></input>
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Check me out
                      </label>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
