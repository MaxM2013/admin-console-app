import { useState } from "react";
import { Form, Input, Button, Image } from "antd"
import useSecurity from "../../hooks/security/useSecurity";
import { useNavigate } from "react-router-dom";
// import { Spin } from 'antd'
import Loading from "../../components/Loading";
import { startLoading, endLoading } from "../../store/slice/systemSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [spinning, setSpinning] = useState(false);
    // const { spinning, startLoading, finishLoading } = useFullScreenLoading()

    console.log('LoginPage.spinning = ', spinning)

    const [msg, setMsg] = useState('')
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        pwd: ''
    })

    const { login } = useSecurity()

    const onFinish = async (values) => {
        console.log('values = ', values)
        // setSpinning(true)
        // startLoading()
        // dispatch(startLoading())
        try {
            await login(loginInfo.username, loginInfo.pwd)
            // console.log('登录成功, isLogin = ' + isLogin())
            // setMsg('登录成功, isLogin = ' + isLogin())
            navigate('/home', {replace: true})
        } catch(e) {
            console.log('loginpage, error = ', e)
            setMsg(e.message)
        } finally {
            // dispatch(endLoading())
            // setSpinning(false)
            // finishLoading()
        }
    }

    const handleUsername = (e) => {
        setLoginInfo({
            username: e.target.value,
            pwd: loginInfo.pwd
        })
    }

    const handlePwd = (e) => {
        setLoginInfo({
            username: loginInfo.username,
            pwd: e.target.value
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('error info = ' + errorInfo)
    }

    return (
        <>
        <div className="flex items-center justify-center w-full h-screen">
            <Form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                {
                    process.env.NODE_ENV === 'development' ?
                (<small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>) : ('')
                }
                <Form.Item
                    className="block pr-4 my-2 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={loginInfo.username} onChange={(e) => handleUsername(e)} />
                </Form.Item>

                <Form.Item
                    className="block pr-4 my-2 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                    label="密码"
                    name="pwd"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password value={loginInfo.pwd} onChange={(e) => handlePwd(e)}/>
                </Form.Item>
            
                <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="my-2">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
        
        {/* <Spin fullscreen size='large' spinning={spinning} /> */}
        <Loading />
        </>
    )
}

export default LoginPage