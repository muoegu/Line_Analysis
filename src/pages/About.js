import React, { component } from "react";
import "../Uploads/uploads.css";
import { useState } from "react";
import "../App.css";

function ImageUpload() {
  const [VLAU, setVLAU] = useState("");
  const [conasfoa, setconasfoa] = useState("");

  const Maikaload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVLAU(reader.result);
    };
    let files = event.target.value;

    if (files.length === 0) return;

    const [file] = event.target.files;
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        setconasfoa(reader.result);
      },
      false
    );

    if (file) {
      // console.log(typeof file);
      reader.readAsText(file);
    }

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
    setconasfoa(reader.result);
  };
  console.log(VLAU);
  return (
    <div>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Document</title>
        <link rel="stylesheet" href="style.css"></link>
      </head>
      <body>
        <div>
          <input type="file" onChange={Maikaload}></input>
          <textarea cols="30" rows="20" value={conasfoa}></textarea>
        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}

export default ImageUpload;
