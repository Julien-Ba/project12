import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Default from './pages/default/Default';
import Header from './components/header/Header';
import Home from './pages/home/Home';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Default />} />
                <Route path='/home/:id' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
