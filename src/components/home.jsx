import React from "react";
import IssueList from "./issueList";
import LoaderArea from "./loader";
import Navbar from "./navbar";

export default function Home(props) {
  const issues = props.data.issues;
  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar data={props.data} fetchData={props.fetchData} handler={props.handleUser}/>
      </div>
      <div className="container">
        <div className="container-header">
          <div className="issue-status">
            <span>Open</span>
            <span>Closed</span>
          </div>
          <div class="issue-filters">
            <span>Author</span>
            <span>Label</span>
            <span>Projects</span>
            <span>Milestones</span>
            <span>Assignee</span>
            <span>Sort</span>
          </div>
        </div>
        <div className="container-body">
            {issues? <IssueList list={issues} />: <LoaderArea />}
        </div>
      </div>
    </div>
  );
}
