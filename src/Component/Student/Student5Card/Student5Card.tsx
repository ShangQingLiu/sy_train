import * as React from 'react';
import './Student5Card.css'

const student_fake_photo1 = require('../img/fakePhoto1.jpg');


export interface Props {
}

class Student5Card extends React.Component<Props> {
    render() {
        return (

            <div className="card" style={{position:"relative", backgroundImage: `url(${student_fake_photo1})`}}>
                <div className="pic-intro">我是介紹文案我是介紹文案我是介紹文案我是介紹文案我是介紹文案
                </div>
            </div>
        )
    }
}

export default Student5Card
