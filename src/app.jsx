import gsap from "gsap";
import {ScrollTrigger , SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
import react from 'react';
import Navbar from './components/navbar.jsx'
import './index.css'

const App = () => {
    return (
        <>
        <div className='flex-center h-[100vh]'>
        <h1 className='text-3xl text-indigo-300'>app</h1>
        </div>
        </>
    )
}
export default App;