import React from "react";
import { Flex } from "antd";
import Banner from "./Banner";
import {
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Orders from "./orders/Orders";
import Todo from "./todo/Todo";

function MainContent() {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Flex>
    </div>
  );
}

export default MainContent;
