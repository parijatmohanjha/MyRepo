import React from 'react';
import axios from 'axios';
import {TextField, Divider,Table,TableBody,
} from 'material-ui';
import {
  TableCell,TableHead,
  TableRow,
} from 'material-ui/Table';

export default class AxiosSample extends React.Component {
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
      .get('https://jsonplaceholder.typicode.com/posts')
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
        <TableCell >{el.id}</TableCell>
        <TableCell  width="100">{el.title}</TableCell>
        <TableCell  width="100">{el.body}</TableCell>
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
        height="300px"
              selectable={true}
              multiSelectable={true}>
            <TableHead displaySelectAll={true}
                adjustForCheckbox={true}
                enableSelectAll={true}>
              <TableRow>
                <TableCell >ID</TableCell >
                <TableCell >Title</TableCell >
                <TableCell >Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody displayRowCheckbox={true}
                deselectOnClickaway={true}
                showRowHover={true}
                stripedRows={false}>
            {this.state.data.map( (row, index) => (
               <TableRow key={row.id}>
                 <TableCell>{row.id}</TableCell>
                 <TableCell>{row.title}</TableCell>
                 <TableCell>{row.body}</TableCell>
               </TableRow>
               ))}
            </TableBody>
          </Table>
</div>
  }
}
