import React from 'react';
import './Home.scss';
import Circle from '../Circle';
import Screen from '../Screen/Screen';
import Month from '../../model/time/Month';
import Color from '../../model/Color';

interface IHomeProps {
    month : Month;
}

const Home : React.FC<IHomeProps> = props => {
    const getMonthColor = (month : Month) => {
        const color = Color.COLORS[month.asNumber()];
        return `var(${color})`;
    }
    const monthColor = getMonthColor(props.month);
    return (
        <Screen className={`home`}>
            <div className={'triangle-topleft'} style={{ borderTopColor: `${monthColor}`}}></div>
            <Circle monthColor={monthColor} top="" left="" bottom="1vw" right="5vw"/>
            <div className={'home-wrapper'}>
                <div className={`left-mock`}></div>
                <div className={`left`}>
                    <div className={`photo`} style={{ backgroundImage: "url('img/couple.png')"}}></div>
                    <div className={`credit`}>Photo credits: <a href='https://www.instagram.com/ab_gu/' target='_blank'>Abel Guillard</a></div>
                </div>
                <div className={`right`}>
                    <div className={`right-wrapper`}>
                        <div className={`right-with-margin`}>
                            <div className={`title`}>Hi there</div>
                            <div className={`text`}>
                                <p>We have been on the move since September 2019. It's sometimes hard for our families and friends to track our travels, that's why we created this online personnalised calendar. It shows where we have been, where we are now and what we have planned for the future.</p>
                                <p>We love meeting up with people so if you are around us, feel free to come say hi ! And if you want a postcard, just drop us a mail at <a href='mailto:mark.kimanh@gmail.com'>mark.kimanh@gmail.com</a>. We will send you one from wherever we are.</p>
                            </div>
                            <div className={`signature`}>Kim Anh &amp; Mark</div>
                        </div>
                    </div>
                </div>
            </div>
        </Screen>
    );
}

export default Home;