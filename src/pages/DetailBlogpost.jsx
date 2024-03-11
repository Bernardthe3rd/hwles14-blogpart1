import {Link, useParams} from "react-router-dom";
import posts from "../constants/data.json"
// import {dateFormat} from "../helpers/dateFormat.js";

const DetailBlogpost = () => {
    const { id} = useParams();
    console.log(posts[0])
    // const postsId = posts.map(post => {
    //     return post.id.toString()
    // })

    // const isIdinArray = postsId.includes(id);
    // console.log(posts[id].title)

    return (
        <>
            <p>{id}</p>
            <article className={"outer-container"}>
                <h1>{posts[id].title}</h1>
                <h2>{posts[id].subtitle}</h2>
                <p>Geschreven door {posts[id].author} op {posts[id].created}</p>
                <p>{posts[id].content}</p>
                <p>{posts[id].comments} reactie - {posts[id].shares} keer gedeeld</p>
                <Link to={"/posts"}>Terug naar de overzichtpagina</Link>
            </article>

            {/*{isIdinArray ? (<p>hij zit erin {posts[id].title}</p>) : (<p>hij zit er niet in</p>)}*/}
        </>
    );
};

export default DetailBlogpost;