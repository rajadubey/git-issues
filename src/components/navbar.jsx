import React from 'react'
import { numberFormatter } from '../utils/util';
import './style.css'
export default function Navbar(props) {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <div className="path-stack">
            <input
              type="text"
              name="organization"
              value={props.data.user}
              className="input-search"
              onChange={(event)=>props.handler('user', event.target.value)}
            />
            {"/"}
            <input
              type="text"
              name="repository"
              value={props.data.repository}
              className="input-search"
              onChange={(event)=>props.handler('repo', event.target.value)}
            />
          </div>
          <div className="stats">
            <span className="stats-tab">
              <span className="stats-tab-key">Watch</span>
              <span className="stats-tab-value">{numberFormatter(props.data.watchersCount)}</span>
            </span>
            <span className="stats-tab">
              <span className="stats-tab-key">Star</span>
              <span className="stats-tab-value">{numberFormatter(props.data.starCount)}</span>
            </span>
            <span className="stats-tab">
              <span className="stats-tab-key">Fork</span>
              <span className="stats-tab-value">{numberFormatter(props.data.forksCount)}</span>
            </span>
          </div>
        </div>
        <div className="navbar-links">
          <div className="navbar-link-container">
            <span>Code</span>
            <span id='selected' onClick={()=>props.fetchData()}>Issues</span>
            <span>Pull requests</span>
            <span>Actions</span>
            <span>Projects</span>
            <span>Wiki</span>
            <span>Security</span>
            <span>Insight</span>
          </div>
        </div>
      </div>
    );
}
