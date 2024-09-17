import { useState, useEffect } from 'react';

export default function App() {
  const [memeList, setmemeList] = useState('');
  const [randomImg, setRandomImg] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');

  const url = 'https://api.memegen.link/templates/';

  // useEffect(() => {
  //   async function getMemesApi() {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setmemeList(data);
  //     } catch (error) {
  //       console.error('Error fetching memes:', error);
  //     }
  //   }
  //   getMemesApi();
  // }, []);

  //   // function memesHandler() {
  //   //   // const randomNumber = Math.floor(Math.random() * memeList.length);
  //   //   // let randomMemeURL = memeList[randomNumber].attributes.data.attributes.url;
  //   //   // setrandomMeme(randomMemeURL);
  //   //   // const rand = memeList[Math.floor(Math.random() * memeList.length)].url;
  //   //   // setRandomImg(rand);
  //   //   // Create an image element and append it to the body
  //   //   // const img = document.createElement('img');
  //   //   // img.src = rand;
  //   //   // document.body.appendChild(img);
  //   //   // console.log(rand);
  //   // }

  function generateMeme() {
    // event.preventDefault();
    // const rand = memeList[Math.floor(Math.random() * memeList.length)].url;

    // const a = `{${rand}/`;

    // console.log(rand);
    // setRandomImg(rand);

    const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
    setmemeList(url);

    console.log(url);

    //     // const topText = event.target.elements.search.value;
    //     // const bottomText = event.target.elements.search.value;
    //     // const rand = memeList[Math.floor(Math.random() * memeList.length)].url;
    //     // setRandomImg(`${rand}?top=${topText}&bottom=${bottomText}`);
    //     // event.target.elements.search.value = '';
  }

  return (
    <div>
      <h1>Memes</h1>

      <label>
        Top text:
        <input
          onChange={(event) => setTopText(event.target.value)}
          value={topText}
          placeholder="top text"
          type="text"
        />
      </label>
      <br />

      <label>
        Bottom text:
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
          placeholder="bottom text"
          type="text"
        />
      </label>
      <br />

      <label htmlFor="meme-template">Meme template</label>
      <input
        id="meme-template"
        type="text"
        value={memeTemplate}
        onChange={(event) => setMemeTemplate(event.target.value)}
      />

      <button onClick={generateMeme}>Preview</button>

      {/* <button type="submit">Fetch Memes</button> */}

      <div>{memeList && <img src={memeList} data-test-id="meme-image" />}</div>
    </div>
  );
}

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';

// export default function App() {
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [memeTemplate, setMemeTemplate] = useState('doge');
//   const [memeUrl, setMemeUrl] = useState('');

//   const handleTopTextChange = (e) => {
//     setTopText(e.target.value);
//   };

//   const handleBottomTextChange = (e) => {
//     setBottomText(e.target.value);
//   };

//   const handleMemeTemplateChange = (e) => {
//     setMemeTemplate(e.target.value);
//   };

//   const generateMeme = () => {
//     const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
//     setMemeUrl(url);
//   };

//   const downloadMeme = () => {
//     const link = document.createElement('a');
//     link.href = memeUrl;
//     link.download = `${memeTemplate}.png`;
//     link.click();
//   };

//   return (
//     <div className="App">
//       <label htmlFor="top-text">Top text</label>
//       <input
//         id="top-text"
//         type="text"
//         value={topText}
//         onChange={handleTopTextChange}
//       />

//       <label htmlFor="bottom-text">Bottom text</label>
//       <input
//         id="bottom-text"
//         type="text"
//         value={bottomText}
//         onChange={handleBottomTextChange}
//       />

//       <label htmlFor="meme-template">Meme template</label>
//       <input
//         id="meme-template"
//         type="text"
//         value={memeTemplate}
//         onChange={handleMemeTemplateChange}
//       />

//       <button onClick={generateMeme}>Preview</button>

//       {memeUrl && (
//         <img data-test-id="meme-image" src={memeUrl} alt="Generated meme" />
//       )}

//       <button onClick={downloadMeme}>Download</button>
//     </div>
//   );
// }
