import React from 'react';
import { Route, IndexRedirect, withRouter } from 'react-router';

import App from './App.jsx';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import IssueReport from './IssueReport.jsx';

const NoMatch = () => <p>Page Not Found</p>;

export default (
  <Route path="/" component={App} >
    <IndexRedirect to="/issues" />
    <Route path="issues" component={withRouter(IssueList)} />
    <Route path="issues/:id" component={IssueEdit} />
    <Route path="reports" component={withRouter(IssueReport)} />
    <Route path="*" component={NoMatch} />
  </Route>
);
