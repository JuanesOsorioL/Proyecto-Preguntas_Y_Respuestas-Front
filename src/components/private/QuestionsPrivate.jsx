import { Link } from "react-router-dom"
import React from 'react';

const QuestionsPrivate = ({question}) => {  
console.log(question);
    return(
        <section className='question'>
            <p>
                Pregunta: <small>{question.question}</small>
                Categoria: <small>{question.category}</small>
                Tipo: <small>{question.type}</small>
            </p>

            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
        
        </section>
    )
}

export default QuestionsPrivate