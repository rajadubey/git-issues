import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Issue from './issue';
import IssueListItem from './issueListItem';
import LoaderArea from './loader';

export default function IssueList(props) {
    
    return (
      <>
        {props.list.length > 0 ? (
          <div className="issue-list">
            {Object.entries(props.list).map((object) => (
              <IssueListItem key={object[1].number} item={object} />
            ))}
          </div>
        ) : (
          <LoaderArea />
        )}
      </>
    );
}
