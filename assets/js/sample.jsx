import React from 'react'
import ReactDOM from 'react-dom'

import {Modal} from 'react-bootstrap';
import AvatarCropper from 'react-avatar-cropper'; 
import Dropzone from 'react-dropzone';

class SampleAvatarCropper extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            image: '',
            show: false,
        };
    }
    render() {
        return(
            //this.renderDropzone()
            //this.renderModal()
            this.renderBoth()
        );
    }

    renderDropzone() {
        const {image, show} = this.state;
        return(
            <div>
                <Dropzone
                    multiple={false}
                    onDrop={(files) => {
                        this.setState({image: files[0].preview, show: true});
                    }}
                >
                    <img src={image} />
                </Dropzone>
                <AvatarCropper
                    image={image}
                    onCrop={(uri) => {
                        this.setState({image: uri, show: false});
                    }}
                    onRequestHide={() => {
                        this.setState({show: false});
                    }}
                    cropperOpen={show}
                    width={200}
                    height={200}
                />
            </div>

        );
    }

    renderModal() {
        const {image, show} = this.state;
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>AvatarCropper sample</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="file" id="image"
                            onChange={(e) => {
                                const reader = new FileReader();
                                reader.onload = (img) => {
                                    this.setState({image: img.target.result , show: true});
                                }
                                reader.readAsDataURL(e.target.files[0]);
                            }}
                        />
                        <AvatarCropper
                            image={image}
                            onCrop={(uri) => {
                                this.setState({image: uri, show: false});
                            }}
                            onRequestHide={() => {
                                this.setState({show: false});
                            }}
                            cropperOpen={show}
                            width={200}
                            height={200}
                        />
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }

    renderBoth() {
        const {image, show} = this.state;
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>AvatarCropper sample</Modal.Title>
                    </Modal.Header>
                    <input type="file" id="image"
                        onChange={(e) => {
                            const reader = new FileReader();
                            reader.onload = (img) => {
                                this.setState({image: img.target.result});
                            }
                            reader.readAsDataURL(e.target.files[0]);
                        }}
                    />
                    <Modal.Body>
                        <Dropzone
                            multiple={false}
                            onDrop={(files) => {
                                this.setState({image: files[0].preview, show: true});
                            }}
                        >
                            <img src={image} />
                        </Dropzone>
                        <AvatarCropper
                            image={image}
                            onCrop={(uri) => {
                                this.setState({image: uri, show: false});
                            }}
                            onRequestHide={() => {
                                this.setState({show: false});
                            }}
                            cropperOpen={show}
                            width={200}
                            height={200}
                        />
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );

    }
}

ReactDOM.render(<SampleAvatarCropper />, document.getElementById('hello'));
