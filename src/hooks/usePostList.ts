import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const usePostList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [userId, setUserId] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  }, []);

  return {
    postList,
    userId,
    errorMessage,
    setUserId,
  };
};
