import { PostList } from "./PostList";
import { AddPostForm } from "./AddPostForm";
import Loading from "../../components/Loading";
import { message } from 'antd'

export const PostListPage = () => {

    const [messageApi, contextHolder] = message.useMessage();

    return (
        <>
        <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
            <PostList messageApi={messageApi} />
        </div>
        <div className=" md:flex-2">
            <AddPostForm />
        </div>
        </div>
        <Loading />
        { contextHolder }
        </>
    )
}