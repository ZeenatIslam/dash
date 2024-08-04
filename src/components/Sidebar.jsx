import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  LoginOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  SettingOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Sidebar() {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="bg-primary-light">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CarryOutOutlined />}>
          <Link to="/orders">Orders</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<OrderedListOutlined />}>
          <Link to="/todo">ToDO</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ProfileOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <Link to="/setting">Setting</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<LoginOutlined />}>
          <Link to="/logout">Logout</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidebar;
