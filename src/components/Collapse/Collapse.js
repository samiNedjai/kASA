import React from 'react';
import { useState } from 'react';
import chevronUp from "../../assets/chevron-up.png";


function Collapse({title, content}) {
    const [Active, setActive] = useState(false)
   
    return (
        <div className='accordion_container'>
            <div className='accordion'>
                <div className='accordion_header'onClick={() => setActive(!Active)}>
                    <h2 className='accordion_title' >{title}</h2>
                    <img
                    className={ Active? 'arrow arrow_up' : 'arrow arrow_down'} 
                    src={chevronUp}
                     alt="" />
                </div>
            </div>
            <div>
            {Active && <div className="accordion_content">{content}</div>}
            </div>
        </div>
        
            
        
    );
}

export default Collapse;