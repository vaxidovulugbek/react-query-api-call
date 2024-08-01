import React, { useState } from "react";
import { useDeleteData } from "../hooks/useDeleteData";

function DeleteRequest() {
  const [deleteId, setDeleteId] = useState(1); // DELETE uchun yuboriladigan ID

  const { mutate, isLoading, isError, error, data } = useDeleteData({
    onSuccess: (data) => {
      console.log("Data received:", data);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
    },
  });

  const handleDelete = () => {
    mutate(deleteId); // DELETE so'rovini yuborish
  };

  return (
    <div>
      <button onClick={handleDelete}>
        {isLoading ? "Loading..." : "Send DELETE Request"}
      </button>
      <p>
        {isError && <div>Error: {error.message}</div>}
        {data && <div>Response: {JSON.stringify(data)}</div>}
      </p>
    </div>
  );
}

export default DeleteRequest;
