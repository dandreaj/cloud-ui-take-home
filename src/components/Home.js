import React, { Component } from "react";
import {
  EuiLink,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeaderSection,
  EuiPageContentHeader,
  EuiTitle,
  EuiPageBody
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class Home extends Component {
  render() {
    return (
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Welcome</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Hey there!</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiLink href="https://github.com/elastic/eui" target="_blank">
              EUI github
            </EuiLink>
            <EuiSpacer />
            <EuiLink href="https://elastic.github.io/eui/#/" target="_blank">
              EUI living style guide
            </EuiLink>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    );
  }
}

export default Home;
