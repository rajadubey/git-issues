import React from 'react';
import IssueListItem from './issueListItem';
import LoaderArea from './loader';

export default function IssueList(props) {
    const issueList = props.list;
    
    return (
      <>
        {issueList.length > 0 ? (
          <div className="issue-list" id='list'>
            {Object.entries(issueList).map((object) => (
              <IssueListItem key={object[1].number} item={object} />
            ))}
          </div>
        ) : (
          <LoaderArea />
        )}
      </>
    );
}
