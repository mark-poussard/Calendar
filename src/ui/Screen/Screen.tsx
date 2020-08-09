import React from 'react';
import './Screen.scss';

interface IScreenProps {
    className : string;
}

const Screen : React.FC<IScreenProps> = props => {
    return (
        <div className={`screen ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Screen;