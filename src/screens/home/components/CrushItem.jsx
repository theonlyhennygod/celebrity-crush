import React from 'react'
import { crushes } from './../../../../utils/schema'
import { db } from '/utils/index.js';
import { eq } from 'drizzle-orm';
import { upvote, downvote, isUpvoted, isdownvoted } from '../../../service';

function CrushItem({ crush, index, refreshData }) {

    // Upvote handler

    const upVoteHandler = async () => {
        if (upvote(crush.id)) {
            const result = await db.update(crushes)
                .set({
                    vote: crush.vote + 1
                })
                .where(eq(crushes.id, crush.id))
                .returning({ id: crushes.id })
            if (result) {
                refreshData();
            }
        }
    }

    // Downvote handler

    const downVoteHandler = async () => {
        if (downvote(crush.id)) {
            const result = await db.update(crushes)
                .set({
                    vote: crush.vote - 1
                })
                .where(eq(crushes.id, crush.id))
                .returning({ id: crushes.id })

            if (result) {
                refreshData();
            }
        }
    }

    return (
        <div className='my-5 p-5 border shadow-lg rounded-lg'>
            <div className='flex gap-7'>
                <div className='flex-grow'>
                    <h2 className='flex gap-2'><span>{index + 1}. </span>{crush?.content}</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <h2
                        onClick={upVoteHandler}
                        className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${isUpvoted(crush.id) && 'bg-slate-200'}`}>🔥</h2>
                    <h2 className='text-lg rounded-md p-1 text-center font-bold'>{crush?.vote}</h2>
                    <h2
                        onClick={downVoteHandler}
                        className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${isdownvoted(crush.id) && 'bg-slate-200'}`}>💩</h2>
                </div>
            </div>

            <h2 className='mt-4 text-gray-400 text-sm flex gap-5'>
                <span> </span>
                By @{crush.username} on {crush.createdAt}</h2>
        </div>
    )
}

export default CrushItem