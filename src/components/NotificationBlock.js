import React from 'react';
import styled from 'styled-components';


const MyNotificationBlock = ({className, width, inputWidth, title, details, type}) => (
    <div className={`${className} ${type}`}>
        <b>{title}</b>
        {details && <ul>
            {details.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>}
    </div>
);

export const ErrorBlock = styled(MyNotificationBlock)`
    border: 1px solid #af8585bd;
    color: #653434bd;
    background-color: #ffc4c473;
    padding: 5px 35px 5px 35px;
    border-radius: 3px;
    width: auto
`;

export const InfoBlock = styled(MyNotificationBlock)`
    .info {
        text-align: right;
    }
    .input-field {
        text-align: left;
        width: 100%;
    }
`;
