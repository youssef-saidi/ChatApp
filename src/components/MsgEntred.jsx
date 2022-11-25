import React, { useState } from 'react';

const MsgEntred = ({info, message}) => {
    const [apparence, setapparence] = useState(false);

    return (
        <>
      {  message !==undefined &&
           ( message.sender !== undefined && message.sender !== "youssef") &&  
                <div>
                    <div className='flex flex-row mt-2'>
                        <img className={apparence ? 'relative bottom-6 w-12 h-12 mr-2 sm:mr-4 rounded-full self-end' : 'w-12 h-12 mr-2 sm:mr-4 rounded-full self-end'} src={info.imgUser} alt="" />
                        <div className={apparence ? 'sm:w-4/5 w-5/6 relative mb-6' : 'sm:w-4/5 w-5/6 relative'}>
                            <p onClick={() => { setapparence(!apparence) }} className='drop-shadow px-5 py-3 bg-white rounded-3xl'>{message.message}</p>
                            {apparence &&
                                <span className='right-0 -bottom-5 absolute flex justify-end text-xs font-semibold text-white'>{message.received}</span>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default MsgEntred;