import { create } from "zustand";
import { USER_ROLE } from "../util/constant";

type State = {
  userRole: USER_ROLE | null;
};
type Action = {
  setUserRole: (role: State["userRole"]) => void;
};

const useAuthStore = create<State & Action>((set) => ({
  userRole: null,
  setUserRole: (role) =>
    set(() => ({
      userRole: role,
    })),
}));

export { useAuthStore };
