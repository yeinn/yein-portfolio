/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Nav0 from "./Nav0";
import Banner0 from "./Banner0";
import Teams0 from "./Teams0";
import Feature0 from "./Feature0";
import Feature1 from "./Feature1";
import Content12 from "./Content12";
import Content9 from "./Content9";
import Content5 from "./Content5";
import Contact0 from "./Contact0";
import Footer0 from "./Footer0";

import {
  Nav00DataSource,
  Banner00DataSource,
  Teams00DataSource,
  Feature00DataSource,
  Feature10DataSource,
  Content120DataSource,
  Content90DataSource,
  Content50DataSource,
  Contact00DataSource,
  Footer00DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";
import Main from "./Main";
import Header from "./Header";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Header />,
      <Main />,
      // <Banner0
      //   id="Banner0_0"
      //   key="Banner0_0"
      //   dataSource={Banner00DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,

      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,

      <Content12
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact0
        id="Contact0_0"
        key="Contact0_0"
        dataSource={Contact00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
