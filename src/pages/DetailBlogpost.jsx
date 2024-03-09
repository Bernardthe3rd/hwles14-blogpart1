import {useParams} from "react-router-dom";

const DetailBlogpost = () => {
    const { id } = useParams()

    return (
        <>
            <p>{id}</p>
        </>
    );
};

export default DetailBlogpost;