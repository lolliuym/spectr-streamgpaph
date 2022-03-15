import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Spectrogram from './components/Spectrogram';
import Streamgraph from './components/Streamgraph';
import _ from "lodash"

function App() {
  // const [freqs, setFreqs] = useState([])
  // const article = {
  //   id: Date.now(),
  //   freqs
  // }
  // useEffect(() => {
  //   const bitArray = []
  //   const res = axios.get('http://localhost:3000/frequencies')
  //     .then(response => {
  //       setFreqs(response.data[1].freqs)
  //     });


  //   return res.data
  // }, [])

  // console.log(freqs)
  // const res = axios.post('http://localhost:3000/frequencies', article)
  //   .then(response => {
  //     console.log(response.data)
  //   })



  return (
    <div className='App'>
      <div className='container mx-auto'>
        <Spectrogram />
        <Streamgraph />
      </div>
    </div>
  );
}

export default App;
