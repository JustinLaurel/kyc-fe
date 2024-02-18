const MENU_AUTHORITIES = {
  user: {
    MENUS: [
      "SEARCH_FILTER",
      {
        name: "USERS_LISTING",
        omit: ["reviewButton"],
      },
    ],
    view: {
      MENUS: [
        {
          name: "USER_DETAILS",
          omit: ["approverGroup", "userRole", "backButton"],
        },
        "REMARKS_TABLE",
      ],
    },
    add: {
      MENUS: ["DETAILS_SWIPEABLE"],
    },
  },
};

const MENU_AUTHORITIES_2 = {
  user: {
    MENUS: ["SEARCH_FILTER", "USERS_LISTING"],
    view: {
      MENUS: ["USER_DETAILS", "REMARKS_TABLE"],
    },
    add: {
      MENUS: ["DETAILS_SWIPEABLE"],
    },
  },
};
