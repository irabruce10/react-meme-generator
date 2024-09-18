// import { useState } from 'react';

// export default function App() {
//   const [memeList, setMemeList] = useState(
//     'https://memegen.link/default-meme.png',
//   );
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [memeTemplate, setMemeTemplate] = useState('doge');

//   function generateMeme() {
//     const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
//     setMemeList(url);
//   }

//   const downloadMeme = () => {
//     const url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `${memeTemplate}.png`;
//     link.click();
//   };

//   return (
//     <div>
//       <h1>React Meme Generator</h1>

//       <label>
//         Top text:
//         <input
//           onChange={(event) => setTopText(event.target.value)}
//           value={topText}
//           placeholder="top text"
//         />
//       </label>
//       <br />

//       <label>
//         Bottom text:
//         <input
//           onChange={(event) => setBottomText(event.target.value)}
//           value={bottomText}
//           placeholder="bottom text"
//         />
//       </label>
//       <br />

//       <label htmlFor="meme-template">Meme template</label>
//       <input
//         id="meme-template"
//         value={memeTemplate}
//         onChange={(event) => setMemeTemplate(event.target.value)}
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
import html2canvas from 'html2canvas';
const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('default');

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleMemeTemplateChange = (e) => {
    setMemeTemplate(e.target.value);
  };

  const handleDownloadClick = () => {
    // eslint-disable-next-line no-restricted-syntax
    const node = document.querySelector('[data-test-id="meme-image"]');
    html2canvas(node).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'meme.png';
      link.click();
    });
  };

  return (
    <div>
      <h1>React Meme Generator</h1>
      <div>
        <label htmlFor="top-text">Top text:</label>
        <input id="top-text" value={topText} onChange={handleTopTextChange} />
      </div>
      <div>
        <label htmlFor="bottom-text">Bottom text:</label>
        <input
          id="bottom-text"
          value={bottomText}
          onChange={handleBottomTextChange}
        />
      </div>
      <div>
        <label htmlFor="meme-template">Meme template:</label>
        <input
          id="meme-template"
          value={memeTemplate}
          onChange={handleMemeTemplateChange}
        />
      </div>
      <img
        src={`https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`}
        alt="Generated meme"
        data-test-id="meme-image"
      />
      <button onClick={handleDownloadClick}>Download</button>
    </div>
  );
};

export default MemeGenerator;
