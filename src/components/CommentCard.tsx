import React, {  useState } from "react";
// import "./CommentCard.css";
import TextBox from "./TextBox";
import { Card } from "./ui/card";
type CommentCardProps = {
  comment: commentProps;
};
export interface commentProps {
  title: string;
  content: string;
  author: string;
  totalLikes: number;
  createdDate: string;
  children1: commentProps[];
}
export const CommentCard = () => {
  // console.log(comment);
  // const { title, content, author } = comment;
  const title="titlt";
   const content="yguhjknkguihbjnmbhgb"
   const author="1"
  const [inputVal, setValue] = useState("");
  // console.log(comment.children1);
  const [replyBox, setReplyBox] = useState(false);
  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <Card>
      <div className="comment color_white ">
        <p className=" ">👳{author}</p>
        <div className="verticalLine  ">
          <div className="flex flex-col justify-start gap-4">
            <div className="m-2 flex gap-4 items-start">
              <p>{content}</p>
              <div className="flex flex-row items-end space-x-1">
                <svg
                  fill="currentColor"
                  height="16"
                  icon-name="comment-outline"
                  viewBox="0 0 20 20"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>
                </svg>
                <button
                  className="small  items-end"
                  onClick={() => setReplyBox(!replyBox)}
                >
                  Reply
                </button>
              </div>
            </div>
            {replyBox && (
              <div className="ml-2 relative ">
                <TextBox onChange={handleInputChange} value={inputVal} />
                <div className="buttonGroup absolute -mt-10 mr-2 z-20 right-0 gap-2 flex flex-row">
                  <div className="border border-stone-600 hover:bg-stone-700 focus:outline-none rounded-lg flex justify-center items-center px-4  transition duration-300 ease-in-out">
                    <button
                      className="text-white hover:text-gray-200 focus:outline-none border-none outline-none  rounded-lg py-[0.2rem]"
                      onClick={() => setReplyBox(!replyBox)}
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="bg-blue-900 hover:bg-blue-800 focus:outline-none rounded-lg flex justify-center items-center px-4 transition duration-300 ease-in-out">
                    <button className="text-white hover:text-gray-200 focus:outline-none  rounded-lg py-[0.2rem]">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {comment?.children1 && <header className="">Replies </header>} */}
      <div className="replies">
        {/* {comment?.children1 &&
          comment?.children1.map((item, index) => (
            <CommentCard comment={item} key={index}></CommentCard>
          ))} */}
      </div>
    </Card>
  );
};
