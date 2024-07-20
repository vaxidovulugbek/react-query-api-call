import React, { useState } from "react";
import { usePostData } from "./hooks/usePostData";

function PostRequest() {
  const [postData, setPostData] = useState({
    title: "foo",
    body: "bar",
    userId: 1
}); // POST uchun yuboriladigan ma'lumot

  const { mutate, isLoading, isError, error, data } = usePostData({
    onSuccess: (data) => {
      console.log("Data received:", data);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
    },
  });

  const handlePost = () => {
    mutate(postData); // POST so'rovini yuborish
  };
  return (
    <div>
      <button onClick={handlePost}>
        request sent {isLoading ? "Loading..." : "Send POST Request"}
      </button>
      <p>
        {isError && <div>Error: {error.message}</div>}
        {data && <div>Response: {JSON.stringify(data)}</div>}
      </p>
    </div>
  );
}

export default PostRequest;
