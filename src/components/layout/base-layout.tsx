import React from "react";
import { styled } from "linaria/react";
import { Sidebar } from "./sidebar/component";

export const BaseLayout: React.FC = React.memo(({ children }) => {
  return (
    <Layout>
      <Sidebar />

      <Content>{children}</Content>
    </Layout>
  );
});

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  overflow: auto;
`;
