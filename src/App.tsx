import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Catalogs from './components/catalogs';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends Component {
  render() {
      return (
        <Container maxWidth="sm">
        <Box my={4}>
          <Catalogs catalogs={this.state.catalogs} />
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example with TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
      )
  }

  state = {
      catalogs: []
  };

  componentDidMount() {
      fetch('http://localhost:6942/runs/')
          .then(res => res.json())
          .then((data) => {
              this.setState({ catalogs: data })
              console.log(data)
          })
          .catch(console.log)
  }
}

export default App;