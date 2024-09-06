import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const DisplayAvatar = ({ username }: { username: string }) => {
  return (
    <Avatar className="bg-black">
      <AvatarImage src="https://github.com/mahenvs" alt="@shadcn" />
      <AvatarFallback className="text-black ">{username.toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default DisplayAvatar;
