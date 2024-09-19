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
        console.log(data);
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
      <img src="https://cmdxd98sb0x3yprd.mangadex.network/data/5f4b6735fff5c0dab71a08854c72aa31/12-53b72b726cfc466c234777d931c11f7da74bc17b1df3cfd942ad752dad5ff49b.jpg" />
      <img src={page} />
      <img src="https://mangadex.org/covers/1d2967dd-d157-4cbb-84ed-ea7cf7140d14/1a3f4936-b317-4baa-ba52-d406725c98cd.jpg" />
    </div>
  );
}

export default App;
