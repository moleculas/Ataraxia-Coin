import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    makeStyles
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite'
import { Link } from "react-router-dom"

const estilos = makeStyles(theme => ({
    link: {
       textDecoration: 'none',
       color: 'inherit'
    }
}))

const Menu = () => {

    const classes = estilos()

    return (
        <div>
            <List component='nav'>
                <Link to="/" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Inicio' />
                    </ListItem>
                </Link>               
                <Divider />
            </List>
        </div>
    )
}

export default Menu
