import React from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from 'react-bootstrap';

import { validateFilesSize, validateFilesType } from '../../utils/utilities';
import styled from 'styled-components';

class UploadBtn extends React.Component {
    state = {
        width: 0,
        uploading: false,
        progress: 0
    };

    constructor(props) {
        super(props);
        this.eventListeners = {
            onloadstart: this.onLoadStart.bind(this),
            onprogress: this.onProgress.bind(this),
            ontimeout: this.onLoadEnd.bind(this),
            onloadend: this.onLoadEnd.bind(this)
        };
    }

    componentDidMount() {
        const width = this.labelElem.offsetWidth;
        this.setState({ width });
    }

    onLoadStart() {
        this.setState({
            uploading: true,
            progress: 0
        });
    }

    onProgress({ loaded, total }) {
        this.setState({
            progress: Math.round(loaded / total * 100)
        });
    }

    onLoadEnd() {
        this.setState({
            uploading: false,
            progress: 0
        });
    }

    render() {
        const {
            id,
            handleChange,
            handleSizeExceeded,
            handleIncorrectType,
            validationConf,
            label,
            multiple,
            disabled,
            active,
            block,
            className,
            lg
        } = this.props;
        const { width, uploading, progress } = this.state;
        return (
            <div className={className}>
                <input
                    className="hidden-input"
                    type="file"
                    id={id}
                    onChange={({ target, target: { files } }) => {
                        if (files.length > 0) {
                            const filesArr = Array.from(files);
                            const typeValidation = validateFilesType(
                                filesArr,
                                validationConf
                            );
                            const sizeValidation = validateFilesSize(
                                filesArr,
                                validationConf
                            );

                            if (!typeValidation.result) {
                                handleIncorrectType(typeValidation);
                            } else if (!sizeValidation.result) {
                                handleSizeExceeded(sizeValidation);
                            } else {
                                handleChange(filesArr, this.eventListeners);
                            }
                            target.value = '';
                        }
                    }}
                    multiple={multiple}
                    disabled={disabled}
                />
                <label
                    htmlFor={id}
                    className={`btn
                    btn-default
                    ${lg ? 'btn-lg' : ''}
                    ${block ? 'btn-block' : ''}
                    ${active ? 'active' : ''}
                    ${disabled ? 'disabled' : ''}
                `}
                    ref={elem => (this.labelElem = elem)}
                >
                    {label}
                </label>
                {uploading &&
                    <ProgressBar
                        style={`bar ${lg ? 'lg-bar' : ''}`}
                        style={{ width }}
                        now={progress}
                        label={`${progress}%`}
                    />}
            </div>
        );
    }
}

UploadBtn.propTypes = {
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSizeExceeded: PropTypes.func,
    handleIncorrectType: PropTypes.func,
    validationConf: PropTypes.object,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    block: PropTypes.bool,
    lg: PropTypes.bool
};

UploadBtn.defaultProps = {
    id: 'uploadFile',
    handleChange: () => {},
    handleSizeExceeded: () => {},
    handleIncorrectType: () => {},
    validationConf: {},
    multiple: false,
    disabled: false,
    active: false,
    block: false,
    lg: false
};

export default styled(UploadBtn)`
    .container {
        position: relative;
    }

    .hidden-input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
`;
