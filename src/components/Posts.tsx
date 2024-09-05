import { usePosts } from "@/API/usePosts";
import { PostSkeleton } from "./PostSkeleton";
import Header from "./Header";
import { postModel } from "@/Helper/userModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ChatIcon } from "./Utility/Icons";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  HeartFilledIcon,
  HeartIcon,
} from "@radix-ui/react-icons";

import { dateParser } from "@/Helper/dateParser";
import { bookmarkPost } from "@/API/bookmarkPost";
import { useStore } from "@/store";
import { likePost } from "@/API/likePost";
import { useEffect } from "react";
import { checkAuth } from "@/API/checkAuth";

const Posts = () => {
  const {  loading, error } = usePosts();
  useEffect(()=>{
    checkAuth()
  },[])

  const posts = useStore((state) => state.posts); // Access posts from the store
  const updatePostBookmark = useStore((state) => state.updatePostBookmark);
  const updatePostLike = useStore((state) => state.updatePostLike);
  if (loading) {
    return <PostSkeleton></PostSkeleton>;
  }
  if (error) {
    return <>Sorry.. Response not found</>;
  }
  return (
    <div className="w-1/2">
      {posts?.map((post: postModel) => {
        return (
          <div className="flex flex-start flex-col">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/mahenvs" alt="@shadcn" />
                <AvatarFallback>{post.username}</AvatarFallback>
              </Avatar>
              <span>{post?.username}</span>
            </div>
            <section>
              <Header variant="h3" className=" font-extrabold">
                {post?.title}
              </Header>
              <span>{post?.description}</span>
            </section>
            <footer className="flex gap-4 justify-between">
              <div className="flex items-center gap-4 ">
                <span>
                  {dateParser(post?.createdat ?? new Date().toISOString())}
                </span>
                <span className="cursor-pointer">
                  <ChatIcon />
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="cursor-pointer">
                  {!post?.isbookmarked ? (
                    <span
                      onClick={() => {
                        bookmarkPost(post?.id, "bookmark", !post?.isbookmarked,updatePostBookmark);
                      }}
                    >
                      <BookmarkIcon className="size-6" />
                    </span>
                  ) : (
                    <span onClick={() => {
                      bookmarkPost(post?.id, "NA", !post?.isbookmarked,updatePostBookmark) 
                      }}>
                      <BookmarkFilledIcon className="size-6" />
                    </span>
                  )}
                </span>
                <span className="cursor-pointer">
                {!post?.isliked ? (
                    <span
                      onClick={() => {
                        likePost(post?.id, "bookmark", !post?.isliked,updatePostLike);
                      }}
                    >
                      <HeartIcon className="size-6" />
                    </span>
                  ) : (
                    <span onClick={() => {
                      likePost(post?.id, "NA", !post?.isliked,updatePostLike) 
                      }}>
                      <HeartFilledIcon className="size-6" />
                    </span>
                  )}

                  {/* {post?.likes} */}
                </span>
              </div>
              {/* <BookmarkFilledIcon className="size-6"/> */}
            </footer>
            <Separator className="my-4" />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
