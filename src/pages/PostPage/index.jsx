import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { fetchPost } from "../../store/postPage/thunks";
import { selectPostAndComments } from "../../store/postPage/selector";

const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);
  if (!postData)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  const { post, comments } = postData;

  return (
    <div>
      <Link to="/">
        <h3>Back</h3>
      </Link>
      {<h1>{post.title}</h1>}
    </div>
  );
};
export default PostPage;
