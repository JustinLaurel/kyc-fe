const MENU_AUTHORITIES = {
  staff: {
    make: {
      MENUS: [
        { name: "SEARCH" },
        { name: "VIEW" },
        { name: "ADD" },
        { name: "EDIT" },
        { name: "DELETE" },
      ],
    },
    approve: {
      MENUS: [
        { name: "SEARCH" },
        { name: "VIEW" },
        { name: "ADD" },
        { name: "EDIT" },
        { name: "DELETE" },
      ],
    },
  },
  customer: {
    make: {
      MENUS: [
        {
          name: "SEARCH",
        },
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
          submenus: ["CUSTOMER_DETAILS", "UBO", "OTHER_RELATED_PARTIES"],
        },
      ],
      applications: {
        MENUS: [
          {
            name: "SEARCH",
          },
        ],
      },
    },
    approve: {
      MENUS: [
        { name: "SEARCH" },
        { name: "VIEW" },
        { name: "ADD" },
        { name: "EDIT" },
        { name: "DELETE" },
      ],
    },
  },
};
interface MenuItem {
  name: string;
  submenus?: string[];
}

const MENU_AUTHORITIES_2 = {
  staff: {
    make: {
      MENUS: ["SEARCH", "VIEW", "ADD", "EDIT", "DELETE"],
    },
    approve: {
      MENUS: ["SEARCH", "VIEW", "ADD", "EDIT", "DELETE"],
    },
  },
  customer: {
    make: {
      MENUS: [
        "SEARCH",
        "VIEW",
        "VIEW_CUSTOMER_DETAILS",
        "VIEW_UBO",
        "VIEW_OTHER_RELATED_PARTIES",
        "VIEW_RISK_RATING_SCREENING",
        "ADD",
        "EDIT",
        "DELETE",
      ],
      applications: {
        MENUS: ["SEARCH"],
      },
    },
    approve: {
      MENUS: ["SEARCH", "VIEW", "ADD", "EDIT", "DELETE"],
    },
  },
};
