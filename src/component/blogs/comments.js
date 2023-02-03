import axios from "axios"
import { Container } from "react-bootstrap"

export const Comments = (props) => {
    const handleSubmit = () => {
        const form = document.getElementById('form')
        const comt = [form.elements[0].value, form.elements[1].value,
        form.elements[2].value]
        const fdata = new FormData()
        let date = new Date()
        date = date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        fdata.append("cid", props.data)
        fdata.append("name", comt[0])
        fdata.append("subject", comt[1])
        fdata.append("comments", comt[2])
        fdata.append("datetime", date)
        axios.post("https://omcdmiweb.000webhostapp.com/React.js_Project_API./addComments.php", fdata)
            .then(function () {
                window.location.reload()
            })
    }

    return (
        <div>
            <Container>
                <div className="submit-comment col-sm-12">
                    <h2>Leave A Comment</h2>
                    <form onSubmit={handleSubmit} id="form">
                        <div className="d-flex">
                            <div className=" col-md-4 col-sm-4 col-xs-6">
                                <input type="text" placeholder="Name :-" className="blog-search-field"></input>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <input type="text" placeholder="Subject :-" className="blog-search-field"></input>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <textarea placeholder="Comment...."></textarea>
                        </div>
                        <div className="submit-comment col-md-12">
                            <div className="btn-black">
                                <input type="submit" className="btn btn-dark text-white fs-6" value="Submit"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}