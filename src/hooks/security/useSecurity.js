import useHttp, { setTokenForHttp } from '../useHttp'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks"
import { setMenus } from '../../store/slice/securitySlice';

const useSecurity = () => {

    const [token, saveToken] = useLocalStorage('auth-token', null)
    
    const { get, post } = useHttp()

    const menus = useSelector(state => state.security.menus)

    const dispatch = useDispatch()

    useEffect(() => {
        if (token != null) {
            console.log('token = ', token.token)
            setTokenForHttp(token.token)
        }
    }, [token])

    const login = async (username, password) => {

        console.log('login, username = ' + username + ', pwd = ' + password)

        const data = await post("/api/v1/login", {}, {username: username, pwd: password})
        console.log('data = ' + data)
            
        const evidence = {
            ...data,
            loginTime: Date.now()
        }
        // setTokenForHttp(data.token)
        saveToken(evidence)
    }

    const logout = () => {
        // setTokenForHttp('')
        saveToken(null)
    }

    const isLogin = () => {

        if (token != null) {
            console.log('isLogin = ' + (Date.now() - token.loginTime))
            if ((Date.now() - token.loginTime) <= token.expiry * 1000) {
                return true
            } else {
                logout()
                return false
            }
        } else {
            return false
        }        
    }

    const getUserInfo = async () => {

        const res = await get('/api/v1/auth/userInfo')
        console.log('getUserInfo, res = ', res)
        dispatch(setMenus(res.menus))
    }
    
    return {
        login,
        logout,
        isLogin,
        menus,
        getUserInfo
    }

}

export default useSecurity