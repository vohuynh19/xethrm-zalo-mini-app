import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "components/user-card";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Suspense>
        <div className="section-container">
          <UserCard />
        </div>
      </Suspense>
      <div className="section-container">
        <List>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>Thông tin</div>
          </List.Item>

          <List.Item
            onClick={() => navigate("/camera")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>Chấm công</div>
          </List.Item>
        </List>
      </div>
    </Page>
  );
};

export default HomePage;
