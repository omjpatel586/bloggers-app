import AOS from 'aos'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa'
import { ClipLoader } from 'react-spinners'
import audio from '../blogs/Images/5VPJBXC-pop-bells.mp3'
import '../css/default.css'
import '../css/style.css'

AOS.init()

export const Blogs = () => {
  const [data, setdata] = useState([])
  const [like, setlike] = useState([])
  const [loading, setLoading] = useState(true)
  const play = new Audio(audio)

  useEffect(() => {
    axios
      .get('https://blogapplicaton.free.nf/project/getBlogs.php')
      .then(function (fetch) {
        setdata([...fetch.data])
        if (fetch.data.length !== 0) {
          setLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const handleDetails = (props) => {
    window.location.href = `single-blogs/${props}`
  }

  const handleLike = (props) => {
    play.play()
    axios
      .post(`https://blogapplicaton.free.nf/project/rewards.php?id=${props}`)
      .then(() => {
        window.location.reload()
      })
  }

  // useEffect(() => {
  //     data.map((i, j) => {
  //         if (j % 2 === 0) {
  //             document.getElementById("flex-" + j).style.justifySelf = "flex-start"
  //         } else {
  //             document.getElementById("flex-" + j).style.justifySelf = "flex-end"
  //         }
  //     })
  // })

  useEffect(() => {
    axios
      .get('https://blogapplicaton.free.nf/project/getLikes.php')
      .then(function (fetch) {
        setlike([...fetch.data])
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    data.map((i, k) => {
      like.map((j) => {
        if (i.id === j.bid) {
          document.getElementById('l' + k).innerHTML = j.likes + ' Likes'
        }
      })
    })
  })

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="#26442b" loading={loading} size={150} />
      </div>
    )
  }

  return (
    <div className="p-3">
      <Container>
        <div className="d-none d-sm-block">
          <div className="d-flex justify-content-center p-3">
            <h1 className="fw-bolder">Blogs</h1>
          </div>
          <div
            className="d-flex flex-sm-wrap flex-xl-nowrap d-xl-grid grid-columns justify-content-md-center gap-media"
            style={{ columnGap: '20px', rowGap: '20px' }}
          >
            {data.map((i, j) => {
              return (
                <>
                  <div className="card-ft" id={'flex-' + j}>
                    <div className="row flex-lg-wrap">
                      <div className="image-blogs col-12 col-xl-6">
                        <img src={i.frame} className="img-fluid"></img>
                      </div>
                      <div className="content col-12 col-xl-6">
                        <h1 className="tle pt-3 fw-bolder fs-5 text-left">
                          {i.title}
                        </h1>
                        <p className="desp">{i.description}</p>
                        <div className="d-flex justify-content-end m-3">
                          <button
                            className="btn btn-dark"
                            onClick={() => {
                              handleDetails(i.id)
                            }}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="py-2 px-3 d-flex align-items-center justify-content-between"
                      style={{ borderTop: '3px solid gray' }}
                    >
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() => {
                            handleLike(i.id)
                          }}
                          className="btn p-0 mb-2"
                        >
                          <i className="fs-6" style={{ color: '#FFBC06' }}>
                            <FaThumbsUp />
                          </i>
                        </button>
                        <h1
                          className="fw-bolder fs-6 m-0 p-2"
                          style={{ color: 'gray' }}
                        >
                          Like
                        </h1>
                      </div>
                      <div>
                        <h1
                          className="fw-bolder fs-6 m-0 text-gray"
                          id={'l' + j}
                        >
                          0 Likes
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className="d-block d-sm-none">
          <div className="py-3">
            {data.map((i, j) => {
              return (
                <div className="row shadow align-items-center">
                  <div className="image-m-blogs col-5">
                    <img src={i.frame}></img>
                  </div>
                  <div className="content-mobile col-7 p-2">
                    <h1 className="tle pt-3 fw-bolder fs-6 text-left">
                      {i.title}
                    </h1>
                    <p className="desp-m">{i.description}</p>
                    <div className="d-flex justify-content-end m-3">
                      <button
                        className="btn-taker"
                        onClick={() => {
                          handleDetails(i.id)
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  <div
                    className="py-2 px-3 d-flex align-items-center justify-content-between"
                    style={{ borderTop: '3px solid gray' }}
                  >
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => {
                          handleLike(i.id)
                        }}
                        className="btn p-0 mb-2"
                      >
                        <i className="fs-6" style={{ color: '#FFBC06' }}>
                          <FaThumbsUp />
                        </i>
                      </button>
                      <h1
                        className="fw-bolder fs-6 m-0 p-2"
                        style={{ color: 'gray' }}
                      >
                        Like
                      </h1>
                    </div>
                    <div>
                      <h1 className="fw-bolder fs-6 m-0 text-gray" id={'l' + j}>
                        0 Likes
                      </h1>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
