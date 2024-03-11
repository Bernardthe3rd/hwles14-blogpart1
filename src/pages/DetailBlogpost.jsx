import {useParams} from "react-router-dom";
import posts from "../constants/data.json"

const DetailBlogpost = () => {
    const { id} = useParams();

    return (
        <>
            <p>{id}</p>
            <h1>{posts[0].title}</h1>
        </>
    );
};

export default DetailBlogpost;