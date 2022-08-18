import { useEffect } from "react";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { selectFeed } from "../../store/feed/selector";
import { fetchPosts } from "../../store/feed/thunks";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeed);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <div className="container">
      <h1> All Posts</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          id={post.id}
          title={post.title}
          createdAt={post.createdAt}
          tags={post.tags}
        />
      ))}
      <Button variant="primary" onClick={() => dispatch(fetchPosts)}>
        More Posts
      </Button>
    </div>
  );
};
export default HomePage;
