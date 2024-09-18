import { dateParser } from "@/Helper/dateParser";
import { postModel } from "@/Helper/userModel";
import { ChatIcon } from "./Utility/Icons";
import { bookmarkPost } from "@/API/bookmarkPost";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  HeartFilledIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import { likePost } from "@/API/likePost";
import { useStore } from "@/store";
import { useNavigate } from "react-router-dom";

const PostFooter = ({ post }: { post: postModel }) => {

    const navigate = useNavigate()
    const postDetailHandler = (post) =>{
        console.log(post);
        const {id,title,username} = post
        console.log(`${username}/comments/id/${title}`);
        
        // :user/comments/:postId/:postTitle
        navigate(`/posts/${username}/comments/${id}/${title}`, {
            state:{
                post:post
            }
        });
    }
  const updatePostBookmark = useStore((state) => state.updatePostBookmark);
  const updatePostLike = useStore((state) => state.updatePostLike);
  return (
    <footer className="flex gap-4 justify-between">
      <div className="flex items-center gap-4 ">
        <span>{dateParser(post?.createdat ?? new Date().toISOString())}</span>
        <span className="flex items-center cursor-pointer"
        onClick={() => postDetailHandler(post)}>
          <ChatIcon /> {"1"}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">
          {!post?.isbookmarked ? (
            <span
              onClick={() => {
                bookmarkPost(
                  post?.id,
                  "bookmark",
                  !post?.isbookmarked,
                  updatePostBookmark
                );
              }}
            >
              <BookmarkIcon className="size-6" />
            </span>
          ) : (
            <span
              onClick={() => {
                bookmarkPost(
                  post?.id,
                  "NA",
                  !post?.isbookmarked,
                  updatePostBookmark
                );
              }}
            >
              <BookmarkFilledIcon className="size-6 text-sky-700" />
            </span>
          )}
        </span>
        <span className="cursor-pointer">
          {!post?.isliked ? (
            <span
              onClick={() => {
                likePost(post?.id, "bookmark", !post?.isliked, updatePostLike);
              }}
            >
              <HeartIcon className="size-6" />
            </span>
          ) : (
            <span
              onClick={() => {
                likePost(post?.id, "NA", !post?.isliked, updatePostLike);
              }}
            >
              <HeartFilledIcon className="size-6 text-red-500" />
            </span>
          )}

          {/* {post?.likes} */}
        </span>
      </div>
    </footer>
  );
};

export default PostFooter;
