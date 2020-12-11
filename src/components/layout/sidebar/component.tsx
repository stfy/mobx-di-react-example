import { styled } from 'linaria/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <NavigationButton to="/">
                {/*<DashboardIcon />*/}
            </NavigationButton>

            <NavigationButton to="/analytics">
                {/*<AnalyticsIcon />*/}
            </NavigationButton>
        </SidebarContainer>
    );
};

const NavigationButton = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  line-height: 0;
  margin-bottom: 10px;
  color: white;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

const SidebarContainer = styled.div`
  background: #091e42;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  padding: 14px 10px;
  border-right: 1px solid hsla(0, 0%, 100%, 0.09);
`;
