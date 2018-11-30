import React from 'react'
import {LineChart, Line} from 'recharts';

/*
const const_data = [
    {name: 'Page A', uv: 4000},
    {name: 'Page B', uv: 3000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
  ]
*/

export default class Graph extends React.Component {
    
    constructor() {
        super();
        this.state = { data: []};
    
        //this.createIssue = this.createIssue.bind(this);
      }
      componentDidMount() {
        this.loadData();
      }
      loadData() {
        fetch('/api/graph').then(response => {
          if (response.ok) {
            response.json().then(graph_from_api => {
              this.setState({ data: graph_from_api.records });
            });
          } 
        }).catch(err => {
          alert(`Error in fetching data from server: ${err}`);
        });
      }
/*
       loadData() {
        setTimeout(() => {
          this.setState({ data: const_data });
        }, 100);
      }
      componentDidMount() {
        this.loadData();
      }

*/
  render() {
    return (
      <div>This is a placeholder for the Graph Edit page II.
      <LineChart width={800} height={800} data={this.state.data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
        Second Graph
      <LineChart width={400} height={400} data={this.state.data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      </div>
    );
  }
}
