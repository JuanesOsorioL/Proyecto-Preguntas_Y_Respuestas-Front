import React from 'react';

const ViewAnswer = ({answer}) => {  

    return(
        <section className='question'>
            <p>{answer.answer}  - <small>{answer.position}</small></p>
        
        </section>
    )
}

export default ViewAnswer