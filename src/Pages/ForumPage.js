import React, { useLayoutEffect, useState } from "react";

export default function ForumPage() {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:8080/api/getforum")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("resp =>", resp.data);
        setData(resp.data);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          paddingTop: "200px",
          paddingBottom: "100px",
        }}
      >
        {data.map((forum) => (
          <div
            style={{
              width: "300px",
              height: "90px",
              color: "white",
              background: "blue",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <p>
              from <span> {forum.name} </span>{" "}
            </p>
            <p> {forum.request} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
