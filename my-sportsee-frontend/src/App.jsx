import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MockUserSelector from './pages/mockUserSelector/MockUserSelector';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<MockUserSelector />} />
                <Route path='/home/:id' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
