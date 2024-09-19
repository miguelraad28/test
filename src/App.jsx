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
          headers: {
            host: "localhost",
            port: 3000,
            // Authorization:
            //   "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHSHg0Qmk2THhvdVRGLWZuQmg0WXhMbUtUbGZzT2tmTm9fQ05yT1pMZHNrIn0.eyJleHAiOjE3MjY3NjUwNDcsImlhdCI6MTcyNjc2NDE0NywiYXV0aF90aW1lIjoxNzI2NzYzMTc4LCJqdGkiOiIwOTNkZjMzMC0xOWNjLTQ0NjMtOGExOC0wMjRmYjY0Y2E3YWYiLCJpc3MiOiJodHRwczovL2F1dGgubWFuZ2FkZXgub3JnL3JlYWxtcy9tYW5nYWRleCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI4NjM3M2YyYS1jZjJkLTQ5ODktYTljYS0zOWVmOGEwOWZmNjIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtYW5nYWRleC1mcm9udGVuZC1zdGFibGUiLCJzZXNzaW9uX3N0YXRlIjoiNjg5ZjQxNmQtZGE0Ny00OWNiLTg0ODctMmY0NWJhNTBlNjUzIiwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGdyb3VwcyBlbWFpbCBwcm9maWxlIiwic2lkIjoiNjg5ZjQxNmQtZGE0Ny00OWNiLTg0ODctMmY0NWJhNTBlNjUzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInJvbGVzIjpbIlJPTEVfVVNFUiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW1hbmdhZGV4Il0sImdyb3VwcyI6WyJHUk9VUF9VU0VSIl0sInByZWZlcnJlZF91c2VybmFtZSI6InlhZmltcGljbyIsImVtYWlsIjoieWFmaW1waWNvQGdtYWlsLmNvbSJ9.xZ1HhR4DMByHf8HT4oTchEZJTQeyNnA5tOjhGCOic_Vz80-5lyF2nzoQPlE2trrnDmyNhUM1d_FDekt2EYEqnzu3OVO67Nq3Z0EZlFXUSyXPzk-mIJLzY9zZ9M5I8Fv66_2A4wwBVYqA8CfbgAjZ-g9l2Q9dckM7CKt6VgqE5Xkt-cNhQ6T1Ks8xgugLrKiH-0xwwlxnnYCGRWhURkqfBgZl63FP745Upqu0FWqotDc2JW55px3aEPTLbzhMWlvIAT4fJQP67G2aJFvoIkTx2lP8joOd_QgTteLUd8fR2TvhrLDqKJoO5_MfT8dpO1En1oac01drTDb1Vwy909z7dA",
          },
          // headers: {
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
        const fileName = data.chapter.data[0];
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
