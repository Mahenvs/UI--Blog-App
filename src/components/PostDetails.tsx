import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "react-router-dom"
import DisplayAvatar from "./DisplayAvatar";
import Header from "./Header";
import PostFooter from "./PostFooter";
import { Separator } from "@radix-ui/react-menubar";
import { CommentCard } from "./CommentCard";
import TextBox from "./TextBox";
import { useState } from "react";

const PostDetails = () => {
  const location = useLocation();

  console.log(location.state);
  const [inputVal, setValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const post1 = location.state;
  const { username ,title,description} = location.state?.post
  
  const isAuthenticated = useAuth(); 
  console.log(isAuthenticated);
  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    console.log(event.target.value);
    setValue(event.target.value);
    setClicked(true)
  };
  return (
    <div className="w-1/2">
    {/* {posts?.map((post: postModel) => {
      return ( */}
        <div className="flex flex-start flex-col">
          <div className="flex items-center gap-4">
            <DisplayAvatar username={username} />

            <span>{username}</span>
          </div>
          <section>
            <Header variant="h3" className=" font-extrabold">
              {title}
            </Header>
            <span>{description}</span>
          </section>
          <PostFooter post={post1} />
          <TextBox onChange={handleInputChange} value={inputVal} isClicked={clicked} />
          <CommentCard />
          <Separator className="my-4" />
        </div>
      {/* ); */}
    {/* })} */}
    {/* <Outlet/> */}
  </div>
  )
}

export default PostDetails