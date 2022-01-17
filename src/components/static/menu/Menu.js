import React  from 'react';
import classes from './Menu.module.scss';
import MenuItem from "./MenuItem";

const menus = [
    { name: 'Backlog' },
    { name: 'Board' },
    { name: 'Feed' },
    { name: 'Reports'}
];

const Menu = () => {
    return (
        <>
            <section className={classes.menu}>
                <ul className={classes.nav}>
                    {menus.map((menu, index) => {
                        return <MenuItem key={index} name={menu.name}/>
                    })}
                </ul>
            </section>
        </>
    );
}

export default Menu;