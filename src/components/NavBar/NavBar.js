import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'

function NavBar() {
    return (
        <div className={classes.navbar}>
            <div className={classes.list}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    }
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favorite"
                    className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    }
                    end
                >
                    Fav
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    }
                    end
                >
                    about
                </NavLink>
            </div>
            <div>
            <button>login</button>
            </div>
            
        </div>
    )
}

export default NavBar
