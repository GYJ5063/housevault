import React from "react";

export default () =>
    <div role="navigation">
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm navbar-expand-lg">
            <a href="/" title="House Vault" className="logo navbar-brand">
                <img src="/static/housevault-logo.svg" alt="Logo" width="200"/></a>

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">xxx</span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">

                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <i class="fas fa-tachometer-alt"></i>
                        <a href="/">Overview</a>
                    </li>
                    <li >
                        <i class="far fa-clock"></i>
                        <a href="/knowledge-base">Knowledge Base</a>
                    </li>
                    <li >
                        <i class="fas fa-sliders-h"></i>
                        <a href="/settings">Settings</a>
                    </li>
                    <li >
                        <i class="fas fa-book"></i>
                        <a href="/">Log Out</a>
                    </li>
                </ul>

            </div>
        </nav>
    </div>