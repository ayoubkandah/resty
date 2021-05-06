import React from 'react'
import {NavLink as L} from "react-router-dom" 
import "./header.scss"
class Header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(prop) {
    //     super(prop)
    // }

    render() {
        return (
            <header>
                <h1>RESETy</h1>
                <ul> 
                <li>
                    <L exact to="/">
 HOME
                    </L>
                    </li>
                    <li>
                    <L  to="/history">
 HISTORY
                    </L>
                    </li>
                    <li>
                    <L  to="/help">
 HELP
                    </L>
                    </li>
                </ul>
            </header>
        );
    }
  }

  export default Header;