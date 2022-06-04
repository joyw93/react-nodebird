import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Card, Avatar, Button } from "antd";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>,
        <div key="followings">팔로잉</div>,
        <div key="followers">팔로워</div>,
      ]}
    >
      <Card.Meta title="joyw93" avatar={<Avatar>J</Avatar>} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
