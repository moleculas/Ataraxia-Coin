import React from 'react'
import { fade, makeStyles, IconButton, AppBar, Toolbar, Typography} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import AcUnitIcon from '@material-ui/icons/AcUnit'


const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    simpleButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
    },
    logoIcon: {
        borderRadius: 25,
        backgroundColor: fade(theme.palette.common.white, 0.15),        
        marginRight: 10,
        padding: 3,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }

}));

const Navbar = (props) => {

    const classes = useStyle();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={() => props.accionAbrir()}
                >
                    <MenuIcon />
                </IconButton>
                <AcUnitIcon
                    fontSize="large"
                    className={classes.logoIcon}
                />
                <Typography className={classes.title} variant="h5">
                    Desarrollos artikaWeb
                </Typography>                
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
