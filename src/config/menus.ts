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
  create: {
    staff: {
      MENUS: ["SEARCH", "VIEW", "ADD", "EDIT", "DELETE"],
    },
    customer: {
      MENUS: [
        "SEARCH",
        {
          name: "VIEW",
          submenus: [
            "CUSTOMER_DETAILS",
            "UBO",
            "OTHER_RELATED_PARTIES",
            "RISK_RATING_SCREENING",
          ],
        },
        {
          name: "ADD",
          submenus: [
            ""
          ]
        }
      ],
      applications: {
        MENUS: ["SEARCH"],
      },
    },
  },
  approve: {
    staff: {
      MENUS: ["SEARCH", "VIEW", "ADD", "EDIT", "DELETE"],
    },
    customer: {
      MENUS: ["SEARCH", "VIEW", "ADD", "EDIT", "DELETE"],
    },
  },
};
