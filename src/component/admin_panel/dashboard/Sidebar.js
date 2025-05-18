import axios from 'axios'
import { useEffect, useState } from 'react'
import { Logout } from '../login/logout'

export const Sidebar = () => {
  const [data, setdata] = useState([])

  const fdata = new FormData()
  fdata.append('id', window.localStorage.getItem('uid'))

  useEffect(() => {
    axios
      .post('https://blogapplicaton.free.nf/project/getID.php', fdata)
      .then(function (fetch) {
        setdata(fetch.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link text-decoration-none">
          <img
            src={require('./img/AdminLTELogo.png')}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar position-relative" style={{ height: '90vh' }}>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={`https://blogapplicaton.free.nf/project/${data.picture}`}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="/" className="d-block text-decoration-none">
                {data.name}
              </a>
            </div>
          </div>

          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <Logout />

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="nav-icon fas fa-edit"></i>
                  <p>
                    Forms
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/add-blogs" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Add Blogs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="nav-icon fas fa-table"></i>
                  <p>
                    Blogs
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/view-blogs" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>View Blogs</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="nav-icon fas fa-table"></i>
                  <p>
                    Comments
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/view-comments" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>View Comments</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
