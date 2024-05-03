import React from 'react'
import Header from '../home/components/Header'
import { ChevronLeft, Send, Info } from 'lucide-react'

export default function AddNewScreen() {
  return (
    <div>
        <Header />

        <button className="btn mt-7"><ChevronLeft />Back</button>

        <h2 className="font-bold text-2xl mt-5">Why keep it a secret? Let the world know 🌟</h2>
        <div className='flex flex-col mt-7 gap-2'>
            <label>Your Crush *</label>
            <textarea className="textarea textarea-bordered" placeholder="Write Your Crush"></textarea>
        </div>
        <div className='flex flex-col mt-7 gap-2'>
            <label className='flex justify-between'>Your Username *
                <span className='flex items-center gap-2 text-sm'> <Info className='h-4 w-4'/>No Account Needed</span>
            </label>
            <input type="text" placeholder="Username" className="input input-bordered w-full border-primary" />
        </div>

        <button className="btn w-full btn-primary mt-7">Send <Send className='h-4 w-4'/></button>
    </div>
  )
}
