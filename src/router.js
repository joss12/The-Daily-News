import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Contact from './components/contact';
import PostComponent from './components/posts'


import Header from './components/Header';
import MainLayouts from './layouts/MainLayouts.jsx'
function Router(){

    return(
        <BrowserRouter>
        <Header />
        <MainLayouts>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='article/:id' element={<PostComponent />}/>
        </Routes>
        </MainLayouts>
        </BrowserRouter>
    )
}

export default Router;