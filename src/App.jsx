import './App.css'
import Contact from './assets/Screens/Contact'
import VelvetNight from './assets/Screens/Forms/VelvetNight'
import WoodOfKings from './assets/Screens/Forms/WoodOfKings'
import BoardRoom from './assets/Screens/Forms/BoardRoom'
import FloralOasis from './assets/Screens/Forms/FloralOasis'
import Seductress from './assets/Screens/Forms/Seductress'
import Home from './assets/Screens/Home'
import Sells from './assets/Screens/Sells'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './assets/Screens/Services'
import About from './assets/Screens/About'
import Wood from './assets/Screens/BuyNowForms/Wood'
import Board from './assets/Screens/BuyNowForms/Board'
import Velet from './assets/Screens/BuyNowForms/Velet'
import Floral from './assets/Screens/BuyNowForms/Floral'
import Buyseductress from './assets/Screens/BuyNowForms/Buyseductress'
import Taster from './assets/Screens/Forms/Taster'
import Tasterbuynow from './assets/Screens/BuyNowForms/Tasterbuynow'
import TopicalMist from './assets/Screens/Forms/TopicalMist'
import Topical from './assets/Screens/BuyNowForms/Topical'

const App = () => {
    return (
        <div>

            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Home /> } />
                    <Route path='/about' element={<About /> } />
                    <Route path='/services' element={<Services /> } />
                    <Route path='/sells' element={<Sells /> } />
                    <Route path='/contact' element={<Contact /> } />
                    <Route path='/VelvetNight' element={<VelvetNight /> } />
                    <Route path='/WoodOfKings' element={<WoodOfKings /> } />
                    <Route path='/BoardRoom' element={<BoardRoom /> } />
                    <Route path='/FloralOasis' element={<FloralOasis /> } />
                    <Route path='/Seductress' element={<Seductress /> } />
                    <Route path='/TopicalMist' element={<TopicalMist /> } />
                    <Route path='/taster' element={<Taster /> } />
                    <Route path='/woodsBuyNow' element={<Wood /> } />
                    <Route path='/boardBuyNow' element={<Board /> } />
                    <Route path='/velvetBuyNow' element={<Velet /> } />
                    <Route path='/floralBuyNow' element={<Floral /> } />
                    <Route path='/seductressBuyNow' element={<Buyseductress/> } />
                    <Route path='/tasterbuynow' element={<Tasterbuynow/> } />
                    <Route path='/topical' element={<Topical/> } />

                </Routes>

            </BrowserRouter>
            
        </div>
    )
}

export default App


