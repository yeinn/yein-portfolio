import React from "react";
import bulb from "./image/bulb.svg";
import web from "./image/web.svg";
import design from "./image/design.svg";
import skill from "./image/skill.svg";

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
      // {
      //   name: "image",
      //   children:
      //     "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
      //   className: "title-image",
      // },
      {
        name: "title",
        children: (
          <span>
            <p>💡 Skills</p>
          </span>
        ),
        className: "skill-title title-h1",
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
              "https://blog.kakaocdn.net/dn/vcyFW/btq1cbf3myw/qHe1c32yV5Kma9bzTUbVI0/tfile.svg",
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
              "https://blog.kakaocdn.net/dn/OJGQV/btq1aum7iiP/6x9XtYt3zlaV4buOgdbuv0/tfile.svg",
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
        name: "title",
        children: (
          <span>
            <p>💼 Career</p>
          </span>
        ),
        className: "title-h1 career-title",
      },
    ],
  },
  block: {
    className: "timeline",
    id: "career",
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
              "https://m.daewoong.co.kr/resource/m/kr/image/sub/ci-symbol.jpg",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2021.01~" },
          title: {
            className: "block-title",
            children: "대웅그룹 Ids&Trust IT 자산관리팀  인턴 근무",
          },
          content: {
            className: "block-content",
            children: (
              <>
                <div>📌 스마트 프렌즈 프로젝트 참여</div>
                <div>
                  📌 대웅 스마트워크 프렌즈 프로젝트 참여
                  <br />
                  🔗
                  <a href="https://smartwork.daewoong.co.kr/DWSWS/main">
                    스마트워크 프렌즈 바로가기
                  </a>
                </div>
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
              "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B889485BDA08240E",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2020.06 - 2020.12" },
          title: {
            className: "block-title",
            children: "안랩 연구혁신팀 인턴 근무",
          },
          content: {
            className: "block-content",
            children: (
              <>
                <div>📌 OLIVE 프로젝트 참여</div>
                <div>📌 안랩 SW 제품 오픈소스 검증 및 보안취약점 점검</div>
                <div>
                  📌 제품 라이선스 파일 패키징 및 공개
                  <br />
                  🔗{" "}
                  <a href="https://opensource.ahnlab.com">
                    오픈소스 안랩닷컴 바로가기
                  </a>
                </div>
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
              "https://blog.kakaocdn.net/dn/Qho1M/btq1haHs6ZG/7QNosE0MPki8lpkMbJk5l1/img.png",
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
            children: "펫노트랩 (現(주)보나곰) 스타트업 창업멤버 근무",
          },
          content: {
            className: "block-content",
            children: (
              <>
                <div>
                  📌 케이크지도 프로젝트 참여
                  <br />
                  🔗
                  <a href="https://cakemap.kr/main">
                    케이크 지도 사이트 바로가기
                  </a>
                </div>
                <div>
                  📌 펫노트 프로젝트 참여
                  <br />
                  🔗
                  <a href="https://www.petnote-lab.com/">
                    펫노트 사이트 바로가기
                  </a>
                  <br />
                  🔗
                  <a href="https://play.google.com/store/apps/details?id=com.petnoteapp&hl=ko">
                    펫노트 플레이 스토어
                  </a>
                  <br />
                  🔗
                  <a href="https://apps.apple.com/kr/app/%EB%85%B8%ED%8A%B8%ED%8E%AB/id1516220432">
                    펫노트 애플 스토어
                  </a>
                </div>
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
              "https://media.istockphoto.com/vectors/winner-award-icon-vectorstar-awardstar-rewardmedal-icon-vector-id1169299007?k=6&m=1169299007&s=170667a&w=0&h=kVjEuGsBN8hsWmV3fN-S9rRYJ3SC8EuZi55IHHDI6HY=",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: { className: "block-name", children: "" },
          post: { className: "block-post", children: "" },
          time: { className: "block-time", children: "2016~" },
          title: {
            className: "block-title",
            children: "수상이력 및 기타활동",
          },
          content: {
            className: "block-content",
            children: (
              <>
                <div>
                  🏫 전공
                  <br />
                  컴퓨터정보공학 / 시각미디어디자인
                </div>
                <div>
                  ⭐ 수상
                  <br />
                  ✔ 창업유망팀 300 경진대회 / U300 교육부 장관 인증서
                  <br />
                  ✔ 연세대학교 SURF 창업 페스티벌 / 멘토링상
                  <br />
                  ✔ 서울시 캠퍼스타운 조성사업 도시안 아이디어 경진대회 / 특별상
                  <br />
                  ✔ 제 10회 매일경제 스마트경제경영포럼 / 3등상
                  <br />
                  ✔ Blue Awards 상품문화 디자인 국제 공모전 / 우수상
                  <br />✔ 서울상품문화디자인 국제 공모전 한국상품문화디자인학회
                  / 회장상
                </div>
                🏃‍♀️ 대외활동
                <br />
                ✔ 예비창업패키지(4차 산업분야)선발
                <br />
                ✔ 삼성전자 대학생 모니터 서포터즈 3기
                <br />
                ✔ 핀테크 넥스트 리더 아카데미 1기
                <br />✔ 경동시장 서포터즈 꼬집스 3기
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
