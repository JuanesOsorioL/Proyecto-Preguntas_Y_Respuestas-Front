import { Link } from "react-router-dom"
import React from 'react';

const OneQuestionPrivate = ({oneQuestion}) => {
console.log(oneQuestion);
    return(
        <section className='question'>
            <p>{oneQuestion.category}  - <small>{oneQuestion.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        
        </section>
    )
}

export default OneQuestionPrivate