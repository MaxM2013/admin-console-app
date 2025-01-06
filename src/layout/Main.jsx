import { forwardRef } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { HEADER_HEIGHT } from './config';


const Main = forwardRef(() => {

    const mainStyle = {
        paddingTop: HEADER_HEIGHT,
        width: '100%',
      };

    return (
        <>
         <Content style={mainStyle} className="flex overflow-auto">
            <div
                className={`m-auto h-full w-full flex-grow sm:p-2 xl:max-w-screen-xl`}
            >
                <Outlet />
            </div>
         </Content>
        </>
    )
})

export default Main