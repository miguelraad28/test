import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //const [cover, setCover] = useState("");
  const [page, setPage] = useState("");
  //const baseUrl = "https://api.mangadex.org";

  useEffect(() => {
    axios
      .get(
        "https://api.mangadex.org/at-home/server/885f6206-7713-4c3d-be91-2e53ac17e2a0"
      )
      .then(({ data }) => {
        const url = data.baseUrl;
        const hash = data.chapter.hash;
        const fileName = data.chapter.data[4];
        const pageUrl = `${url}/data/${hash}/${fileName}`;
        setPage(pageUrl);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="container">
      <img src="https://cmdxd98sb0x3yprd.mangadex.network/data/5f4b6735fff5c0dab71a08854c72aa31/1-4ce7c5bd3f24af3527348d79f177df2df3171c1cb9fad695c5368d50672595b9.jpg" />
      <img src={page} />
    </div>
  );
}

export default App;
