import * as React from 'react';
import './CollegeFeature.css';

const student_pic_book =    require('../img/pic_book.png');
const student_pic_book_2x = require('../img/pic_book@2x.png');
const student_pic_book_3x = require('../img/pic_book@3x.png');

export interface Props {
}

class CollegeFeature extends React.Component<Props> {
    render(){
       return(
          <div>
              <img src={student_pic_book}
                   srcSet={`${student_pic_book_2x} 2x, ${student_pic_book_3x} 3x`}
                   className="Student-pic-book " alt="studentPicBook"/>
              <div className="Student-3-pic-title">
                  <div>
                      特色1是我喔！
                  </div>
              </div>
              <div className="Student-3-pic-subtitle">
                  <div>
                      介紹文案介紹文案介紹文案介紹文案<br/>
                      介紹文案介紹文案介紹文案介紹文案
                  </div>
              </div>
          </div>
       )
    }
}

export default CollegeFeature
