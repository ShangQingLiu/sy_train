import * as React from 'react';
import './CollegeFeature.css';

const s2_p1 = require('../img/s2_p1.png');
const s2_p1_2x = require('../img/s2_p1@2x.png');
const s2_p1_3x = require('../img/s2_p1@3x.png');

const s2_p2 = require('../img/s2_p2.png');
const s2_p2_2x = require('../img/s2_p2@2x.png');
const s2_p2_3x = require('../img/s2_p2@3x.png');

const s2_p3 = require('../img/s2_p3.png');
const s2_p3_2x = require('../img/s2_p3@2x.png');
const s2_p3_3x = require('../img/s2_p3@3x.png');

const s2_p4 = require('../img/s2_p4.png');
const s2_p4_2x = require('../img/s2_p4@2x.png');
const s2_p4_3x = require('../img/s2_p4@3x.png');

export interface Props {
    myKey: string;
}

class CollegeFeature extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let image;
        if (this.props.myKey === "0") {
            image =
                <div>
                <img src={s2_p1}
                     srcSet={`${s2_p1_2x} 2x, ${s2_p1_3x} 3x`}
                     className="Student-pic-book " alt="s2P1"/>
                    <div className="Student-3-pic-title">
                        <div>
                           獨創的教學方法
                        </div>
                    </div>
                    <div className="Student-3-pic-subtitle">
                        <div>
                            - 簡易有趣的教學模式<br/>
                            - 零基礎也能輕鬆上手
                        </div>
                    </div>
                </div>
        } else if (this.props.myKey === "1") {
            image =
                <div>
                <img src={s2_p2}
                     srcSet={`${s2_p2_2x} 2x, ${s2_p2_3x} 3x`}
                     className="Student-pic-book " alt="s2P2"/>
                    <div className="Student-3-pic-title">
                        <div>
                            產學合作
                        </div>
                    </div>
                    <div className="Student-3-pic-subtitle">
                        <div>
                            - 結合業界實作<br/>
                            - 大學企業參訪
                        </div>
                    </div>
                </div>
        } else if (this.props.myKey === "2") {
            image =
                <div>
                <img src={s2_p3}
                     srcSet={`${s2_p3_2x} 2x, ${s2_p3_3x} 3x`}
                     className="Student-pic-book " alt="s2P3"/>
                    <div className="Student-3-pic-title">
                        <div>
                            多元服務
                        </div>
                    </div>
                    <div className="Student-3-pic-subtitle">
                        <div>
                            - 人工智能學校社團、AI實驗室<br/>
                            - 客製化配套課程<br/>
                            - 師資培訓
                        </div>
                    </div>
                </div>
        } else if (this.props.myKey === "3") {
            image =
                <div>
                    <img src={s2_p4}
                         srcSet={`${s2_p4_2x} 2x, ${s2_p4_3x} 3x`}
                         className="Student-pic-book " alt="s2P4"/>
                    <div className="Student-3-pic-title">
                        <div>
                            升學
                        </div>
                    </div>
                    <div className="Student-3-pic-subtitle">
                        <div>
                            - 競賽輔導<br/>
                            - 留學顧問<br/>
                            - 專業證書
                        </div>
                    </div>
                </div>
        }
        return (
            <div>
                {image}
            </div>
        )
    }
}

export default CollegeFeature
