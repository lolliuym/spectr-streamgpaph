import './App.css';
import Spectrogram from './components/Spectrogram';
import Streamgraph from './components/Streamgraph';

function App() {
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
