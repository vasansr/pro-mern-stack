'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'This is a placeholder for the Issue Filter.'
      );
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueRow = function IssueRow(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.issue.id
    ),
    React.createElement(
      'td',
      null,
      props.issue.status
    ),
    React.createElement(
      'td',
      null,
      props.issue.owner
    ),
    React.createElement(
      'td',
      null,
      props.issue.created.toDateString()
    ),
    React.createElement(
      'td',
      null,
      props.issue.effort
    ),
    React.createElement(
      'td',
      null,
      props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
    ),
    React.createElement(
      'td',
      null,
      props.issue.title
    ),
    React.createElement(
      'td',
      null,
      props.key.value
    )
  );
};

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, { key: issue.id, issue: issue });
  });
  return React.createElement(
    'table',
    { className: 'bordered-table' },
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          'Id'
        ),
        React.createElement(
          'th',
          null,
          'Status'
        ),
        React.createElement(
          'th',
          null,
          'Owner'
        ),
        React.createElement(
          'th',
          null,
          'Created'
        ),
        React.createElement(
          'th',
          null,
          'Effort'
        ),
        React.createElement(
          'th',
          null,
          'Completion Date'
        ),
        React.createElement(
          'th',
          null,
          'Title'
        )
      )
    ),
    React.createElement(
      'tbody',
      null,
      issueRows
    )
  );
}

var IssueAdd = function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    var _this2 = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(IssueAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      this.props.createIssue({
        owner: form.owner.value,
        title: form.title.value,
        status: 'New',
        created: new Date()
      });
      // clear the form for the next input
      form.owner.value = "";form.title.value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { name: 'issueAdd', onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
          React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
          React.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList = function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this3 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this3.state = { issues: [] };

    _this3.createIssue = _this3.createIssue.bind(_this3);
    return _this3;
  }

  _createClass(IssueList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this4 = this;

      fetch('/api/issues').then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log("Total count of records:", data._metadata.total_count);
        data.records.forEach(function (issue) {
          issue.created = new Date(issue.created);
          if (issue.completionDate) issue.completionDate = new Date(issue.completionDate);
        });
        _this4.setState({ issues: data.records });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createIssue',
    value: function createIssue(newIssue) {
      var _this5 = this;

      fetch('/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIssue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            var newIssues = _this5.state.issues.concat(updatedIssue);
            _this5.setState({ issues: newIssues });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to add issue: " + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in sending data to server: " + err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Issue Tracker'
        ),
        React.createElement(IssueFilter, null),
        React.createElement('hr', null),
        React.createElement(IssueTable, { issues: this.state.issues }),
        React.createElement('hr', null),
        React.createElement(IssueAdd, { createIssue: this.createIssue })
      );
    }
  }]);

  return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside the content Node