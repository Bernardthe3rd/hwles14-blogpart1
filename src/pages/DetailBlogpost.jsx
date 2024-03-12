import {Link, useParams} from "react-router-dom";
import posts from "../constants/data.json"
import {dateFormat} from "../helpers/dateFormat.js";

const DetailBlogpost = () => {
    const { id} = useParams();

    const newId = posts.find(post => {
        return post.id.toString() === id;
    })
    console.log(newId)


    return (
        <>
            {/*<p>{id}</p>*/}
            <article className={""}>
                <h1>{newId.title}</h1>
                <h2>{newId.subtitle}</h2>
                <p>Geschreven door {newId.author} op {dateFormat(newId.created)}</p>
                <p>{newId.content}</p>
                <p>{newId.comments} reactie - {newId.shares} keer gedeeld</p>
                <Link to={"/posts"} className={"link-title"}>Terug naar de overzichtpagina</Link>
            </article>
        </>
    );
};

export default DetailBlogpost;