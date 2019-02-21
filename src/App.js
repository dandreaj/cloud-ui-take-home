import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Deployment from './components/Deployment';
import { EuiPage, EuiPageSideBar, EuiHeader, EuiHeaderSection, EuiHeaderLogo, EuiHeaderSectionItem } from '@elastic/eui'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <EuiHeader className='header'>
            <EuiHeaderSection grow={true}>
              <EuiHeaderSectionItem border='right'>
                <EuiHeaderLogo
                  href='#'
                  iconType={'logoElastic'}
                />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
          <EuiPage className='page'>
            <EuiPageSideBar></EuiPageSideBar>
            <Route exact path="/" component={Home} />
            <Route exact path="/deployment" component={Deployment}/>
          </EuiPage>
        </div>
      </Router>
    );
  }
}

export default App;
