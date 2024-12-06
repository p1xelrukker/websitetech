import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from 'components/NotFound/NotFound';
import Login from 'components/Login/Login';
import Home from 'components/Home/Home';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
} 