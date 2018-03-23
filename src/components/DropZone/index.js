import React from 'react';
import PropTypes from 'prop-types';
// import style from './style.css';

import DragOnDrop from './dragOnDrop';
import { validateFilesSize, validateFilesType } from '../../utils/utilities';


const dropZoneIn = {
    border: '2px dashed lightblue',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#FFF',
    textAlign: 'center',
    transition: 'visibility 0s, opacity 0s, height 0.3s linear, top 0.3s linear',
    zIndex: 0,
    visibility: 'visible',
    opacity: 0.9,
    height: '100%'
};

const dropZone = {
    border: '2px dashed lightblue',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#FFF',
    textAlign: 'center',
    transition: 'visibility 0s, opacity 0s, height 0.3s linear, top 0.3s linear',
    zIndex: -1,
    visibility: 'hidden',
    opacity: 0,
    height: '100%'
};

class DropZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            draggingOut: false,
            draggingIn: false
        };
        this.dragOnDrop = null;
    }

    componentDidMount() {
        this.dragOnDrop = new DragOnDrop({
            dropZone: this.dropZone,
            outZone: document.getElementsByTagName('body')[0],
            onDragOutsideStart: this.handleDragOutStart.bind(this),
            onDragOutsideEnd: this.handleDragOutEnd.bind(this),
            onDragInsideStart: this.handleDragInStart.bind(this),
            onDragInsideEnd: this.handleDragInEnd.bind(this),
            onDropDone: this.handleDropDone.bind(this)
        });
        this.dragOnDrop.init();
    }

    componentWillUnmount() {
        this.dragOnDrop.removeHandlers();
    }

    handleDragOutStart() {
        this.setState({ draggingOut: true });
    }

    handleDragOutEnd() {
        this.setState({ draggingOut: false });
    }

    handleDragInStart() {
        this.setState({ draggingIn: true });
    }

    handleDragInEnd() {
        this.setState({ draggingIn: false });
    }

    handleDropDone(e) {
        this.setState({
            draggingOut: false,
            draggingIn: false
        });

        if (e.dataTransfer.files.length > 0) {
            const filesArr = Array.from(e.dataTransfer.files);
            const types = this.props.filesConf && Object.keys(this.props.filesConf);
            const sizeValidation = validateFilesSize(filesArr, this.props.maxSize, this.props.filesConf);

            if (this.props.multipleFiles === false && filesArr.length > 1) {
                this.props.handleMoreThanOneFile();
            } else if (!validateFilesType(filesArr, types)) {
                this.props.handleIncorrectType(filesArr);
            } else if (!sizeValidation.result) {
                this.props.handleSizeExceeded(sizeValidation.maxSize);
            } else {
                this.props.handleDrop(e.dataTransfer.files);
            }
        }
    }

    render() {
        if (this.props.disabled) {
            return <div>{this.props.children}</div>;
        }
        const styleDropZone = this.state.draggingOut ? dropZoneIn : dropZone;
        return (
            <div
                style={{position: 'relative'}}
                ref={(elem) => { this.dropZone = elem; }}
            >
                {this.props.children}
                <div
                    className="v-centered-parent"
                    style={styleDropZone}
                    style={styleDropZone}
                >
                    <h4 className="v-centered">
                        {this.state.draggingIn
                            ? this.props.dragInJSX
                            : this.props.dragOutJSX
                        }
                    </h4>
                </div>
            </div>
        );
    }
};

DropZone.propTypes = {
    handleDrop: PropTypes.func.isRequired,
    handleSizeExceeded: PropTypes.func,
    handleMoreThanOneFile: PropTypes.func,
    dragInJSX: PropTypes.array,
    dragOutJSX: PropTypes.array,
    disabled: PropTypes.bool,
    multipleFiles: PropTypes.bool
};

DropZone.defaultProps = {
    handleSizeExceeded: () => {window.alert('Files exceed size limit');},
    handleMoreThanOneFile:() =>{},
    dragOutJSX: ['Drop me!'],
    dragInJSX: ['Drop files here'],
    disabled: false,
    multipleFiles: true
};

export default DropZone;
