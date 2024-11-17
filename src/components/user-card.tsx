import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text, useNavigate } from "zmp-ui";

const UserCard: React.FunctionComponent = () => {
  const { userInfo } = useRecoilValue(userState);
  const navigate = useNavigate();

  return (
    <Box flex onClick={() => navigate("/user")}>
      <Avatar
        story="default"
        online
        src={userInfo.avatar.startsWith("http") ? userInfo.avatar : undefined}
      >
        {userInfo.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title>{userInfo.name}</Text.Title>
        <Text>Nhân viên phục vụ</Text>
      </Box>
    </Box>
  );
};

export default UserCard;
