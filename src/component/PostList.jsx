import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError,setIsError]=useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await axios.get('https://ddcf6b223ce91026.mokky.dev/post/');
        setPosts(response.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);
  if (isError){
    return <Error/>;
  }

  return (
    <div class="all-home-block">
      {isLoading ? (
        <LoadingPost />
      ) : (
        <>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div>No posts available.</div>
          )}
        </>
      )}
    </div>
  );
}

export default PostList;
