import { Flex, Typography,Avatar } from 'antd';
import Search from 'antd/es/transfer/search';
import React from 'react'
import{MessageOutlined,
    NotificationOutlined,
    UserOutlined,
} from'@ant-design/icons';


const CustomHeader = () => {
  return (
    <Flex align='centre' justify='space-between ' className='bg-primary-light'>
        <Typography.Title level={3} type='secondary'>
           Welcome Back
        </Typography.Title>
        <Flex align='center' gap="3rem">
            <Search placeholder='Search dashboard' allowClear/>
        <Flex align='centre' gap='10px'></Flex>
        <MessageOutlined className='header-icon'/>
        <NotificationOutlined className='header-icon'/>
        <Avatar icon={<UserOutlined/>}/>
        </Flex>
    </Flex>
  )

}
export default CustomHeader;
