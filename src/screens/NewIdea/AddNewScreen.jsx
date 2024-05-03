import React, { useEffect, useState } from 'react'
import Header from '../home/components/Header'
import { ChevronLeft, Send, Info } from 'lucide-react'
import moment from 'moment';
import { crushes } from '../../../utils/schema';
import { db } from '../../../utils/index';
import { useNavigate } from 'react-router-dom';


export default function AddNewScreen() {

    const navigation = useNavigate();
    const [crush, setCrush] = useState();
    const [username, setUsername] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [existingUser, setExistingUser] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('username')){
            setUsername(localStorage.getItem('username'));
            setExistingUser(true);
        }
    }, [])


    const onSaveHandler = async () => {
        const result = await db.insert(crushes)
            .values({
                content: crush,
                username: username,
                createdAt: moment().format('DD MMM yyyy')
            }).returning({ id: crushes.id })

        if (result) {
            localStorage.setItem('username', username);
            setUsername('');
            setCrush('');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }
    }

    return (
        <div>
            <Header />
            {showAlert && <div role="alert" className="alert alert-success mt-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Congratulations! Your new crush has been added to the list.</span>
            </div>}

            <button 
            onClick={() => navigation('/')}
            className="btn mt-7"><ChevronLeft />Back</button>

            <h2 className="font-bold text-2xl mt-5">Why keep it a secret? Let the world know 🌟</h2>
            <div className='flex flex-col mt-7 gap-2'>
                <label>Your Crush *</label>
                <textarea
                    onChange={(event) => setCrush(event.target.value)}
                    value={crush}
                    className="textarea textarea-bordered" placeholder="Write Your Crush"></textarea>
            </div>
            {!existingUser && <div className='flex flex-col mt-7 gap-2'>
                <label className='flex justify-between'>Your Username *
                    <span className='flex items-center gap-2 text-sm'> <Info className='h-4 w-4' />No Account Needed</span>
                </label>
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    type="text" placeholder="Username" className="input input-bordered w-full border-primary" />
            </div>}

            <button
                onClick={() => onSaveHandler()}
                disabled={!(crush && username)}
                className="btn w-full btn-primary mt-7">Send <Send className='h-4 w-4' /></button>
        </div>
    )
}
