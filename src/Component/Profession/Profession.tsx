import * as React from 'react'
import '../Home/Home.css'
import './Profession.scss'
import './Profession.css'
import CollegeFeature from './CollegeFeature/CollegeFeature'
import Student4Intro from "./Student4Intro/Student4Intro";
import Student5Card from "./Student5Card/Student5Card";
import {url} from 'inspector'

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

const student_pic_rect = require('./img/pic_rect.svg');
const student_pic_c_shape = require('./img/pic_c_shape.svg');
const student_pic_b_rect = require('./img/pic_b_rect.svg');
const student_pic_oval = require('./img/pic_oval.svg');
const student_pic_r_rect = require('./img/pic_r_rect.svg');


const student_pic_teacher = require('./img/teacher.jpg');

const student_9_1 = require('./img/9_1.svg');
const student_9_2 = require('./img/9_2.svg');
const student_9_3 = require('./img/9_3.svg');
const student_9_4 = require('./img/9_4.svg');
const student_9_5 = require('./img/9_5.svg');
const student_9_6 = require('./img/9_6.svg');
const student_9_7 = require('./img/9_7.svg');

export interface Props {
}

class Profession extends React.Component<Props> {
    render() {
        const collegeFeatureArr = [1, 2, 3, 4, 5, 6];
        const collegeFeatures = collegeFeatureArr.map(() =>
            <div className="Student-3-CollegeFeature-margin">
                <CollegeFeature/>
            </div>
        );
        const student4IntroArr = [1, 2, 3];
        const student4Intro = student4IntroArr.map(() => <Student4Intro/>);
        const student5CardArr = [1, 2, 3, 4];
        const student5Card = student5CardArr.map(() => <Student5Card/>);
        return (
            <div style={{width: "100%"}}>
                <div className="Student-pos-rel Student-top-block"
                     style={{backgroundImage: `url(${learning})`}}
                >
                    <div className="Student-pos-abs Student-logo-block">
                        <img src={logo} className="Student-logo" alt="logo"/>
                    </div>
                    <div className="Student-title-block">
                        <span className="Student-1-big-quote">{'{'}</span>
                        <img src={student_title} srcSet={`${student_title_2x} 2x, ${student_title_3x} 3x`}
                             className="Student-title" alt="studentTitle"/>
                        <span className="Student-1-big-quote">{'}'}</span>
                    </div>
                    <p className="Student-1-subtitle">席思人工智能學院{'  |  '} 三大學程</p>
                    <p className="Student-1-subtitle">競爭力的培訓課程、實作力的業師團隊、含金力的培訓證書</p>
                </div>

                <div className="Student-pos-rel Student-2 Student-2-background Student-2-block">
                    <div className="Student-2-title">席思學院</div>
                    <div className="Student-2-subtitle">共建AI人才培訓暨認證系統</div>
                    <div className="Student-2-wrapper">
                        <div className="Student-2-line-base">
                            <div className="Student-2-line"></div>
                        </div>
                        <div className="Student-2-feature-block">
                            <img src={student_pic_lightbulb}
                                 srcSet={`${student_pic_lightbulb_2x} 2x, ${student_pic_lightbulb_3x} 3x`}
                                 className="Student-bitmap" alt="studentPicLightbulb"/>
                            <div className="Student-2-feature-block-title">企業學程</div>
                            <div className="Student-2-feature-block-content">
                                成為具企業所需之即戰力AI工程師、
                                軟體工程師、資料科學家、機器學習
                                與深度學習工程師
                            </div>
                        </div>
                        <div className="Student-2-line-base">
                            <div className="Student-2-line"></div>
                        </div>
                        <div className="Student-2-feature-block">
                            <img src={student_pic_screen}
                                 srcSet={`${student_pic_screen_2x} 2x, ${student_pic_screen_3x} 3x`}
                                 className="Student-bitmap" alt="studentPicScreen"/>
                            <div className="Student-2-feature-block-title">企業學程</div>
                            <div className="Student-2-feature-block-content">
                                成為具企業所需之即戰力AI工程師、
                                軟體工程師、資料科學家、機器學習
                                與深度學習工程師
                            </div>
                        </div>
                        <div className="Student-2-line-base">
                            <div className="Student-2-line"></div>
                        </div>
                        <div className="Student-2-feature-block">
                            <img src={student_pic_student}
                                 srcSet={`${student_pic_student_2x} 2x, ${student_pic_student_3x} 3x`}
                                 className="Student-bitmap" alt="studentPicStudent"/>
                            <div className="Student-2-feature-block-title">企業學程</div>
                            <div className="Student-2-feature-block-content">
                                成為具企業所需之即戰力AI工程師、
                                軟體工程師、資料科學家、機器學習
                                與深度學習工程師
                            </div>
                        </div>
                        <div className="Student-2-line-base">
                            <div className="Student-2-line"></div>
                        </div>
                    </div>
                </div>

                <div className="Student-pos-rel Student-3 Student-block">
                    <div className="Student-3-title-root">
                        <div className="Student-3-title">學院特色</div>
                        <div className="Student-3-subtitle">
                            <div>
                                具競爭力的培訓課程<br/>
                                具實作力的業師團隊<br/>
                                具含金力的培訓證書
                            </div>
                        </div>
                    </div>
                    <div className="Student-pic-book-1">
                        {collegeFeatures}
                    </div>
                </div>

                <div className="Student-pos-rel Student-4 Student-block">
                    <div className="Student-2-title">教學特色</div>
                    <div className="Student-2-subtitle">共建AI人才培訓暨認證系統</div>
                    <div className="Student-4-contnet-block">
                        <div className="Student-4-intro-block">
                            <div className="Student-4-p1-title1">
                                你可以放介紹文字在這裡
                            </div>
                            <div className="Student-4-p1">
                                介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案
                            </div>
                            {student4Intro}
                        </div>
                        <div className="Student-4-img-block">
                            <div className="Student-4-img">
                                <img src={student_pic_oval} className="Student-pos-abs Student-4-pic-oval"
                                     alt="studentPicOval"/>
                                <img src={student_pic_r_rect} className="Student-pos-abs Student-4-pic-r-rect"
                                     alt="studentPicRRect"/>
                                <img src={student_pic_c_shape} className="Student-pos-abs Student-4-pic-c-shape"
                                     alt="studentPicCShape"/>
                                <img src={student_pic_b_rect} className="Student-pos-abs Student-4-pic-b-rect"
                                     alt="studentPicBRect"/>
                                <img src={student_pic_rect} className="Student-pos-abs Student-4-pic-rect"
                                     alt="studentPicRect"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="Student-pos-rel Student-5 Student-block">
                    <div className="Student-5-top-block">
                        <div className="Student-5-title-block">
                            <div className="Student-5-title">成果展示</div>
                            <div className="Student-5-subtitle">介紹文字</div>
                        </div>
                        <button className="button1 Student-5-button">最新课程</button>
                    </div>
                    <div className="Student-5-wrapper">
                        {student5Card}
                    </div>
                </div>

                <div className="Student-pos-rel Student-6 Student-block">
                    <div className="Student-2-margin">
                        <div className="Student-2-title">課程班別介紹</div>
                        <div className="Student-2-subtitle">世界級專業顧問</div>
                    </div>
                    <div className="Student-6-container">
                        <div className="Student-6-text Student-6-content-1">
                            <div className="Student-6-content ">
                                時程：12hr/2天<br/>
                                難度：無需程式基礎<br/>
                                課程內容：<br/>
                                1.AI導論<br/>
                                2.Python程式語言<br/>
                                效益：<br/>
                                1.AI重點概念掌握<br/>
                                2.建立AI程式語言
                            </div>
                            <div className="Level-1-AI Level-1">Level 1 <br/>AI程式邏輯班</div>
                        </div>

                        <div className="Student-6-text Student-6-content-2">
                            <div className="Student-6-content ">
                                時程：12hr/2天<br/>
                                難度：無需程式基礎<br/>
                                課程內容：<br/>
                                1.AI導論<br/>
                                2.Python程式語言<br/>
                                效益：<br/>
                                1.AI重點概念掌握<br/>
                                2.建立AI程式語言
                            </div>
                            <div className="Level-1-AI Level-2">Level 1 <br/>AI程式邏輯班</div>
                        </div>

                        <div className="Student-6-text Student-6-content-3">
                            <div className="Student-6-content ">
                                時程：12hr/2天<br/>
                                難度：無需程式基礎<br/>
                                課程內容：<br/>
                                1.AI導論<br/>
                                2.Python程式語言<br/>
                                效益：<br/>
                                1.AI重點概念掌握<br/>
                                2.建立AI程式語言
                            </div>
                            <div className="Level-1-AI Level-3">Level 1 <br/>AI程式邏輯班</div>
                        </div>

                        <div className="Student-6-text Student-6-content-4">
                            <div className="Student-6-content ">
                                時程：12hr/2天<br/>
                                難度：無需程式基礎<br/>
                                課程內容：<br/>
                                1.AI導論<br/>
                                2.Python程式語言<br/>
                                效益：<br/>
                                1.AI重點概念掌握<br/>
                                2.建立AI程式語言
                            </div>
                            <div className="Level-1-AI Level-4">Level 1 <br/>AI程式邏輯班</div>
                        </div>

                        <div className="Student-6-text Student-6-content-5">
                            <div style={{display: "flex", justifyContent: "space-around",}}>
                                <div className="Student-6-content ">
                                    時程：12hr/2天<br/>
                                    難度：無需程式基礎<br/>
                                    課程內容：<br/>
                                    1.AI導論<br/>
                                    2.Python程式語言<br/>
                                </div>
                                <div className="Student-6-content ">
                                    效益：<br/>
                                    1.AI重點概念掌握<br/>
                                    2.建立AI程式語言
                                </div>
                            </div>
                            <div className="Level-1-AI Level-5">Level 1 <br/>AI程式邏輯班</div>
                        </div>
                    </div>
                </div>

                {/*page-7*/}
                <div className="Student-pos-rel Student-7 Student-block">
                    <div>
                        <div className="Student-2-title">師資介紹</div>
                        <div className="Student-2-subtitle">世界級專業顧問</div>
                    </div>
                    <div className="Student-7-container">
                        <div className="Student-7-card">
                            <div className="Student-7-card-img-block">
                                <img className="Student-7-card-img" src={student_pic_teacher} alt="studentPicTeacher"/>
                            </div>
                            <div className="Student-7-card-content-block">
                                <div className="Student-7-card-name">名字</div>
                                <span className="Student-7-span">
                                    經歷...1<br/>
                                    經歷...1<br/>
                                    經歷...1<br/>
                                </span>
                            </div>
                        </div>
                        <div className="Student-7-card">
                            <div className="Student-7-card-img-block">
                                <img className="Student-7-card-img" src={student_pic_teacher} alt="studentPicTeacher"/>
                            </div>
                            <div className="Student-7-card-content-block">
                                <div className="Student-7-card-name">名字</div>
                                <span className="Student-7-span">
                                    經歷...1<br/>
                                    經歷...1<br/>
                                    經歷...1<br/>
                                </span>
                            </div>
                        </div>
                        <div className="Student-7-card">
                            <div className="Student-7-card-img-block">
                                <img className="Student-7-card-img" src={student_pic_teacher} alt="studentPicTeacher"/>
                            </div>
                            <div className="Student-7-card-content-block">
                                <div className="Student-7-card-name">名字</div>
                                <span className="Student-7-span">
                                    經歷...1<br/>
                                    經歷...1<br/>
                                    經歷...1<br/>
                                </span>
                            </div>
                        </div>
                        <div className="Student-7-card">
                            <div className="Student-7-card-img-block">
                                <img className="Student-7-card-img" src={student_pic_teacher} alt="studentPicTeacher"/>
                            </div>
                            <div className="Student-7-card-content-block">
                                <div className="Student-7-card-name">名字</div>
                                <span className="Student-7-span">
                                    經歷...1<br/>
                                    經歷...1<br/>
                                    經歷...1<br/>
                                </span>
                            </div>
                        </div>
                        <div className="Student-7-card">
                            <div className="Student-7-card-img-block">
                                <img className="Student-7-card-img" src={student_pic_teacher} alt="studentPicTeacher"/>
                            </div>
                            <div className="Student-7-card-content-block">
                                <div className="Student-7-card-name">名字</div>
                                <span className="Student-7-span">
                                    經歷...1<br/>
                                    經歷...1<br/>
                                    經歷...1<br/>
                                </span>
                            </div>
                        </div>
                        <div className="Student-7-card">
                            <div className="Student-7-card-img-block">
                                <img className="Student-7-card-img" src={student_pic_teacher} alt="studentPicTeacher"/>
                            </div>
                            <div className="Student-7-card-content-block">
                                <div className="Student-7-card-name">名字</div>
                                <span className="Student-7-span">
                                    經歷...1<br/>
                                    經歷...1<br/>
                                    經歷...1<br/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*page-8*/}
                <div className="Student-8 Student-block">
                    <div className="Student-8-report">
                        <div className="Student-8-h1">活動報導</div>
                        <div className="Student-8-subtitle">介紹文字</div>
                        <div className="Student-8-outline1">
                            <div className="Student-8-card1">
                                <div className="Student-8-card1-outline">
                                    <div className="Student-8-h2">名稱名稱名稱</div>
                                    <div className="Student-8-rect1 Student-8-rect1-text"
                                         style={{marginBottom: "18px"}}>
                                        九月5,2018
                                    </div>
                                </div>
                                <div
                                    className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容
                                </div>
                            </div>
                            <div className="Student-8-card1">
                                <div className="Student-8-card1-outline">
                                    <div className="Student-8-h2">名稱名稱名稱</div>
                                    <div className="Student-8-rect1 Student-8-rect1-text"
                                         style={{marginBottom: "18px"}}>
                                        九月5,2018
                                    </div>
                                </div>
                                <div
                                    className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容
                                </div>
                            </div>
                            <div className="Student-8-card1">
                                <div className="Student-8-card1-outline">
                                    <div className="Student-8-h2">名稱名稱名稱</div>
                                    <div className="Student-8-rect1 Student-8-rect1-text"
                                         style={{marginBottom: "18px"}}>
                                        九月5,2018
                                    </div>
                                </div>
                                <div
                                    className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容
                                </div>
                            </div>
                            <div className="Student-8-card1">
                                <div className="Student-8-card1-outline">
                                    <div className="Student-8-h2">名稱名稱名稱</div>
                                    <div className="Student-8-rect1 Student-8-rect1-text"
                                         style={{marginBottom: "18px"}}>
                                        九月5,2018
                                    </div>
                                </div>
                                <div
                                    className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Student-8-recommend">
                        <div className="Student-8-h1">教材推薦</div>
                        <div className="Student-8-subtitle">介紹文字</div>
                        <div className="Student-8-rect2">
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display: "flex"}}>
                                <div className="Student-8-rect2-python-note">
                                    Python基本語法
                                </div>
                                <div className="Student-8-rect3 Student-8-rect3-text">
                                    By Eddie
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*page-9*/}
                <div className="Student-9">
                    <div className="Student-9-title">
                        對我們的教學有感興趣嗎?
                    </div>
                    <div className="Student-9-subtitle">
                        世界級專業顧問
                    </div>
                    <button className="Student-9-button">
                        聯絡我們
                    </button>
                    <div className="Student-9-svg1" style={{position: "absolute", left: "0", top: "15%"}}>
                        <img src={student_9_1} alt="student91"/>
                    </div>
                    <div style={{position: "absolute", left: "19.5%", top: "18.3%"}}>
                        <img src={student_9_2} alt="student92"/>
                    </div>
                    <div className="Student-9-svg1"  style={{position: "absolute", left: "16.2%", top: "71.2%"}}>
                        <img src={student_9_3} alt="student93"/>
                    </div>
                    <div style={{position: "absolute", left: "66.6%", top: "0.1%"}}>
                        <img src={student_9_4} alt="student94"/>
                    </div>
                    <div style={{position: "absolute", left: "67.9%", top: "51.5%"}}>
                        <img src={student_9_5} alt="student95"/>
                    </div>
                    <div style={{position: "absolute", right: "0%", top: "2.1%"}}>
                        <img src={student_9_6} alt="student96"/>
                    </div>
                    <div style={{position: "absolute", left: "86.7%", top: "80.7%"}}>
                        <img src={student_9_7} alt="student97"/>
                    </div>
                </div>
                {/*page-10*/}
                <div className="Student-10 Student-10-text">
                    2019 Copyright of Kabob Creative Co. Limited
                </div>
            </div>
        )

    }
}

export default Profession
