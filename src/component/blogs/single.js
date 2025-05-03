import axios from 'axios'
import { useEffect, useState } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import '../css/default.css'
import '../css/style.css'
import { Footer } from '../footer'
import { Header } from '../header'
import { Comments } from './comments'
import { Reviews } from './reviews'

export const Single = () => {
  const [data, setdata] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost/Patel_Om/project/single.php?id=${id}`)
      .then(function (fetch) {
        setdata(fetch.data)
        if (fetch.data.length !== 0) {
          setLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <div className="spinner">
          <ClipLoader color="#26442b" loading={loading} size={150} />
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      {data.map((i) => {
        return (
          <>
            <div className="single-main d-none d-sm-block">
              <Container>
                <div className="d-flex align-items-center justify-content-between">
                  <h1 className="m-0">Blogs</h1>
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href={`/single-blogs/${id}`}>
                      Single-Blog
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{id}</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="row pt-4">
                  <div className="col-md-8 p-2 shadow">
                    <div className="blog-single-item">
                      <img src={i.frame} alt="" />
                    </div>
                    <div className="blog-single-content">
                      <h3>{i.title}</h3>
                      <p>{i.description}</p>
                      <div className="share-post">
                        <span>
                          Share on: <a href="#">telegram</a>,{' '}
                          <a href="#">twitter</a>, <a href="#">linkedin</a>,{' '}
                          <a href="#">whatsapp</a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Reviews data={id} />
                      <Comments data={id} />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="d-block d-sm-none py-3">
              <Container>
                <Row>
                  <Col className="p-2">
                    <div className="blog-single-item">
                      <img src={i.frame} alt="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="p-3">
                      <h3>{i.title}</h3>
                      <p>{i.description}</p>
                      <div className="share-post">
                        <span>
                          Share on: <a href="#">telegram</a>,{' '}
                          <a href="#">twitter</a>, <a href="#">linkedin</a>,{' '}
                          <a href="#">whatsapp</a>
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="py-3">
                      <Reviews data={id} />
                      <Comments data={id} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        )
      })}
      <Footer />
    </>
  )
}
