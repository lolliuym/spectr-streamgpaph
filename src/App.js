import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Spectrogram from './components/Spectrogram';
import Streamgraph from './components/Streamgraph';
import _ from "lodash"
import PieChart from './components/PieChart';

function App() {
  const [frequencies, setFrequencies] = useState([])
  var chunks = []

  const req = async () => {
    const { data } = await axios.get('http://localhost:8000/frequencies')
    setFrequencies(data)
  }
  useEffect(() => {
    req();
  }, []);
  
   console.log(frequencies.entries)
 
  let freqs = {
    "Amanda": '', "Ashley": '', "Betty": '', "Deborah": '', "Dorothy": '', "Helen": '', "Linda": '', "Patricia": '', "Abraham": '', "Gitaby": ''
  };

  function chunkAverage(arr, len) {
    var i = 0;
    var n = arr.length;
    var chunk;
    while (i < n) {
      chunk = arr.slice(i, i += len);
      chunks.push(
        chunk.reduce((s, n) => s + n) / chunk.length
      );
    }
    return chunks;
  };
  // chunkAverage(frequencies, 100)
  // freqs["Amanda"] = chunks[0]
  // freqs["Ashley"] = chunks[1]
  // freqs["Betty"] = chunks[2]
  // freqs["Deborah"] = chunks[3]
  // freqs["Dorothy"] = chunks[4]
  // freqs["Helen"] = chunks[5]
  // freqs["Linda"] = chunks[6]
  // freqs["Patricia"] = chunks[7]
  // freqs["Abraham"] = chunks[8]
  // freqs["Gitaby"] = chunks[9]

  // console.log()
  // console.log(chunks)
  // console.log(freqs)




  return (

    <div className='App'>
      <div className='container mx-auto'>


        <Spectrogram   />

        <Streamgraph />
        {/* <PieChart/> */}

      </div>
    </div>
  );
}

export default App;
