import React from "react";
import bulb from "./image/bulb.svg";
import web from "./image/web.svg";
import design from "./image/design.svg";

export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children:
      "https://blog.kakaocdn.net/dn/rvFKR/btq0y1sSbb1/xfxrbfxuECVaz6EAHf3qN0/tfile.svg",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Home</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },

        //위로 복사
      },

      //여기까지 홈
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <p>About</p>
                </span>
              ),
              name: "text",
            },
          ],
        },

        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Career",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "~2021",
                },
              ],
            },
          },
          {
            name: "sub1",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Skills",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "Languages and Tools",
                },
              ],
            },
          },
        ],
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <p>Work</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <p>Contact</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Github",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "@yeinn",
                },
              ],
            },
          },
          {
            name: "sub1",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Message",
                },
                {
                  name: "content",
                  className: "E-mail",
                  children: "yeindev@gmail.com",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
export const Banner00DataSource = {
  wrapper: { className: "banner0 kmfhqammq2s-editor_css" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title",
    // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
    children: (
      <h1 className="ef">
        <div>
          <span className="ef1">그</span>
          <span className="ef1">림</span>
          <span className="ef1">쟁</span>
          <span className="ef1">이</span>
        </div>
        <div>
          <span className="ef1">웹</span>
          <span className="ef1">개</span>
          <span className="ef1">발</span>
          <span className="ef1">자</span>
        </div>
      </h1>
    ),
  },
  content: {
    className: "banner0-content",
    children: (
      <span>
        <span>
          <span>
            <span></span>
          </span>
        </span>
      </span>
    ),
  },
  button: { className: "banner0-button", children: "" },
};
export const Teams00DataSource = {
  wrapper: { className: "home-page-wrapper teams0-wrapper" },
  OverPack: { playScale: 0.3, className: "home-page teams0" },
  BannerAnim: {
    className: "banner-anim",
    children: [
      {
        name: "elem0",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children:
                "https://blog.kakaocdn.net/dn/w5N0T/btq090e7xOd/7sApjAKk7jTkBeH0ZPkGbK/tfile.svg",
              className: "teams0-image",
            },
            {
              name: "content major",
              children: "Visual Design & Computer Engineering Major",
              className: "teams0-content font-xs",
            },
            {
              name: "title yellow underline",
              children: "Web Developer & UIUX Designer",
              className: "teams0-h1",
            },
            {
              name: "content2",
              children:
                "비즈니스의 가치를 향상시키기 위한 디자인과 시스템을 만드는 개발자",
              className: "teams0-content black",
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: <b>📌Features</b> }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={bulb} alt="plan"></img>,
            },
            {
              name: "title",
              className: "content0-block-title pink",
              children: "#기획",
            },
            {
              name: "content",
              children: "세상을 바꿀 수 있는 비즈니스",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={web} alt="plan"></img>,
            },
            {
              name: "title",
              className: "content0-block-title blue",
              children: "#개발",
            },
            {
              name: "content",
              children: "재사용성이 높은 클린한 코드",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: <img src={design} alt="plan"></img>,
            },
            {
              name: "title",
              className: "content0-block-title yellow",
              children: "#디자인",
            },
            {
              name: "content",
              children: "새로운 것의 익숙하고 편안한 경험",
            },
          ],
        },
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQogz3%2Fbtq1asoWKXQ%2FECr8rtqgmUfIfmvsBP8kdK%2Ftfile.svg",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: { className: "content1-title", children: "디자인하는 개발자" },
  content: {
    className: "content1-content",
    children: (
      <div>
        <p>
          <b> 디자인과 개발</b> 두 가지를 공부하였기 때문에{" "}
          <b>
            사용자 입장, 개발자의 입장 두 관점을 고려하여 UIUX를 설계하는 능력
          </b>
          을 기를 수 있었습니다. 이는 문제해결 방법을 생각할 때에 남들보다 여러
          요소를 고려하는 데에 크게 도움이 되었습니다.
        </p>
        <p>
          이러한 융합능력은 단순히 화면을 디자인하고 기능을 개발하는 영역을 넘어{" "}
          <b>디자인과 개발의 유기적 연계</b>를 통해 사용자의 입장에서의{" "}
          <b>사용성을 향상시키는 방법을 고민하는 개발자</b>로 성장할 수
          있었습니다.
        </p>
      </div>
    ),
  },
};
export const Content120DataSource = {
  wrapper: { className: "home-page-wrapper content12-wrapper" },
  page: { className: "home-page content12" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>Skills</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "img-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://blog.kakaocdn.net/dn/mN353/btq0zvNJf6V/qMSbeUen2gvVuMJj7n8EqK/tfile.svg",
          },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://blog.kakaocdn.net/dn/vabvA/btq0BDX896O/r6nIJYqFi9nD3NoQ40sGw1/tfile.svg",
          },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://blog.kakaocdn.net/dn/NtzIM/btq0BEvWzx7/gXMm2HwHPFJVd3H4nMvkTk/tfile.svg",
          },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://blog.kakaocdn.net/dn/cyCWgA/btq0EDwvyiQ/FxCDw7Rm3ZOCrLYF9MnRl1/tfile.svg",
          },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://blog.kakaocdn.net/dn/o3c1F/btq0zd7DL6U/1j9rOGaPcGqKm4cK4YxF10/tfile.svg",
          },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: {
            children:
              "https://blog.kakaocdn.net/dn/douVEZ/btq0BDX896B/kQIhzC7gKsuOfeoPREOcP0/tfile.svg",
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>History</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block0",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://octocat-generator-assets.githubusercontent.com/my-octocat-1616226412080.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2016 - 2018" },
          title: { className: "block-title", children: "시각디자인전공" },
          content: {
            className: "block-content",
            children: (
              <>
                <div>2020.01 대웅그룹 idsTrust IT자산관리팀 인턴 근무</div>
                <div>2020.02 컴퓨터정보공학 졸업 </div>
              </>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://octocat-generator-assets.githubusercontent.com/my-octocat-1616226412080.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2019" },
          title: { className: "block-title", children: "스타트업 창업" },
          content: {
            className: "block-content",
            children: (
              <>
                <div>2020.01 대웅그룹 idsTrust IT자산관리팀 인턴 근무</div>
                <div>2020.02 컴퓨터정보공학 졸업 </div>
              </>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://octocat-generator-assets.githubusercontent.com/my-octocat-1616226412080.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2020" },
          title: {
            className: "block-title",
            children: "안랩 연구혁신팀 인턴 근무",
          },
          content: {
            className: "block-content",
            children: (
              <>
                <div>2020.01 대웅그룹 idsTrust IT자산관리팀 인턴 근무</div>
                <div>2020.02 컴퓨터정보공학 졸업 </div>
              </>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://octocat-generator-assets.githubusercontent.com/my-octocat-1616226412080.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2021~" },
          title: {
            className: "block-title",
            children: "대웅그룹 idsTrust IT자산관리팀 인턴",
          },
          content: {
            className: "block-content",
            children: (
              <>
                <div>2020.01 대웅그룹 idsTrust IT자산관리팀 인턴 근무</div>
                <div>2020.02 컴퓨터정보공학 졸업 </div>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      { name: "title", children: "Work", className: "title-h1" },
      {
        name: "content",
        className: "title-content",
        children: "Projects",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content", target: "_blank" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "IT 장애 처리 접수 웹 시스템" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content", target: "_blank" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "스마트워크 가이드 웹 시스템" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "오픈소스 관리 웹 시스템" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "간편예약 운영 관리 플랫폼" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "반려동물 호텔 공유 다이어리 앱" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "대학생 일정관리 메신저" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "기타 프로젝트" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://im2.ezgif.com/tmp/ezgif-2-6beceb89759f.gif",
          },
          content: { children: "디자인 작업물" },
        },
      },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: { className: "home-page-wrapper content10-wrapper" },
  Content: {
    className: "icon-wrapper",
    children: {
      icon: {
        className: "icon",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg",
        name: "主要图标",
      },
      iconShadow: {
        className: "icon-shadow",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg",
        name: "图标影阴",
      },
      url: { children: "http://kko.to/hs6Q5ZGDH", name: "" },
      title: { children: "대한민국", name: "" },
      content: {
        children: "서울 광진구",
        name: "",
      },
    },
  },
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span>
          ©2021&nbsp;<a href="https://motion.ant.design">Yein Choi</a>&nbsp;All
          Rights Reserved
        </span>
      </span>
    ),
  },
};
