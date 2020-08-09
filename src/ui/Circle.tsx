import React from 'react';
import './Circle.scss';

interface ICircleProps {
    monthColor : string;
    top : string;
    left : string;
    bottom : string;
    right : string;
}

const Circle : React.FC<ICircleProps> = props => {
    return(
        <div className={`circle`} style={{ backgroundColor: props.monthColor, 
            left: props.left,
            top: props.top,
            bottom: props.bottom,
            right: props.right}}></div>
    );
}

export default Circle;