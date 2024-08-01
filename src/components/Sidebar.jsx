import { Flex,Menu } from 'antd'
import React from 'react'
import {FaLeaf} from 'react-icons/fa6'
import {
  LoginOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  SettingOutlined,
  OrderedListOutlined,
  UserOutlined,
}from'@ant-design/icons';

function Sidebar() {
  return (
    <>
    <Flex align='centre' justify='centre' >
        <div className="logo">
            <FaLeaf/>

        </div>
        
    </Flex>
    <Menu mode='inline' defaultSelectedKeys={['1']} className='menu-bar'
        items={[
          {
            key:'1',
            icon:<UserOutlined/>,
            label:'Dashboard',
          },
          {
            key:'2',
            icon:<CarryOutOutlined/>,
            label:'Orders',
          },
          {
            key:'3',
            icon:<OrderedListOutlined/>,
            label:'ToDO',
          },
          {
            key:'4',
            icon:<ProfileOutlined/>,
            label:'Profile',
          },
          {
            key:'5',
            icon:<SettingOutlined/>,
            label:'Setting',
          },
          {
            key:'6',
            icon:<LoginOutlined/>,
            label:'Logout',
          },
        ]}
        
        />
    </>
  );
};

export default Sidebar