import React from 'react'
import { useParams } from 'react-router-dom';

export default function Issue(props) {
   
    return (
        <div>
            <h1>{props.toString()}</h1>            
        </div>
    )
}
