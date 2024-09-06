import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
  variant,
  onClick,
}) => {
  let classIs = "text-2xl";

  if (variant == "h1") {
    classIs = "text-4xl";
  } else if (variant == "h2") {
    classIs = "text-3xl";
  } else if (variant == "h3") {
    classIs = "text-2xl";
  } else if (variant == "h4") {
    classIs = "text-xl";
  }
  return (
    <div className={` text-gray-800 ${className} ${classIs}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Header;
