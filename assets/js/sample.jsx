import React from 'react'
import ReactDOM from 'react-dom'

import Menu, {SubMenu, MenuItem} from 'rc-menu';
import 'rc-menu/assets/index.css';

class ReactMenuSample extends React.Component {
    render() {
        return(
            <div style={{width: '50%'}}>
            <Menu mode="horizontal"
                onSelect={(info) => {
                    console.log(info);
                }}
            >
                <SubMenu key="foo" title="foo">
                <MenuItem key="foo1">foo1</MenuItem>
                <MenuItem disabled={true}>foo2</MenuItem>
                </SubMenu>
                <MenuItem>menu2</MenuItem>
            </Menu>
            </div>
        );
    }
}

ReactDOM.render(<ReactMenuSample />, document.getElementById('hello'));
