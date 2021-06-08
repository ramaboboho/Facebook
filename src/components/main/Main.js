import React, { Component } from "react";
import Stories from "../stories/Stories";
import Status  from "../status/Status";
import {} from "react-bootstrap";

export default class SidebarKiri extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <Stories />
                </div>
                <Status/>
            </div>
        )
    }
}