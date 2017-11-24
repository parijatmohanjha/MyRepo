import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class AxiosPostSample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: '',
      data: [],
      userId: '',
      id: '',
      title: '',
      body: ''
    };
  }

  componentDidMount(){
    axios
      .get('https://jsonplaceholder.typicode.com/posts', header { username: })
      .then(({ data })=> {
      	this.setState({
          data: data
        });
      })
      .catch((err)=> {})
      axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(({ data })=> {
        	this.setState({
            userId: data.userId,
            id: data.id,
            title: data.title,
            body: data.body
          });
        })
        .catch((err)=> {})
  }

  render() {
    const child = this.state.data.map((el, index) => {
      return <div>
      <TableRow>
        <TableHeaderColumn>{el.id}</TableHeaderColumn>
        <TableHeaderColumn width="100">{el.title}</TableHeaderColumn>
        <TableHeaderColumn width="100">{el.body}</TableHeaderColumn>
      </TableRow>
      </div>
    });

    return <div>
      <p>{ this.state.kind }</p>
      <div>  <TextField fullwidth="true"
        value={this.state.title}
          disabled={true}
          hintText="Username"
          ref="username"
          underlineShow={false}
        />
        <Divider /></div>
    <Table
          selectable={true}
          multiSelectable={true}>
        <TableHeader displaySelectAll={true}
            adjustForCheckbox={true}
            enableSelectAll={true}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={true}
            deselectOnClickaway={true}
            showRowHover={true}
            stripedRows={true}>
        {this.state.data.map( (row, index) => (
           <TableRow key={row.id}>
             <TableRowColumn>{row.id}</TableRowColumn>
             <TableRowColumn>{row.title}</TableRowColumn>
             <TableRowColumn>{row.body}</TableRowColumn>
           </TableRow>
           ))}
        </TableBody>
      </Table>
</div>
  }
}

export default AxiosPostSample;
