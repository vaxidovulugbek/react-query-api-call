import { useEffect } from "react";
import "./App.css";
import { useFetchOne } from "./hooks/useFetchOne";
import config from "./config";
import { usePostData } from "./hooks/usePostData";
import PostRequest from "./components/PostRequest";
import axios from "axios";
import DeleteRequest from "./components/DeleteRequest";

function App() {
  const { data, refetch, isLoading, isError } = useFetchOne({
    url: "https://api.restful-api.dev/objects",
    queryOptions: {
      enabled: false,
    },
    urlSearchParams: { include: "" },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"; // JSONPlaceholder API manzili
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Muvaffaqiyatli:", response.data);
    } catch (error) {
      console.error("Xato yuz berdi:", error);
    }
  };

  return (
    <div className="App">
      kjkj
      <h1>Base URL: {config.baseUrl}</h1>
      <p>Language Code: {config.lngCode}</p>
      <p>Theme: {config.theme}</p>
      <button onClick={handleClick}>POST So'rovini yuborish</button>
      <button onClick={() => console.log(data)}>
        get request datani korish
      </button>
      <PostRequest />
      <DeleteRequest />
    </div>
  );
}

export default App;
