import Content from "./Content";

const Constants = {
  DEV_MODE: false,
  REACT_KEY: 1,

  ICONS: {

  },
  MODAL_ROUTES: {

  },
  ROUTE: {
    REACT_ROUTES: {
      HOME: "/",
      PROFILE: "/profile",
      LOGIN: "/login",
    },
    GET_FEEDS_LIST: "/getfeedslist",
  },

  PAGE_IDENTIFIERS: {
    LOADING: "loading",
    HOME: "home-page",
    PROFILE: "profile-page",
    ERROR_PAGE: "errorpage",
  },
  KEY_CODE: {
    ENTER: 13,
    ARROW_UP: 30,
    ARROW_DOWN: 40,
    ESC: 27,
    PERIOD: 46
  },
  //Making server calls  1. show loading image    2. show data view   3. show failure view
  REQUEST_STATS: {
    PENDING: 1,
    SUCCESS: 2,
    FAILURE: 3
  },
  REQ_TIMEOUT: 15 * 60 * 1000
};

export default Constants;