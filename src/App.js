import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Dashboard } from './component/admin_panel/dashboard'
import Login from './component/admin_panel/login'
import { Single } from './component/blogs/single'
// import { Register } from "./component/admin_panel/login/register"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/single-blogs/:id" element={<Single />}></Route>
      {/* <Route path="/admin/register" element={ <Register /> }></Route> */}
      <Route
        path="/dashboard"
        element={
          window.localStorage.getItem('uid') !== null ? (
            <Dashboard data={''} />
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/admin"
        element={
          window.localStorage.getItem('uid') !== null ? (
            <Dashboard data={''} />
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/view-blogs"
        element={
          window.localStorage.getItem('uid') == null ? (
            <Login />
          ) : (
            <Dashboard data={'view'} />
          )
        }
      ></Route>
      <Route
        path="/view-comments"
        element={
          window.localStorage.getItem('uid') == null ? (
            <Login />
          ) : (
            <Dashboard data={'comments'} />
          )
        }
      ></Route>
      <Route
        path="/add-blogs"
        element={
          window.localStorage.getItem('uid') == null ? (
            <Login />
          ) : (
            <Dashboard data={'form'} />
          )
        }
      ></Route>
    </Routes>
  )
}

export default App
