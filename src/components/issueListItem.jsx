import React from 'react'
import './style.css'
import tooltip from '../data/tooltip.svg';
import Moment from 'react-moment';
export default function IssueListItem(props) {
    const obj = props.item[1];
    // const creationTime = ();

  return (
    <div className="issue-list-item">
      <div className="issue-list-item-title">
        <img src={tooltip} width={"22px"} alt='information-icon'/>
        <span className="issue-title">{`${obj.title}`}</span>
        {obj.labels.map((label) => (
          <span className="issue-card" key={label.id}>
            {label.name}
          </span>
        ))}
      </div>
      <div className="issue-list-item-information">
        <span>{`#${obj.number}`}</span>
        <span>{`opened `}</span> 
        <Moment fromNow>{obj.created_at}</Moment>
         <span>{`by `}</span>
        <span>
          <a href={obj.user.html_url} target="_blank" rel='noreferrer'>
            {obj.user.login}
          </a>
        </span>
      </div>
    </div>
  );
}
