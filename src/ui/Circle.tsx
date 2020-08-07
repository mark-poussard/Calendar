import React from 'react';
import './Circle.scss';

interface ICircleProps {
    monthColor : string;
}

const Circle : React.FC<ICircleProps> = props => {
    return(
        <div className={`circle`} style={{ backgroundColor: props.monthColor}}></div>
    );
}

export default Circle;