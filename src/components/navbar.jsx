import React from 'react'
import './style.css'
export default function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <div className="path-stack">
            <input
              type="text"
              name="organization"
              value="facebook"
              className="input-search"
              onChange={()=>console.log('change')}
            />
            {"/"}
            <input
              type="text"
              name="repository"
              value="react"
              className="input-search"
              onChange={()=>console.log('change')}
            />
          </div>
          <div className="stats">
            <span class="stats-tab">
              <span className="stats-tab-key">Watch</span>
              <span className="stats-tab-value">6.8</span>
            </span>
            <span class="stats-tab">
              <span className="stats-tab-key">Star</span>
              <span className="stats-tab-value">160k</span>
            </span>
            <span class="stats-tab">
              <span className="stats-tab-key">Fork</span>
              <span className="stats-tab-value">31.8k</span>
            </span>
          </div>
        </div>
        <div className="navbar-links">
          <div className="navbar-link-container">
            <span>Code</span>
            <span id='selected'>Issues</span>
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
