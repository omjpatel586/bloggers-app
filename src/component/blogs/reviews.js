import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

export const Reviews = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch(`https://omcdmiweb.000webhostapp.com/React.js_Project_API./getComments.php?id=${props.data}`)
            .then((resp) => resp.json())
            .then((fetch) => {
                setdata(fetch)
            })
    }, [])

    useEffect(()=>{
        data.map((i,j)=>{
            if(j%2===1) {
                document.getElementById("r-"+j).style.marginLeft = "100px"
            }
        })
    })

    return (
        <>
            <div className="blog-comments">
                <Container>
                    <h2>{data.length} Comments</h2>
                    <ul className="coments-content">
                        {
                            data.map((i,j) => {
                                return (
                                    <li className="first-comment-item" id={"r-"+j}>
                                        <span className="author-title" style={{color: "gray", textTransform: "capitalize"}}>{i.name}</span>
                                        <span className="comment-date">{i.datetime} / <a href="#">Reply</a>
                                        </span>
                                        <p style={{color: "gray"}}>{i.comment}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Container>
            </div>
        </>
    )
}