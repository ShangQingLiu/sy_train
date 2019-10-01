import * as React from 'react';
import './Student5Card.css'

const student_fake_photo1 = require('../img/fakePhoto1.jpg');


export interface Props {
}

class Student5Card extends React.Component<Props> {
    render() {
        return (
            <div className="card" style={{marginLeft: "8.3vw", marginTop: "31vh",position:"relative"}}>
                <img src={student_fake_photo1}
                     style={{borderRadius: "5px 5px 5px 5px", width: "270px", height: "360px"}}
                     alt="studentFakePhoto1"/>
                <div className="pic-intro" style={{
                    position:"absolute",
                    top: "255px",
                    left: "18px",
                    zIndex:2
                }}>我是介紹文案我是介紹文案我是介紹文案我是介紹文案我是介紹文案
                </div>
            </div>
        )
    }
}

export default Student5Card
