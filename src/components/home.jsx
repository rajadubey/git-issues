import React from "react";
import Loader from "react-loader-spinner";
import IssueList from "./issueList";
import IssueListItem from "./issueListItem";
import LoaderArea from "./loader";
import Navbar from "./navbar";

export default function Home(props) {
  const issues = props.data.data;
  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar />
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
            {issues? <IssueList list={props.data.data} />: <LoaderArea />}
        </div>
      </div>
    </div>
  );
}
