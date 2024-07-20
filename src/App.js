import { useEffect } from 'react';
import './App.css';
import { useFetchOne } from './hooks/useFetchOne';
import config from './config';
import { usePostData } from './hooks/usePostData';
import PostRequest from './PostRequest';
import axios from 'axios';

function App() {
  const { data, refetch, isLoading, isError } = useFetchOne({
		url: `/1`,
		queryOptions: {
			enabled: false,
		},
		urlSearchParams: { include: "" },
	});
  useEffect(()=> {
    console.log(data);
  }, [data])


  const handleClick = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"; // JSONPlaceholder API manzili
    const data = {
        title: "foo",
        body: "bar",
        userId: 1
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json"
            }
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
      <PostRequest />
    </div>
  );
}

export default App;
