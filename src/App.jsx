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
      {/* <img src="https://uploads.mangadex.org/covers/5a371d62-f10a-4caf-8158-dcfdb6954368/588230b7-eaa2-439a-8b54-8c0c994fdf1b.png.512.jpg" /> */}
      <img src={page} />
    </div>
  );
}

export default App;
