import React from "react";
import style from "./UserInfo.module.scss";

type UserInfoPropsType = any;

const UserInfo: React.FC<UserInfoPropsType> = () => {
  return (
    <div className={style.user_info}>
      <div>Профиль</div>
    </div>
  );
};

export default UserInfo;
