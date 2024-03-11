import posts from "../constants/data.json"
import {Link} from "react-router-dom";

const Overview = () => {
    console.log(posts)

    return (
        <>
            <h1>Bekijk alle {posts.length} posts op het platform!</h1>

            <ul>
                {posts.map(post => {
                    return <li key={post.id} className={"inner-container"}>
                        <Link to={`/posts/${post.id}`} className={"default-nav-link link-title"}>{post.title}</Link>
                        <p>({post.author})</p>
                        <p>{post.comments} reactie - {post.shares} keer gedeeld</p>
                    </li>
                })}
            </ul>
        </>
    );
};

export default Overview;