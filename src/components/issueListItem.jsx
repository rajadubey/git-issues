import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Issue from './issue';
import './style.css'
import tooltip from '../data/tooltip.svg';
import Moment from 'react-moment';
export default function IssueListItem(props) {
    const obj = props.item[1];
    return (
            <div className='issue-list-item'>
                <div className='issue-list-item-title'>
                    <img src={tooltip} width={'22px'}/>            
                    <span className='issue-title'>{`${obj.title}`}</span>
                    {obj.labels.map(label=> <span className='issue-card' key={label.id}>{label.name}</span>)}
                </div>
                
                <div className="issue-list-item-information">
                    <span>{`#${obj.number}`}</span> 
                   <span> opened </span>
                    <span>
                        <Moment fromNow>{obj.created_at}</Moment>
                    </span>
                     <span>by</span> 
                     <span>
                         <a href={''} target='_blank'>{`${obj.user.login}`}</a>
                     </span>
                </div>
            </div>
)
}
