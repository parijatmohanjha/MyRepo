import React from 'react';
import GridList, {GridTile,  StarBorder} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import LoginPage from './LoginPage'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

  },
  gridList: {
    width: 890,
    height: 450,
    overflowY: 'auto',

  },
};

class TempTemplate extends React.Component {

  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={700} style={styles.gridList}>
          <GridTile >
            <LoginPage/>
          </GridTile>
        </GridList>
    </div>
    );
  }
}

export default TempTemplate;
