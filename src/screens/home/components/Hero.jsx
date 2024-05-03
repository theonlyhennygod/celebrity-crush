import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {

    const { setTheme } = useContext(ThemeContext)
    
    return (
        <div className='my-8 flex flex-col items-center gap-5'>
            <h2 className='text-3xl font-bold text-center'>Share Your Celebrity Crush</h2>
            <h2 className='text-center my-3'>
                <strong className='text-secondary'>Like your favorite celebrities.</strong>
                Share as many crushes, NO account needed!
            </h2>

            <div>
                <select 
                onChange={(event) => setTheme(event.target.value)}
                className="select select-secondary border-primary w-full max-w-xs">
                    <option disabled selected>Select Theme</option>
                    <option>light</option>
                    <option>dark</option>
                    <option>cupcake</option>
                    <option>bumblebee</option>
                    <option>emerald</option>
                    <option>corporate</option>
                    <option>acid</option>
                    <option>lemonade</option>
                    <option>sunset</option>
                    <option>winter</option>
                    <option>retro</option>
                    <option>forest</option>
                    <option>sunset</option>
                </select>
            </div>
        </div>
    )
}

export default Hero
