import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
            <Route exact path="/" element={<h1>This is the home page</h1>} />
            <Route exact path="/join" element={<RoomJoinPage/>} />
            <Route exact path="/create" element={<CreateRoomPage/>} />
        </Routes>    
      </Router>
    );
  }
}