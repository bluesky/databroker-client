import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

interface ICatalog {
    name: string
}
interface IProps {
    catalogs: Array<ICatalog>;
}

const Catalogs: React.FunctionComponent<IProps> = (props) => {
    console.log("catalogs: ", props.catalogs)
    if (props.catalogs.length === 0) {
        return <div>None</div>;
    } else {
    return (
        <div>
            <h1>Catalog List</h1>
            <ul>
            {props.catalogs.map(catalog => (
                        <li key={catalog.name}>
                            <Link color="inherit" component={RouterLink} to={"/runs/" + catalog.name}>{catalog.name}</Link>
                        </li>
            ))}
            </ul>
        </div>
    );
    }
};

export default Catalogs
