import { useDesignToken } from "../theme/hooks/useDesignToken";
import { HEADER_HEIGHT } from './config'
import AccountDropdown from '../components/AccountDropdown';

const Header = () => {

    const { colorBgElevated, colorTextBase } = useDesignToken();

    const headerStyle = {
        position: 'fixed',
        borderBottom: '',
        backgroundColor: colorBgElevated,
        right: '0px',
        left: 'auto',
        width: '100vw',
    }

    return (
        <>
        <header className={`z-20 w-full`} style={headerStyle}>
            <div 
                className="flex items-center justify-between flex-grow px-4 text-gray xl:px-6 2xl:px-10"
                style={{
                    height: HEADER_HEIGHT,
                  }}
                  >
                    <div className="flex items-baseline">

                    </div>
                    <div className='flex'>
                        <AccountDropdown />
                    </div>
            </div>
        </header>
        </>
    )
}

export default Header