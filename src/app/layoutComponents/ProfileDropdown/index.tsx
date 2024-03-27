import React from "react";
import styles from "./index.module.scss";
import { Button, ClickAwayListener, Fade, Popper } from "@mui/material";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  anchorElement: HTMLElement | null;
  handleMyProfileClick: () => void;
  handleLogoutClick: () => void;
}
export default function ProfileDropdown(props: Props) {
  const {
    isOpen,
    handleClose,
    anchorElement,
    handleMyProfileClick,
    handleLogoutClick,
  } = props;
  return isOpen && Boolean(anchorElement) ? (
    <Popper
      open={isOpen}
      anchorEl={anchorElement ?? null}
      transition
      placement={"bottom-end"}
    >
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={handleClose}>
          <Fade {...TransitionProps}>
            <div className={styles.profileDropdown}>
              <ProfileItem
                imgSrc={"/assets/images/icon_user.png"}
                onClick={handleMyProfileClick}
              >
                My Profile
              </ProfileItem>
              <ProfileItem
                imgSrc={"/assets/images/icon_logout_frame.png"}
                onClick={handleLogoutClick}
              >
                Logout
              </ProfileItem>
            </div>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  ) : null;
}

interface ProfileItemProps {
  imgSrc: string;
  children: React.ReactNode;
  onClick: () => void;
}
function ProfileItem(props: ProfileItemProps) {
  const { imgSrc, children, onClick } = props;

  return (
    <Button className={styles.profileItem} onClick={onClick}>
      <div>
        <img src={imgSrc} alt={imgSrc} width={40} height={40} />
      </div>
      <div className={styles.label}>{children}</div>
    </Button>
  );
}
