import * as React from 'react'
import '../Home/Home.css'
import './Student.css'
import CollegeFeature from './CollegeFeature/CollegeFeature'

const logo = require('../Home/img/logo.png');
const learning = require('./img/learning.png');
const student_title = require('./img/digital-water.png');
const student_title_2x = require('./img/digital-water@2x.png');
const student_title_3x = require('./img/digital-water@3x.png');
const student_pic_lightbulb = require('./img/pic_lightbulb.png');
const student_pic_lightbulb_2x = require('./img/pic_lightbulb@2x.png');
const student_pic_lightbulb_3x = require('./img/pic_lightbulb@3x.png');
const student_pic_screen = require('./img/pic_screen.png');
const student_pic_screen_2x = require('./img/pic_screen@2x.png');
const student_pic_screen_3x = require('./img/pic_screen@3x.png');
const student_pic_student = require('./img/pic_student.png');
const student_pic_student_2x = require('./img/pic_student@2x.png');
const student_pic_student_3x = require('./img/pic_student@3x.png');

export interface Props {
}

class Home extends React.Component<Props> {
    render() {
        const collegeFeatureArr = [1,2,3,4,5,6];
        const collegeFeatures = collegeFeatureArr.map(()=>
            <div className="Student-CollegeFeature-margin">
                <CollegeFeature/>
            </div>
        )
        return (
            <div>
                <div className="Student-pos-rel">
                    <div className="Student-pos-abs">
                        <img src={logo} className="Student-logo" alt="logo"/>
                    </div>
                    <div className="Student-pos-abs">
                        <p className="Student-big-quote">{'{'}</p>
                    </div>
                    <div className="Student-pos-abs">
                        <img src={student_title} srcSet={`${student_title_2x} 2x, ${student_title_3x} 3x`}
                             className="Student-title" alt="studentTitle"/>
                    </div>
                    <div className="Student-pos-abs">
                        <p className="Student-big-quote Student-big-quote-r">{'}'}</p>
                    </div>
                    <div className="Student-pos-abs">
                        <p className="Student-subtitle Student-subtitle-1">席思人工智能學院{'  |  '} 三大學程</p>
                    </div>
                    <div className="Student-pos-abs">
                        <p className="Student-subtitle Student-subtitle-2">競爭力的培訓課程、實作力的業師團隊、含金力的培訓證書</p>
                    </div>
                    <img src={learning} className="Student-learning" alt="learning"/>
                </div>

                <div className="Student-pos-rel">
                    <div className="Student-pos-abs Student-2-margin">
                        <div className="Student-2-title">席思學院</div>
                        <div className="Student-2-subtitle">共建AI人才培訓暨認證系統</div>
                        <div className="Student-2-wrapper">
                            <div className="Student-2-line-base">
                                <div className="Student-2-line-1"></div>
                            </div>
                            <div>
                                <img src={student_pic_lightbulb}
                                     srcSet={`${student_pic_lightbulb_2x} 2x, ${student_pic_lightbulb_3x} 3x`}
                                     className="Student-bitmap" alt="studentPicLightbulb"/>
                            </div>
                            <div className="Student-2-line-base">
                                <div className="Student-2-line-2"></div>
                            </div>
                            <div>
                                <img src={student_pic_screen}
                                     srcSet={`${student_pic_screen_2x} 2x, ${student_pic_screen_3x} 3x`}
                                     className="Student-bitmap" alt="studentPicScreen"/>
                            </div>
                            <div className="Student-2-line-base">
                                <div className="Student-2-line-3"></div>
                            </div>
                            <div>
                                <img src={student_pic_student}
                                     srcSet={`${student_pic_student_2x} 2x, ${student_pic_student_3x} 3x`}
                                     className="Student-bitmap" alt="studentPicStudent"/>
                            </div>
                            <div className="Student-2-line-base">
                                <div className="Student-2-line-4"></div>
                            </div>
                        </div>
                        <div className="Student-pic-intro Student-pic-intro-1">
                            <div>
                                成為具企業所需之即戰力AI工程師、<br/>
                                軟體工程師、資料科學家、機器學習<br/>
                                與深度學習工程師
                            </div>
                        </div>
                        <div className="Student-pic-intro Student-pic-intro-2">
                            <div>
                                成為具企業所需之即戰力AI工程師、<br/>
                                軟體工程師、資料科學家、機器學習<br/>
                                與深度學習工程師
                            </div>
                        </div>
                        <div className="Student-pic-intro Student-pic-intro-3">
                            <div>
                                成為具企業所需之即戰力AI工程師、<br/>
                                軟體工程師、資料科學家、機器學習<br/>
                                與深度學習工程師
                            </div>
                        </div>
                    </div>
                    <div className="Student-2-background"> </div>
                </div>

                <div className="Student-pos-rel" >
                   <div className="Student-pos-abs Student-3-title-root">
                       <div className="Student-3-title">學院特色</div>
                       <div className="Student-3-subtitle">
                           <div>
                               具競爭力的培訓課程<br/>
                               具實作力的業師團隊<br/>
                               具含金力的培訓證書
                           </div>
                       </div>
                   </div>
                    <div className="Student-pos-abs Student-pic-book-1">
                        {collegeFeatures}
                    </div>
                    <div className="Student-3-background"> </div>
                </div>

            </div>
        )

    }
}

export default Home
