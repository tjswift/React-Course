import React from 'react';

import Aux from '../../hoc/Auxilary'
import classes from './Layout.module.css'


//general layout component
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout