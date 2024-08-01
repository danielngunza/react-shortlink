import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Links from './pages/links'
import Error from './pages/error'

function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                 <Route path='/react-shortlink/' element={<Home/>} />
                 <Route path='/react-shortlink/MyLinks' element={<Links/>} />
                 <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp