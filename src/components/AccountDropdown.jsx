import { Dropdown } from "antd/es"
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import useSecurity from '../hooks/security/useSecurity';

const AccountDropdown = () => {

    const { logout } = useSecurity()

    const items = [
        {
            label: (
              <NavLink to="https://www.qq.com/" target="_blank">
                最近新闻
              </NavLink>
            ),
            key: '1',
        },
        { type: 'divider' },
        {
          label: <button className="font-bold text-warning">登出</button>,
          key: '2',
          onClick: logout,
        }        
    ]

    return (
        <>
            <Dropdown menu={{ items }} >
                <a onClick={(e) => e.preventDefault()}>
                    <img className="w-8 h-8 rounded-full" src={logo} alt="" />
                </a>                
            </Dropdown>
        </>
    )

}

export default AccountDropdown
