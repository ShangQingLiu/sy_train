import * as React from 'react'
import './Home.css'
import './Home.scss'
import {Link, Route, Router, Switch} from "react-router-dom";
import Student from "../Student/Student";

const logo = require('./img/logo.png');
const homePic = require('./img/home_pic.jpg');
const homePicCover = require('./img/homePicCover.svg');
const homePicCoverMobile = require('./img/homePicCoverMobile.svg');

export interface Props {
}

class Home extends React.Component<Props> {
    render() {
        return (
            <div className="Home">
                <div className="Home-contain-cover" style={{backgroundImage: `url(${homePic})`}}>
                    <div style={{width: "100%"}}>
                        <img src={logo} className="Home-logo" alt="logo"/>
                    </div>
                    <img src={homePicCover} className="Home-pic-cover" alt="homePicCover"/>
                    <img src={homePicCoverMobile} className="Home-pic-cover-mobile" alt="homePicCover"/>
                    <div className="Home-contain-text1 Home-hide">
                        <div className="Home-contain-1">
                            <div className="Home-font "><span className="Home-hide">我是</span>企業人士</div>
                            <Link to="/Profession">
                                <input type="button" value="課程連結"
                                       className="Home-button-course  Home-button-font" />
                            </Link>
                        </div>
                        <div className="Home-contain-1">
                            <div className="Home-font "><span className="Home-hide">我是</span>學生</div>
                            <Link to="/Student">
                                <input type="button" value="課程連結"
                                       className="Home-button-course  Home-button-font"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Home-bottom-rec">
                    <div className="Home-contain-text2 Home-dishide">
                        <div className="Home-contain-1">
                            <div className="Home-font "><span className="Home-hide">我是</span>企業人士</div>
                            <Link to="/Profession">
                                <input type="button" value="課程連結"
                                       className="Home-button-course  Home-button-font"/>
                            </Link>
                        </div>
                        <div className="Home-contain-1">
                            <div className="Home-font "><span className="Home-hide">我是</span>學生</div>
                            <Link to="/Student">
                                <input type="button" value="課程連結"
                                       className="Home-button-course  Home-button-font"/>
                            </Link>
                        </div>
                    </div>
                    <div className="Home-foot-note">
                        2019 Copyright of SISCollege Co. Limited
                    </div>
                </div>
            </div>
        )

    }
}

export default Home