import React, { useState } from 'react';

const SentMessage = ({ message }) => {
    const [apparence, setapparence] = useState(false);
    return (
        <>
        
         { message !==undefined &&
           ( message.sender !== undefined && message.sender !== "youssef") &&  
          <div>
                <div className='flex justify-end mt-2 drop-shadow'>
                    <p onClick={() => { setapparence(!apparence) }} className='sm:w-4/5 w-5/6 px-5 py-3 text-white rounded-3xl' style={{ background: "#3E4042" }}>{message.text}</p>
                </div>
                {apparence &&
                    <span className='text-white flex justify-end text-xs font-semibold'>{message.sentat}</span>
                }
            </div>}
        </>
    );
}
export default SentMessage;