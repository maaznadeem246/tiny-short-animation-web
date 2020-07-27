import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { display } from "@material-ui/system";


const useStyles = makeStyles((theme) => ({
    root: {

    },
    appBar:{
        backgroundColor: 'white',
        color: theme.typography.color,
        display:'flex',
     

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        padding:10,
        fontSize:25,
        flexGrow:1,
    },
    links:{
        fontSize: 20,
        padding:'10px 50px 10px 50px',
        flexGrow: 3,
        '& > *': {
            textDecoration:'none',
            marginLeft: theme.spacing(2),
            color: theme.typography.color,
            paddingRight:30,
            paddingLet:30,
            '&:hover':{
                textDecoration: 'none',
            },
            '&:active':{
                color:'inherit'
            }
        },
    }
}));


function Header(){
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.appBar}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                       Future Tech
                    </Typography>
                    <Typography className={classes.links}>
                        <Link href="#" onClick={preventDefault}>
                            Home
                        </Link>
                        <Link href="#" onClick={preventDefault} >
                            About
                        </Link>
                        <Link href="#" onClick={preventDefault}>
                            Blog
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;