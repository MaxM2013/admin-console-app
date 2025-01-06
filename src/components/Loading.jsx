import { Spin } from "antd";
import { useSelector } from "react-redux";

const Loading = () => {

    const isLoading = useSelector((state) => state.system.isLoading )

    return (
        <>
        <Spin fullscreen size='large' spinning={isLoading} />
        </>
    )
}

export default Loading