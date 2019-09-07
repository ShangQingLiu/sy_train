import * as React from 'react'
import './Home.css'

const logo = require('./img/logo.png');
const homePic = require('./img/home_pic.jpg');
const homePicCoverLeft= require('./img/homePicCoverLeft.svg');
const homePicCoverRight= require('./img/homePicCoverRight.svg');

export interface Props {
}

class Home extends React.Component<Props>{
    render(){
        return(
            <div className="home">
                <img src={logo} className="Home-logo" alt="logo" />
                <div className="Home-contain-cover">
                    <div className="Home-contain-pic">
                        <img src={homePicCoverLeft} className="Home-pic-cover-left" alt="homePicCoverLeft" />
                    </div>
                    <div className="Home-contain-pic">
                        <img src={homePicCoverRight} className="Home-pic-cover-right" alt="homePicCoverRight" />
                    </div>
                    <div className="Home-contain-pic">
                        <p className="Home-font Home-font-ep">我是企業人士</p>
                    </div>
                    <div className="Home-contain-pic">
                        <p className="Home-font Home-font-st">我是學生</p>
                    </div>
                    <div className="Home-contain-pic">
                        <input type="button" value="課程連結" className="Home-button-course Home-button-course-l Home-button-font" />
                    </div>
                    <div className="Home-contain-pic">
                        <input type="button" value="課程連結" className="Home-button-course Home-button-course-r Home-button-font" />
                    </div>
                    <img src={homePic} className="Home-pic" alt="homePic" />
                </div>
                <div className="Home-bottom-rec" > </div>
            </div>
        )

    }
}
export default Home