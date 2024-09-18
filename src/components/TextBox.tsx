import React, { useEffect, useRef } from "react";

type inputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  isClicked: boolean
};
const TextBox = ({ onChange, value ,isClicked}: inputProps) => {
  const textareaRef = useRef(null);
  const extraLines = 2; // Number of extra lines to leave at the bottom
console.log(isClicked);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // textarea.style.height = '20px';
      // textarea.style.height = `${textarea.scrollHeight + extraLines * parseFloat(getComputedStyle(textarea).lineHeight)}px`;
    }
  }, [value,isClicked]);

  return (
    <div>
      <textarea
        ref={textareaRef}
        className={ `w-full resize-none border rounded-full max-h-max text-lg p-2 mb-10  outline-none z-1 ${isClicked} ? "h-40" : "h-12"`}
        onChange={onChange}
        placeholder="Add a comment"
        value={value}
      />
    </div>
  );
};

export default TextBox;
