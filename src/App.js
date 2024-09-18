// import { useState } from 'react';

// export default function App() {
//   const [memeTemplate, setMemeTemplate] = useState('doge');
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [memeList, setMemeList] = useState(
//     `https://memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
//   );

//   function generateMeme() {
//     // const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;

//     const url = `https://memegen.link/images/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

//     setMemeList(url);
//   }

//   const downloadMeme = () => {
//     // const url = `https://memegen.link/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;
//     // setMemeList(url);
//     // console.log(url);
//     // console.log(memeList);

//     const link = document.createElement('a');
//     link.href = `https://memegen.link/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

//     console.log(link);
//     // link.download = `${memeTemplate}/${topText}/${bottomText}.png`;

//     link.download = `https://memegen.link/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

//     console.log(link.download);
//   };

//   return (
//     <div>
//       <h1>React Meme Generator</h1>

//       <label>
//         Top text:
//         <input
//           onChange={(event) => setTopText(event.currentTarget.value)}
//           value={topText}
//           placeholder="top text"
//         />
//       </label>
//       <br />

//       <label>
//         Bottom text:
//         <input
//           onChange={(event) => setBottomText(event.currentTarget.value)}
//           value={bottomText}
//           placeholder="bottom text"
//         />
//       </label>
//       <br />

//       <label htmlFor="meme-template">Meme template</label>
//       <input
//         id="meme-template"
//         value={memeTemplate}
//         onChange={(event) => setMemeTemplate(event.currentTarget.value)}
//       />

//       <button onClick={generateMeme}>Preview</button>

//       <div>
//         {memeList === '' ? (
//           <img data-test-id="meme-image" src={memeList} alt="Generated meme" />
//         ) : (
//           <img
//             data-test-id="meme-image"
//             src={`https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`}
//             alt="Generated meme"
//           />
//         )}

//         {/* <img
//           data-test-id="meme-image"
//           src={memeList}
//           alt="Generated meme"
//           loading="lazy"
//           width="200"
//           height="200"
//         /> */}

//         <button onClick={downloadMeme}>Download</button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';

const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState('');

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleMemeTemplateChange = (e) => {
    setMemeTemplate(e.target.value);
  };

  const generateMeme = () => {
    const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;

    // const blob = await response.blob();
    // const url = URL.createObjectURL(blob);

    setMemeUrl(url);
  };

  const downloadMeme = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = memeUrl
      ? `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`
      : memeUrl;
    link.download = `${memeTemplate}.png`;
    link.target = '_blank';
    console.log(link.href);
    console.log(link.download);
    link.click();
  };

  return (
    <div>
      <label htmlFor="top-text">Top text:</label>
      <input id="top-text" value={topText} onChange={handleTopTextChange} />

      <label htmlFor="bottom-text">Bottom text:</label>
      <input
        id="bottom-text"
        value={bottomText}
        onChange={handleBottomTextChange}
      />

      <label htmlFor="meme-template">Meme template:</label>
      <input
        id="meme-template"
        value={memeTemplate}
        onChange={handleMemeTemplateChange}
      />

      <button onClick={generateMeme}>Preview</button>

      <div>
        <img data-test-id="meme-image" src={memeUrl} alt="Generated meme" />
      </div>

      <button onClick={downloadMeme}>Download</button>
    </div>
  );
};

export default MemeGenerator;
