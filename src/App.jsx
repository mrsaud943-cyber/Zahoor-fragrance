import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './assets/Pages/Home/Page/Home'
import Layout from './assets/Layout/Layout.jsx'
import About from './assets/Pages/About/Page/About.jsx'

const App = () => {
    return (

        <BrowserRouter>

            <Routes>

                {/* Parent Layout Route */}
                <Route element={<Layout />}>

                    {/* Child Routes */}
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />

                </Route>

            </Routes>

        </BrowserRouter>

    )
}

export default App