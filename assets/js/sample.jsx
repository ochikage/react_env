import React from 'react'
import ReactDOM from 'react-dom'

import Popover from 'react-popover';

class PopoverSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    render() {
        return(
            <div>
                <div>before</div>
                {this.renderPopover()}
                <div>after</div>
            </div>
        );
    }

    renderPopover() {
        const {show} = this.state;
        return(
            <Popover isOpen={show} body={this.renderPopoverBody()} style={{backgroundColor: '#eeeeee'}}>
                <div style={{width: '100px'}} onClick={()=>{this.setState({show: !this.state.show})}} >popover body</div>
            </Popover>
        );
    }

    renderPopoverBody() {
        return(
            <div>
                <table>
                    <thead>
                        <tr><th>Name</th><th>Score</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Taro</td><td>100</td></tr>
                        <tr><td>Jiro</td><td>90</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
ReactDOM.render(<PopoverSample/>, document.getElementById('hello'));
