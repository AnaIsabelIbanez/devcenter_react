import React from 'react';
import PropTypes from 'prop-types';
// import cssModules from 'react-css-modules';
import style from './style.css';
import { validateFilesSize, validateFilesType } from '../../utils/utilities';

const getClassName = ({ lgSize, block, active }, disabled) => (`btn
    btn-default
    ${ lgSize ? 'btn-lg' : '' }
    ${ block ? 'btn-block' : '' }
    ${ active ? 'active' : '' }
    ${ disabled ? 'disabled' : '' }
`);

const UploadBtn = ({
    id,
    handleChange,
    handleSizeExceeded,
    handleIncorrectType,
    maxSize,
    filesConf,
    multiple,
    disabled
}) => (
    <input
        style={{
            position: 'absolute',
            right: '0px',
            margin: '0px',
            padding: '0px',
            fontSize: '100px',
            fontFamily: 'sans-serif',
            cursor: 'pointer',
            height: '100%',
            maxHeight: '190px',
            zIndex: 1
        }}
        type="file"
        name="file"
        id={id ? id : 'uploadFile'}
        onChange={({target, target: { files }}) => {
            if (files.length > 0) {
                const filesArr = Array.from(files);
                const types = filesConf && Object.keys(filesConf);
                const sizeValidation = validateFilesSize(filesArr, maxSize, filesConf);

                if (!validateFilesType(filesArr, types)) {
                    target.value = ''; // trick to reset the input
                    handleIncorrectType(filesArr);
                } else if (!sizeValidation.result) {
                    target.value = ''; // trick to reset the input
                    handleSizeExceeded(sizeValidation.maxSize);
                } else {
                    handleChange(files);
                }
            }
        }}
        multiple={multiple}
        disabled={disabled}
    />
);

UploadBtn.propTypes = {
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSizeExceeded:PropTypes.func,
    handleIncorrectType: PropTypes.func,
    maxSize: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    filesConf: PropTypes.object,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    block: PropTypes.bool,
    lgSize: PropTypes.bool
};

UploadBtn.defaultProps = {
    handleSizeExceeded: () => { window.alert('Files exceed size limit.'); },
    handleIncorrectType: () => { window.alert('File type not permitted.'); },
    maxSize: 0,
    filesConf: {},
    multiple: false,
    disabled: false,
    active: false,
    block: false,
    lgSize: false
};

export default UploadBtn;
