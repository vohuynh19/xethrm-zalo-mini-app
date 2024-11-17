import React, { Suspense, useState } from "react";
import {
  List,
  Page,
  Icon,
  useNavigate,
  Box,
  Button,
  Sheet,
  Header,
} from "zmp-ui";
import UserCard from "components/user-card";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <Page>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Suspense>
          <div className="section-container">
            <UserCard />
          </div>
        </Suspense>

        <Box flex flexDirection="column" style={{ flex: 1 }}>
          <List className="section-container">
            <List.Item
              onClick={() => navigate("/camera")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>Chấm công</div>
            </List.Item>

            <List.Item
              onClick={() => navigate("/camera")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>Công việc được giao</div>
            </List.Item>

            <List.Item
              onClick={() => navigate("/camera")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>Lịch làm việc</div>
            </List.Item>

            <List.Item
              onClick={() => navigate("/camera")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>Bảng lương</div>
            </List.Item>
          </List>

          <Box flex style={{ flex: 1 }} />

          <Box mb={8} flex justifyContent="center" alignItems="center">
            <Button
              variant="primary"
              icon={<Icon size={24} icon="zi-add-story" />}
              onClick={() => setActionSheetVisible(true)}
            />
          </Box>
        </Box>
      </div>

      <Sheet.Actions
        swipeToClose
        visible={actionSheetVisible}
        onClose={() => setActionSheetVisible(false)}
        title="Đăng ký tác vụ"
        actions={[
          [
            { text: "Nghỉ phép", close: true },
            { text: "Đổi ca", close: true },
            { text: "Nhờ làm thay", close: true },
            { text: "Chấm công bổ sung", close: true },
          ],
        ]}
      />
    </Page>
  );
};

export default HomePage;
