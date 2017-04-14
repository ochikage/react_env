import React from 'react'
import ReactDOM from 'react-dom'

import Dropzone from 'react-dropzone';

class ReactDropzoneSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null,
        }
    }

    render() {
        const dropzoneStyle = {
            height: '60px',
            width: '60px',
            border: '2px dashed black',
        };
        const imgStyle = {
            height: '50px',
            width: '50px',
            marginTop: '5px',
            marginBottom: '5px',
            marginLeft: '5px',
            marginRight: '5px',
        };
        const {file} = this.state;
        return(
            <div>
                <Dropzone 
                    multiple={false}
                    style={dropzoneStyle}
                    onDrop={(files) => {
                        console.log(files);
                        this.setState({file: files[0]});
                    }}
                >
                    <img src="https://s3-ap-northeast-1.amazonaws.com/frontd/static/staff_profile_image.gif" style={imgStyle}/>
                </Dropzone>
            </div>
        );
    }
}
ReactDOM.render(<ReactDropzoneSample />, document.getElementById('hello'));
