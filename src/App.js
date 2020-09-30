import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link
                  style={{ textDecoration: "none", color: "#fdfdfd" }}
                  to="/"
                >
                  Shane Runnels
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link href="./src/Resume.pdf">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer
              className="sidebar-color"
              title={
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Shane Runnels
                </Link>
              }
            >
              <Navigation>
                <Link href="./src/Resume.pdf">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </main>
    );
  }
}

export default App;
