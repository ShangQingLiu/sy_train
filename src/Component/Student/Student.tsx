import * as React from 'react'
import '../Home/Home.css'
import './Student.scss'
import './Student.css'
import CollegeFeature from './CollegeFeature/CollegeFeature'
import Student4Intro from "./Student4Intro/Student4Intro";
import Student5Card from "./Student5Card/Student5Card";

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

const student_bottom_rect1 = require('./img/bottom_rect1.svg');
const student_bottom_rect2 = require('./img/bottom_rect2.svg');
const student_bottom_rect3 = require('./img/bottom_rect3.svg');
const student_bottom_rect4 = require('./img/bottom_rect4.svg');
const student_bottom_rect5 = require('./img/bottom_rect5.svg');

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

class Home extends React.Component<Props> {
    render() {
        const collegeFeatureArr = [1, 2, 3, 4, 5, 6];
        const collegeFeatures = collegeFeatureArr.map(() =>
            <div className="Student-CollegeFeature-margin">
                <CollegeFeature/>
            </div>
        );
        const student4IntroArr = [1, 2, 3];
        const student4Intro = student4IntroArr.map(() => <Student4Intro/>);
        const student5CardArr = [1, 2, 3, 4];
        const student5Card = student5CardArr.map(() => <Student5Card/>);
        return (
            <div>
                <div className="Student-pos-rel">
                    <div className="Student-pos-abs">
                        <img src={logo} className="Student-logo" alt="logo"/>
                    </div>
                    <div style={{position: "absolute", width: "100%", margin: "auto"}}>
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
                    <div className="Student-2-background"></div>
                </div>

                <div className="Student-pos-rel">
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
                    <div className="Student-3-background"></div>
                </div>

                <div className="Student-pos-rel">
                    <div className="Student-pos-abs Student-2-margin">
                        <div className="Student-2-title">教學特色</div>
                        <div className="Student-2-subtitle">共建AI人才培訓暨認證系統</div>
                    </div>
                    <div className="Student-pos-abs">
                        <div className="Student-4-p1-title1">
                            你可以放介紹文字在這裡
                        </div>
                        <div className="Student-4-p1">
                            介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案介紹文案
                        </div>
                        {student4Intro}
                    </div>

                    <div className="Student-pos-abs">
                        <div className="Student-4-line"></div>
                        <div className="Student-4-line" style={{marginTop: "9.5vh"}}></div>
                        <div className="Student-4-line" style={{marginTop: "9.5vh"}}></div>
                    </div>
                    <div>
                        <div className="Student-pos-abs">
                            <img src={student_pic_oval} className="Student-4-pic-oval" alt="studentPicOval"/>
                        </div>
                        <div className="Student-pos-abs">
                            <img src={student_pic_r_rect} className="Student-4-pic-r-rect" alt="studentPicRRect"/>
                        </div>
                        <div className="Student-pos-abs">
                            <img src={student_pic_c_shape} className="Student-4-pic-c-shape" alt="studentPicCShape"/>
                        </div>
                        <div className="Student-pos-abs">
                            <img src={student_pic_b_rect} className="Student-4-pic-b-rect" alt="studentPicBRect"/>
                        </div>
                        <div className="Student-pos-abs">
                            <img src={student_pic_rect} className="Student-4-pic-rect" alt="studentPicRect"/>
                        </div>
                    </div>
                    <div className="Student-4-background"></div>
                </div>

                <div className="Student-pos-rel">
                    <div className="Student-pos-abs">
                        <span className="Student-5-title" style={{float: "left"}}>
                            成果展示
                        </span>
                        <span className="Student-5-subtitle"
                              style={{float: "left", marginLeft: "0.8vw", marginTop: "16.5vh"}}>
                            介紹文字
                        </span>
                        <button className="button1" style={{marginLeft: "46.7vw", marginTop: "15.1vh"}}>最新课程</button>
                    </div>
                    <div className="Student-pos-abs Student-5-wrapper">
                        {student5Card}
                    </div>
                    <div className="Student-5-background"></div>
                </div>

                <div className="Student-pos-rel">
                    <div className="Student-pos-abs Student-2-margin">
                        <div className="Student-2-title">課程班別介紹</div>
                        <div className="Student-2-subtitle">世界級專業顧問</div>
                    </div>
                    <div className="Student-pos-abs ">
                        <div className="Student-6-text" style={{marginLeft: "21.1vw", marginTop: "53.1vh"}}>
                            <span>
                            時程：12hr/2天<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                            </span>
                        </div>

                        <div className="Student-6-text" style={{marginLeft: "4.1vw", marginTop: "49.7vh"}}>
                            <span>
                            時程：12hr/2天<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                            </span>
                        </div>

                        <div className="Student-6-text" style={{marginLeft: "4.1vw", marginTop: "46.3vh"}}>
                            <span>
                            時程：12hr/2天<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                            </span>
                        </div>

                        <div className="Student-6-text" style={{marginLeft: "4.1vw", marginTop: "42.9vh"}}>
                            <span>
                            時程：12hr/2天<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                            </span>
                        </div>

                        <div className="Student-6-text" style={{marginLeft: "4.1vw", marginTop: "39.5vh"}}>
                            <span>
                            時程：12hr/2天<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                            </span>
                        </div>
                    </div>
                    <div className="Student-pos-abs">
                        <span className="Level-1-AI" style={{position: "absolute", left: "21.8vw", top: "87.6vh"}}>Level 1 <br/>AI程式邏輯班</span>
                        <img src={student_bottom_rect1} className="Student-bottom-rect-root" alt="studentBottomRect1"
                             style={{marginLeft: "19.5vw", marginTop: "83.7vh"}}/>
                    </div>
                    <div className="Student-pos-abs">
                        <span className="Level-1-AI" style={{position: "absolute", left: "34.3vw", top: "84.6vh"}}>Level 1 <br/>AI程式邏輯班</span>
                        <img src={student_bottom_rect2} className="Student-bottom-rect-root" alt="studentBottomRect2"
                             style={{marginLeft: "32vw", marginTop: "80.8vh", height: "150px"}}/>
                    </div>
                    <div className="Student-pos-abs">
                        <span className="Level-1-AI" style={{position: "absolute", left: "46.8vw", top: "81.6vh"}}>Level 1 <br/>AI程式邏輯班</span>
                        <img src={student_bottom_rect3} className="Student-bottom-rect-root" alt="studentBottomRect3"
                             style={{marginLeft: "44.5vw", marginTop: "77.8vh", height: "180px"}}/>
                    </div>
                    <div className="Student-pos-abs">
                        <span className="Level-1-AI" style={{position: "absolute", left: "59.3vw", top: "78.6vh"}}>Level 1 <br/>AI程式邏輯班</span>
                        <img src={student_bottom_rect4} className="Student-bottom-rect-root" alt="studentBottomRect4"
                             style={{marginLeft: "57vw", marginTop: "74.8vh", height: "210px"}}/>
                    </div>
                    <div className="Student-pos-abs">
                        <span className="Level-1-AI" style={{position: "absolute", left: "71.8vw", top: "75.6vh"}}>Level 1 <br/>AI程式邏輯班</span>
                        <img src={student_bottom_rect5} className="Student-bottom-rect-root" alt="studentBottomRect5"
                             style={{marginLeft: "69.5vw", marginTop: "71.9vh", height: "240px"}}/>
                    </div>
                    <div className="Student-2-background" style={{height: "1000px"}}></div>
                </div>

                {/*page-7*/}
                <div className="Student-pos-rel Student-7" >
                    <div style={{padding: "90px 0px 0px"}}>
                        <div className="Student-2-title">師資介紹</div>
                        <div className="Student-2-subtitle">世界級專業顧問</div>
                    </div>
                    <div style={{display: "flex",padding:"8.4%",justifyContent:"center"}}>
                        <div className="card-7-outline" style={{width:"25%"}}>
                            <div className="card" style={{width:"100%",display:"flex",height:"180px"}}>
                                <div style={{width:"180px",height:"180px"}}>
                                    <img style={{width:"100%",height:"100%"}} src={student_pic_teacher} alt="studentPicTeacher"/>
                                </div>
                                <div>
                                    <h3>名字</h3>
                                    <span className="Student-7-span">
                                        經歷...1<br/>
                                        經歷...1<br/>
                                        經歷...1<br/>
                                    </span>
                                </div>
                            </div>
                            <div className="card" style={{width:"100%",display:"flex",height:"180px"}}>
                                <div style={{width:"180px",height:"180px"}}>
                                    <img style={{width:"100%",height:"100%"}} src={student_pic_teacher} alt="studentPicTeacher"/>
                                </div>
                                <div>
                                    <h3>名字</h3>
                                    <span className="Student-7-span">
                                        經歷...1<br/>
                                        經歷...1<br/>
                                        經歷...1<br/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-7-outline">
                            <div className="card" style={{width:"100%",display:"flex",height:"180px"}}>
                                <div style={{width:"180px",height:"180px"}}>
                                    <img style={{width:"100%",height:"100%"}} src={student_pic_teacher} alt="studentPicTeacher"/>
                                </div>
                                <div>
                                    <h3>名字</h3>
                                    <span className="Student-7-span">
                                        經歷...1<br/>
                                        經歷...1<br/>
                                        經歷...1<br/>
                                    </span>
                                </div>
                            </div>
                            <div className="card" style={{width:"100%",display:"flex",height:"180px"}}>
                                <div style={{width:"180px",height:"180px"}}>
                                    <img style={{width:"100%",height:"100%"}} src={student_pic_teacher} alt="studentPicTeacher"/>
                                </div>
                                <div>
                                    <h3>名字</h3>
                                    <span className="Student-7-span">
                                        經歷...1<br/>
                                        經歷...1<br/>
                                        經歷...1<br/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-7-outline">
                            <div className="card" style={{width:"100%",display:"flex",height:"180px"}}>
                                <div style={{width:"180px",height:"180px"}}>
                                    <img style={{width:"100%",height:"100%"}} src={student_pic_teacher} alt="studentPicTeacher"/>
                                </div>
                                <div>
                                    <h3>名字</h3>
                                    <span className="Student-7-span">
                                        經歷...1<br/>
                                        經歷...1<br/>
                                        經歷...1<br/>
                                    </span>
                                </div>
                            </div>
                            <div className="card" style={{width:"100%",display:"flex",height:"180px"}}>
                                <div style={{width:"180px",height:"180px"}}>
                                    <img style={{width:"100%",height:"100%"}} src={student_pic_teacher} alt="studentPicTeacher"/>
                                </div>
                                <div>
                                    <h3>名字</h3>
                                    <span className="Student-7-span">
                                        經歷...1<br/>
                                        經歷...1<br/>
                                        經歷...1<br/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*page-8*/}
                <div className="Student-8">
                    <div style={{width:"61.2%"}}>
                        <div className="Student-8-h1">活動報導</div>
                        <div className="Student-8-subtitle">介紹文字</div>
                        <div className="Student-8-outline1">
                            <div style={{width:"50%"}}>
                                <div className="Student-8-card1">
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                        <div className="Student-8-h2" >名稱名稱名稱</div>
                                        <div className="Student-8-rect1 Student-8-rect1-text" style={{marginBottom:"18px"}}>
                                            九月5,2018
                                        </div>
                                    </div>
                                    <div className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容</div>
                                </div>
                                <div className="Student-8-card1">
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                        <div className="Student-8-h2" >名稱名稱名稱</div>
                                        <div className="Student-8-rect1 Student-8-rect1-text" style={{marginBottom:"18px"}}>
                                            九月5,2018
                                        </div>
                                    </div>
                                    <div className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容</div>
                                </div>
                            </div>
                            <div style={{width:"50%"}}>
                                <div className="Student-8-card1">
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                        <div className="Student-8-h2" >名稱名稱名稱</div>
                                        <div className="Student-8-rect1 Student-8-rect1-text" style={{marginBottom:"18px"}}>
                                            九月5,2018
                                        </div>
                                    </div>
                                    <div className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容</div>
                                </div>
                                <div className="Student-8-card1">
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                        <div className="Student-8-h2" >名稱名稱名稱</div>
                                        <div className="Student-8-rect1 Student-8-rect1-text" style={{marginBottom:"18px"}}>
                                            九月5,2018
                                        </div>
                                    </div>
                                    <div className="Student-8-h4"> 報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容報導內容</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"22.2%",display:"flex",flexDirection:"column"}}>
                        <div className="Student-8-h1">教材推薦</div>
                        <div className="Student-8-subtitle">介紹文字</div>
                        <div className="Student-8-rect2">
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                       Python基本語法
                                    <div className="Student-8-rect3 Student-8-rect3-text" >
                                       By Eddie
                                    </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                Python基本語法
                                <div className="Student-8-rect3 Student-8-rect3-text" >
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                Python基本語法
                                <div className="Student-8-rect3 Student-8-rect3-text" >
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                Python基本語法
                                <div className="Student-8-rect3 Student-8-rect3-text" >
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                Python基本語法
                                <div className="Student-8-rect3 Student-8-rect3-text" >
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                Python基本語法
                                <div className="Student-8-rect3 Student-8-rect3-text" >
                                    By Eddie
                                </div>
                            </div>
                            <div className="Student-8-rect2-text Student-8-python" style={{display:"flex"}}>
                                Python基本語法
                                <div className="Student-8-rect3 Student-8-rect3-text" >
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
                    <div style={{position:"absolute",left:"0",top:"15%"}}>
                        <img src={student_9_1} alt="student91"/>
                    </div>
                    <div style={{position:"absolute",left:"19.5%",top:"18.3%"}}>
                        <img src={student_9_2} alt="student92"/>
                    </div>
                    <div style={{position:"absolute",left:"16.2%",top:"71.2%"}}>
                        <img src={student_9_3} alt="student93"/>
                    </div>
                    <div style={{position:"absolute",left:"66.6%",top:"0.1%"}}>
                        <img src={student_9_4} alt="student94"/>
                    </div>
                    <div style={{position:"absolute",left:"67.9%",top:"51.5%"}}>
                        <img src={student_9_5} alt="student95"/>
                    </div>
                    <div style={{position:"absolute",right:"0%",top:"2.1%"}}>
                        <img src={student_9_6} alt="student96"/>
                    </div>
                    <div style={{position:"absolute",left:"86.7%",top:"80.7%"}}>
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

export default Home
