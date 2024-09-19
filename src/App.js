// import { useState } from 'react';

// export default function App() {
//   const [memeTemplate, setMemeTemplate] = useState('doge');
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [memeList, setMemeList] = useState(
//     `https://memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
//   );

//   function generateMeme() {
//     const url = `https://memegen.link/images/${memeTemplate}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

//     setMemeList(url);
//   }

//   const downloadMeme = () => {
//     generateMeme();

//     const link = document.createElement('a');

//     // if (!topText === '') {
//     //   link.href = `https://memegen.link/${memeTemplate}/${bottomText ? encodeURIComponent(bottomText) : ''}.png`;
//     //   console.log('top', link.href);
//     // } else if (!bottomText === '') {
//     //   link.href = `https://memegen.link/${memeTemplate}/${topText ? encodeURIComponent(topText) : ''}.png`;
//     //   console.log('btm', link.href);
//     // } else if (!memeTemplate === 'doge') {
//     //   link.href = `https://memegen.link/${memeTemplate}.png`;
//     //   console.log('tmpl', link.href);
//     // } else {
//     //   link.href = memeTemplate;
//     // }
//     // link.download = 'meme.png';

//     link.href = memeList;
//     console.log(link.href);

//     document.body.appendChild(link);
//     // link.click();
//     document.body.removeChild(link);
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

//       {/* <button onClick={generateMeme}>Preview</button> */}

//       <div>
//         {memeList === '' ? (
//           <img
//             data-test-id="meme-image"
//             src={`https://memegen.link/${memeTemplate}.png`}
//             alt="Generated meme"
//           />
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

import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const generateMeme = () => {
      let url = `https://memegen.link/${memeTemplate}/${topText ? encodeURIComponent(topText) : 'add'}/${bottomText ? encodeURIComponent(bottomText) : 'sad'}.png`;

      if (topText === '' && bottomText === '') {
        url = `https://memegen.link/${memeTemplate}.png`;
        console.log('tmpl', url);
      } else if (topText !== '' && bottomText === '') {
        url = `https://memegen.link/${memeTemplate}/${topText}.png`;
        console.log('top', url);
      } else if (bottomText !== '' && topText === '') {
        url = `https://memegen.link/${memeTemplate}/${bottomText}.png`;
        console.log('btm', url);
      } else if (topText !== '' && bottomText !== '') {
        url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
      } else if (memeTemplate === '') {
        alert('Please add template');
      } else {
        url = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.png`;
      }

      setMemeUrl(url);

      console.log(url);
    };

    generateMeme();
  }, [topText, bottomText, memeTemplate]);

  const downloadMeme = (e) => {
    e.preventDefault();

    const link = document.createElement('a');
    // link.href = `https://memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;

    if (topText === '' && bottomText === '') {
      link.href = `https://memegen.link/${memeTemplate}.png`;
      console.log('tmpl', link.href);
    } else if (topText !== '') {
      link.href = `https://memegen.link/${memeTemplate}/${topText}.png`;
      console.log('top', link.href);
    } else if (bottomText !== '') {
      link.href = `https://memegen.link/${memeTemplate}/${bottomText}.png`;
      console.log('btm', link.href);
    }
    console.log(link.href);
    link.download = `${memeTemplate}.png`;

    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>React Meme Generator</h1>
      <label htmlFor="top-text">Top text:</label>
      <input id="top-text" value={topText} onChange={handleTopTextChange} />
      <br />
      <br />

      <label htmlFor="bottom-text">Bottom text:</label>
      <input
        id="bottom-text"
        value={bottomText}
        onChange={handleBottomTextChange}
      />
      <br />
      <br />

      <label htmlFor="meme-template">Meme template:</label>
      <input
        id="meme-template"
        value={memeTemplate}
        onChange={handleMemeTemplateChange}
      />
      <br />
      <br />

      {memeUrl && (
        <div>
          <img
            data-test-id="meme-image"
            src={memeUrl}
            alt="Generated meme"
            width="300px"
          />
        </div>
      )}

      <button onClick={downloadMeme}>Download</button>
    </div>
  );
};

export default MemeGenerator;

// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [template, setTemplate] = useState('doge');
//   const memeImageUrl = `https://memegen.link/${template}/${topText ? encodeURIComponent(topText) : 'add'}/${bottomText ? encodeURIComponent(bottomText) : 'sad'}.png`;

//   const handleTemplateChange = (event) => {
//     setTemplate(event.target.value);
//   };

//   const handleDownload = () => {
//     const link = document.createElement('a');

//     if (topText === '') {
//       link.href = `https://memegen.link/${template}/${bottomText ? encodeURIComponent(bottomText) : ''}.png`;
//     } else if (bottomText === '') {
//       link.href = `https://memegen.link/${template}/${topText ? encodeURIComponent(topText) : ''}.png`;
//     } else if (!template === '') {
//       link.href = `https://memegen.link/${template}.png`;
//       console.log('link');
//     } else {
//       console.log('template');
//     }
//     link.download = 'meme.png';
//     console.log(link.href);
//     document.body.appendChild(link);
//     // link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="App">
//       <h1>Meme Generator</h1>
//       <div>
//         <label htmlFor="topText">Top text</label>
//         <input
//           id="topText"
//           value={topText}
//           onChange={(e) => setTopText(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="bottomText">Bottom text</label>
//         <input
//           id="bottomText"
//           value={bottomText}
//           onChange={(e) => setBottomText(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="template">Meme template</label>
//         <input id="template" value={template} onChange={handleTemplateChange} />
//       </div>
//       <div>
//         <h2>Preview:</h2>
//         <img
//           data-test-id="meme-image"
//           src={memeImageUrl}
//           alt="Meme Preview"
//           style={{ maxWidth: '500px', maxHeight: '500px' }}
//         />
//       </div>
//       <button onClick={handleDownload}>Download</button>
//     </div>
//   );
// };

// export default App;
