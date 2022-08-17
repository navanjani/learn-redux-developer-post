import { useEffect } from "react";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { selectFeed } from "../../store/feed/selector";
import { fetchPosts } from "../../store/feed/thunk";
import moment from "moment";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeed);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);
  return (
    <div className="container">
      <h1> All Posts</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          createdAt={post.createdAt}
          tags={post.tags}
        />
      ))}
    </div>
  );
};
export default HomePage;
