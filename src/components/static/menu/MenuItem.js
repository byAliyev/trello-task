import React from 'react';
import classes from './Menu.module.scss';
import { Reports, Board, Feed, Backlog } from "../../Icons/icons";

// Icon components
const icons  = {
    Backlog,
    Feed,
    Board,
    Reports,
}


const MenuItem = (props) => {

    const MenuIcon = icons[props.name];
    return (
        <li className={classes.nav__item}>
            <a href="#" className={classes.nav__link}>
                <MenuIcon/>
                <span>{props.name}</span>
            </a>
        </li>
    );
}

export default MenuItem;