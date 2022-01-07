import { Link } from "react-router-dom"
import React from 'react';

const QuestionsPublic = ({question}) => {  

    return(
        <div className='question'>
            <p>{question.category}  - <small>{question.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            <Link to={`/question/${question.id}`} className="button">
                View Question
            </Link>
        
        </div>
    )
}

export default QuestionsPublic