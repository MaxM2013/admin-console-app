import React, { useState, useEffect } from "react";
import { Menu } from "antd/es"
import { useDesignToken } from '../theme/hooks/useDesignToken';
import  Scrollbar from '../components/Scrollbar'
import { NAV_COLLAPSED_WIDTH, NAV_WIDTH } from './config'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import useSecurity from "../hooks/security/useSecurity";
import * as Icon from "@ant-design/icons"
import { Link } from "react-router-dom";


const SideBar = () => {

    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false)

    const [menuList, setMenuList] = useState([]);
    const { menus, getUserInfo } = useSecurity()

    

    const { colorPrimary, colorTextBase, colorBgElevated, colorBorder } = useDesignToken();

    const menuStyle = {
        background: colorBgElevated,
      };

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
      };      
      
      const onClick = ({ key }) => {
        console.log('select menu, key = ', key)
        navigate(key)
      }; 

      const fetchUserInfo = async () => {
        await getUserInfo()
      }

      useEffect(() => {
        console.log('fetchuserInfo')
        fetchUserInfo()
      }, [])
      
      useEffect(() => {
        const list = []
        menus.map(item => {
            list.push({
                // ...item,
                label: item.label,
                key: item.key,
                icon: iconToElement(item.iconName)
            })
        })
        setMenuList(list)
        }, [menus])

    // 创建icon图标元素
    const iconToElement = (name) =>
        React.createElement(Icon && (Icon)[name], {
            // style: { fontSize: '16px' }
    })

      
    return (
        <>
            <div
                className="flex flex-col h-full"
                style={{
                    width: collapsed ? NAV_COLLAPSED_WIDTH : NAV_WIDTH,
                    borderRight: `1px dashed ${colorBorder}`,
                }}
            >
                <div className='grid place-items-center'>
                    <span className="text-xl font-bold" style={{ color: colorPrimary }}>
                      Admin Console
                    </span>                    
                </div>

                <div className="relative flex items-center justify-center h-20 py-4">
                    <button
                        onClick={toggleCollapsed}
                        className="absolute right-0 top-7 z-50 hidden h-6 w-6 translate-x-1/2 cursor-pointer select-none rounded-full text-center !text-gray md:block"
                        style={{ color: colorTextBase, borderColor: colorTextBase, fontSize: 16 }}
                    >
                        {collapsed ? <MenuUnfoldOutlined size={20} /> : <MenuFoldOutlined size={20} />}
                    </button>
                </div>

                <Scrollbar
                    style={{
                    height: 'calc(100vh - 70px)',
                    }}
                >

                    {/* <Menu
                        mode="inline"
                        items={menus}
                        className="h-full !border-none"
                        onClick={onClick}
                        style={menuStyle}
                        inlineCollapsed={collapsed}
                        inlineIndent={50}
                    /> */}

                    <Menu
                        mode="inline"
                        className="h-full !border-none"
                        onClick={onClick}
                        style={menuStyle}
                        inlineCollapsed={collapsed}
                        inlineIndent={50}
                        items={menuList}
                    >
                        {/* {
                            menus.map(item => {
                                <menuitem
                                    key={item.key}
                                    icon={item.icon ? iconToElement(item.icon) : ""}>
                                    <Link to={item.key}>{item.label}</Link>
                                </menuitem>
                            })
                        } */}
                    </Menu>

                </Scrollbar>

            </div>
        </>
    )
}

export default SideBar