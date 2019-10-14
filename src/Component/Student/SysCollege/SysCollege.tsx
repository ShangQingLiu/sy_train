import React from 'react'
import './SysCollege.scss'
import '../Student.scss'

const lightBulb = require('./img/lightBulb.png');
const lightBulb2x = require('./img/lightBulb@2x.png');
const lightBulb3x = require('./img/lightBulb@3x.png');

export interface Props {

}

class SysCollege extends React.Component<Props> {
    render() {
        return (
            <div className="Sys-college-layout">
                <div>
                    <div className="Student-2-title">席思學院</div>
                    <div className="Student-2-subtitle" style={{marginBottom:"90px"}}>營隊、社團、競賽總覽</div>
                </div>
                <div className="Sys-college-outline">
                    <div style={{width: "40%" ,textAlign:"center",marginBottom:"12px"}}>
                        <img src={lightBulb} srcSet={`${lightBulb2x} 2x, ${lightBulb3x} 3x`}
                             className="Sys-college-pic1" alt="lightBulb"/>
                        <span className="Sys-college-text1">學期課程、營隊課程</span>
                    </div>
                    <div style={{width: "60%" ,textAlign:"center"}}>
                        <img src={lightBulb} srcSet={`${lightBulb2x} 2x, ${lightBulb3x} 3x`}
                             className="Sys-college-pic1" alt="lightBulb"/>
                        <span className="Sys-college-text1">社團課程、競賽培訓</span>
                    </div>
                    <div style={{width: "20%"}}>
                        <div className="Sys-college-table1">
                            AI概念與通式班
                        </div>
                        <div className="Sys-college-table1-text">
                            時程：12hr<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                        </div>
                    </div>
                    <div style={{width: "20%"}}>
                        <div className="Sys-college-table2">
                            AI程式進階養成班
                        </div>
                        <div className="Sys-college-table1-text">
                            時程：24hr<br/>
                            難度：無需程式基礎<br/>
                            課程內容：<br/>
                            1.AI導論<br/>
                            2.Python程式語言<br/>
                            效益：<br/>
                            1.AI重點概念掌握<br/>
                            2.建立AI程式語言
                        </div>
                    </div>
                    <div style={{width: "60%"}}>
                        <div className="Sys-college-table3">
                            AI程式競賽菁英培訓班
                        </div>
                        <div style={{display: "flex"}}>
                            <div style={{width: "33.3%"}}>
                                <div className="Sys-college-table1-text">
                                    時程：36hr<br/>
                                    難度：無需程式基礎<br/>
                                    課程內容：<br/>
                                    1.AI導論<br/>
                                    2.Python程式語言<br/>
                                    效益：<br/>
                                    1.AI重點概念掌握<br/>
                                    2.建立AI程式語言
                                </div>
                            </div>
                            <div style={{width: "33.3%"}}>
                                <div className="Sys-college-table1-text">
                                    時程：36hr<br/>
                                    難度：無需程式基礎<br/>
                                    課程內容：<br/>
                                    1.AI導論<br/>
                                    2.Python程式語言<br/>
                                    效益：<br/>
                                    1.AI重點概念掌握<br/>
                                    2.建立AI程式語言
                                </div>
                            </div>
                            <div style={{width: "33.3%"}}>
                                <div className="Sys-college-table1-text">
                                    時程：36hr<br/>
                                    難度：無需程式基礎<br/>
                                    課程內容：<br/>
                                    1.AI導論<br/>
                                    2.Python程式語言<br/>
                                    效益：<br/>
                                    1.AI重點概念掌握<br/>
                                    2.建立AI程式語言
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SysCollege
