import { usePosts } from "@/API/usePosts";
import { PostSkeleton } from "./PostSkeleton";
import Header from "./Header";
import { postModel } from "@/Helper/userModel";

import { Separator } from "@/components/ui/separator";
import { useStore } from "@/store";
import DisplayAvatar from "./DisplayAvatar";
import PostFooter from "./PostFooter";


const Posts = () => {
  const { loading, error } = usePosts();

  const posts = useStore((state) => state.posts); // Access posts from the store
  
  if (loading) {
    return <PostSkeleton></PostSkeleton>;
  }
  if (error) {
    return <Header>Check your Network and try again..</Header>;
  }
  return (
    <div className="w-1/2">
      {posts?.map((post: postModel) => {
        return (
          <div className="flex flex-start flex-col" key={post.title}>
            <div className="flex items-center gap-4">
              <DisplayAvatar username={post.username} />

              <span>{post?.username}</span>
            </div>
            <section>
              <Header variant="h3" className=" font-extrabold">
                {post?.title}
              </Header>
              <span>{post?.description}</span>
            </section>
            <PostFooter post={post} />
            <Separator className="my-4" />
          </div>
        );
      })}
      {/* <Outlet/> */}
    </div>
  );
};

export default Posts;
