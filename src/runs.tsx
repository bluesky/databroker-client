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
    uid: string
}
interface IState {
    catalogs: Array<ICatalog>;
}

type RouteParams = { id: string };

interface Props extends RouteComponentProps<RouteParams> { }

class RunsPage extends React.Component<Props, IState> {
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
            <Typography variant="h4" component="h1" gutterBottom>
              This page lists runs for {this.props.match.params.id}
              </Typography>
              <Typography variant="h6" component="h1" gutterBottom>
              <div>
                <ul>
                    {this.state.catalogs.map(catalog => (
                        <li key={catalog.uid}>
                            <Link color="inherit" component={RouterLink} to={"/runs/" + this.props.match.params.id + "/" + catalog.uid}>{catalog.uid}</Link>
                        </li>
                    ))}
                </ul>
              </div>
            </Typography>
          </Box>
        </Container>
        )
    }

    componentDidMount() {
        var catalogUrl = "http://localhost:6942/runs/" + this.props.match.params.id;
        fetch(catalogUrl)
            .then(res => res.json())
            .then((data) => {
                this.setState({ catalogs: data })
                console.log(data)
            })
            .catch(console.log)
    }
}

export default RunsPage;