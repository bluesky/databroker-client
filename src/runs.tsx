import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Route,
    Link as RouterLink,
    RouteComponentProps
} from "react-router-dom";

const useStyles = (theme: Theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 250,
  },
  media: {
    height: 250,
  },
});

export interface IProps extends WithStyles<typeof useStyles> {}

interface ICatalog {
    uid: string
}
interface IState {
    catalogs: Array<ICatalog>;
}

type RouteParams = { id: string };

interface Props extends RouteComponentProps<RouteParams> { }

class RunsPage extends React.Component<Props & IProps, IState> {
    public constructor(props: Props & IProps) {
        super(props);
        this.state = {
            catalogs: []
        };
    }

    render() {
        const { classes } = this.props;
        return (
          <div style={{ width: '100%' }}>
              Showing {this.props.match.params.id}
          <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
          {this.state.catalogs.map(catalog => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={"/previews/" + catalog.uid}
                title="Run preview"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {catalog.uid}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Maybe scan notes, summary of the scan?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Share
              </Button>
              <Button size="small" color="primary" component={RouterLink} to={"/runs/" + this.props.match.params.id + "/" + catalog.uid}>
                More detail
              </Button>
            </CardActions>
          </Card>
          ))}
          </Box>
          </div>
        )
    }

    componentDidMount() {
        var catalogUrl = "/runs/" + this.props.match.params.id;
        fetch(catalogUrl)
            .then(res => res.json())
            .then((data) => {
                this.setState({ catalogs: data })
                console.log(data)
            })
            .catch(console.log)
    }
}

export default withStyles(useStyles)(RunsPage);
