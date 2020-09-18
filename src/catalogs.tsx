import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Catalogs from './components/catalogs';

import {
    BrowserRouter as Router,
    Route,
    Link as RouterLink,
    RouteComponentProps
} from "react-router-dom";

interface ICatalog {
    name: string
}
interface IState {
    catalogs: Array<ICatalog>;
}

type RouteParams = { id: string };

interface Props extends RouteComponentProps<RouteParams> { }

class CatalogsPage extends React.Component<Props, IState> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            catalogs: []
        };
    }

    render() {
        return (
          <Container maxWidth="sm">
          <Box my={4}>
            <Catalogs catalogs={this.state.catalogs} />
            <Typography variant="h4" component="h1" gutterBottom>
              This page has all of my catalogs in it...
            </Typography>
          </Box>
        </Container>
        )
    }

    componentDidMount() {
        fetch('/db/runs/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ catalogs: data })
                console.log(data)
            })
            .catch(console.log)
    }
}

export default CatalogsPage;