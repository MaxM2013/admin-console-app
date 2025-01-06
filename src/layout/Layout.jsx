import { useDesignToken } from '../theme/hooks/useDesignToken';

import SideBar from "./SideBar"
import Header from './Header'
import Main from './Main'

const Layout = () => {

    const { colorBgElevated, colorTextBase } = useDesignToken();
    
    return (
        <>
        <div 
            className={`flex h-screen overflow-hidden`}
            style={{
                color: colorTextBase,
                background: colorBgElevated,
              }}
               >
            <Header />
            <div className="z-50 flex-shrink-0 hidden h-full md:block">
                <SideBar />
            </div>
            <Main />
        </div>
        </>
    )
}

export default Layout