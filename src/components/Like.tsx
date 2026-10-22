import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

export const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  if (isLiked) return <FcLike onClick={() => setIsLiked(false)} />;
  return <FcLikePlaceholder onClick={() => setIsLiked(true)} />;
};
