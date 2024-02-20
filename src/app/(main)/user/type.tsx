interface ActionsAllowed {
  canEdit: boolean;
  canDelete: boolean;
  canReview: boolean;
}

export interface UserData {
  no: number;
  name: string;
  userId: string;
  department: string;
  userRole: string;
  activity: string;
  status: string;
  actionsAllowed: ActionsAllowed;
}
export type SortableColumn = keyof Omit<UserData, "no" | "actionsAllowed">;