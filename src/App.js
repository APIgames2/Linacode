import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home_Page from './pages/home/home';
import Nf_Page from './pages/404/nf';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Nf_Page/>} />
        <Route path="/" element={<Home_Page/>} />
        <Route path='/home' element={<Home_Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;