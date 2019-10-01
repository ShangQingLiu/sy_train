import * as React from 'react';
import './Student4Intro.css'



export interface Props {
}

class Student4Intro extends React.Component<Props> {
    render() {
        return (
            <div style={{marginLeft: "12.5vw", marginTop: "3.7vh"}}>
                <div className="Student4Intro-p1-theme1">
                    <span className="Student4Intro-text-style-1">
                        我是主題一：
                    </span>
                    介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案
                </div>
            </div>
        )
    }
}

export default Student4Intro
