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
        "https://api.mangadex.org/at-home/server/885f6206-7713-4c3d-be91-2e53ac17e2a0",
        {
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   Accept: " /",
          //   "Accept-Encoding": " gzip, deflate, br",
          //   "Accept-Language": " en-US,en;q=0.9",
          //   Connection: " keep-alive",
          //   Host: "api.mangadex.org",
          //   Origin: "https://mangadex.org/",
          //   Priority: "u=3, i",
          //   Referer: "https://mangadex.org/",
          //   "Sec-Fetch-Dest": "empty",
          //   "Sec-Fetch-Mode": "cors",
          //   "Sec-Fetch-Site": "same-site",
          //   "User-Agent":
          //     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
          // },
        }
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
      <h1>COVER:</h1>
      <img src="https://mangadex.org/covers/b802b061-8166-42d0-b2e2-7679c121cfb3/3c1ba692-edc3-41f8-af4f-f3b5f3f848b9.png.512.jpg" />
    </div>
  );
}

export default App;
