import { get, post } from "@/services/api";
import { routes } from "@/config/routes";
import { ListItem, SimpleStaff } from "@/config/types";
import { INITIAL_SEARCH_FORM } from "./components/ContentSection";

// function getSearchUsers({
//   payload: 
// }) {
//   return {
//     queryKey: ["list", "departments"],
//     queryFn: () =>
//       post(routes.searchUser, {
//         ...INITIAL_SEARCH_FORM,
//         page: 0,
//         itemsPerPage: 10,
//         sortBy: null,
//         sortOrder: null,
//       }),
//     staleTime: 60 * 1000,
//   };
// }
