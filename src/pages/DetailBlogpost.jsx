import {useParams} from "react-router-dom";
import posts from "../constants/data.json"

const DetailBlogpost = () => {
    const { id} = useParams();
    console.log(posts.title)

    return (
        <>
            <p>{id}</p>
            <h1>{posts.title}</h1>
        </>
    );
};

export default DetailBlogpost;