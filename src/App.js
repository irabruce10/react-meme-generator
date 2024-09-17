import { useState, useEffect } from 'react';

export default function App() {
  const [memeList, setmemeList] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');

  function generateMeme() {
    const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
    setmemeList(url);
  }

  return (
    <div>
      <h1>React Meme Generator</h1>

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
