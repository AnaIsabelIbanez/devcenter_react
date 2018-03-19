// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
//
// const getStyle = type => {
//     switch (type) {
//         case 'error':
//         case 'unrecoverable':
//             return 'background-color: #e2b1b1;';
//         case 'warning':
//             return 'background-color: #f7e7af';
//         default:
//             return 'background-color: #d9edf7';
//     }
// };
//
// export default ({ literals, title, message, actions, closeModal, type, show, ...props }) => {
//     return (
//         <Modal show={show} {...props} backdrop="static">
//             <Modal.Header className={getStyle(type)}>
//                 <Modal.Title>{title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>{message}</Modal.Body>
//             <Modal.Footer>
//                 {actions && actions.map(({ text, onClick }) => (
//                     <Button
//                         key={text}
//                         bsStyle={onClick ? 'primary' : 'default'}
//                         onClick={() => closeModal() && onClick && onClick()}
//                     >
//                         {literals[text] || text}
//                     </Button>
//                 ))}
//             </Modal.Footer>
//         </Modal>
//     );
// };

import React from 'react';
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';
import { Error, Warning, AddAlert }  from 'material-ui-icons';

const renderDetails = details => details.map((detail, idx) => <li key={idx}>{detail}</li>);

const renderIcon = (type) => {
    const iconTypes = {
        error: <Error/>,
        warning: <Warning/>,
        info: <AddAlert/>
    };
    return iconTypes[type];
};

const Modal = ({
    children,
    type,
    title,
    actions,
    message,
    details,
    classes,
    hideModal,
    id,
    ...props
}) => {
    const titleText = title;
    const messageText = message;

    return (
        <Dialog
            {...props}
            transitionDuration={150}
            transition={Slide}
        >
            {titleText !== '' && (
                <DialogTitle id="modal-title">
                    <span>
                        {renderIcon(type)} {titleText}
                    </span>
                </DialogTitle>
            )}
            <DialogContent>
                {children ? (
                    children
                ) : (
                    <div>
                        {messageText && <Typography type="body2">{messageText}</Typography>}
                        {Array.isArray(details) &&
                        details.length > 0 && (
                                <Typography component="ul">{renderDetails(details)}</Typography>
                            )}
                    </div>
                )}
            </DialogContent>
            <DialogActions><Button onClick={() => hideModal(id)}>Close</Button></DialogActions>
        </Dialog>
    );
};

export default Modal;
