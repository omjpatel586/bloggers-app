import { Blogs } from "./component/blogs"
import { Footer } from "./component/footer"
import { Header } from "./component/header"

export const Home = () => {
    return (
        <>
            <Header />
            <Blogs />
            <Footer />
        </>
    )
}