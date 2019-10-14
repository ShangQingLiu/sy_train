import React from 'react'

const star = require('./img/star.png');
const star2x = require('./img/star@2x.png');
const star3x = require('./img/star@3x.png');

export default function StarGen({number, name}: { number: number,name:string }) {
    let textStyle = {
        fontFamily:"PingFangTC,sans-serif",
        fontSize:"24px",
        fontWeight:"normal",
        fontStyle:"normal",
        fontStretch:"normal",
        lineHeight:"normal",
        letterSpacing:"0.5px",
        textAlign:"center",
        color:"#5c6b73"
    };

    let starNumList = [];
    for (let i = 0; i < number; i++) {
        starNumList.push(i);
    }


    const stars = starNumList.map(() =>
        <img src={star} srcSet={`${star2x} 2x, ${star3x} 3x`}></img>
    );
    return (
        <div>
            <span >{name}</span>
            {stars}
        </div>
    )
}