
export const BASE_MESSAGE_MANAGER = {
  isOpen: false,
  message: "",
  type: null,
  handleClose: () => {},
};
export enum MODAL_TYPE {
  YES_NO,
  CANCEL_CONFIRM,
  OK
}
interface BaseManager {
  type: MODAL_TYPE;
  isOpen: boolean;
  message: string;
  handleClose:  () => void;
}
export interface YesNoManager extends BaseManager {
  type: MODAL_TYPE.YES_NO;
  handleYes: () => void;
  handleNo: () => void;
}
export interface OkManager extends BaseManager {
  type: MODAL_TYPE.OK;
  handleOk: () => void;
}
export interface CancelConfirmManager extends BaseManager {
  type: MODAL_TYPE.CANCEL_CONFIRM;
  handleCancel: () => void;
  handleConfirm: () => void;
}
export type MessageManager = YesNoManager | OkManager | CancelConfirmManager;
