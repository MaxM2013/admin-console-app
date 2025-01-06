import { useDispatch, useSelector } from "react-redux";
import useHttp from "../useHttp";
import { listPosts, postAdded } from '../../store/slice/PostSlice'
import { message } from "antd";

export const usePosts = () => {

    const posts = useSelector((state) => state.posts.items)
    
    const dispatch = useDispatch()

    const { get, post } = useHttp()

    const addPost = async (data) => {
        console.log('addPost data = ', data)
        const res = await post('/api/v1/auth/posts', {}, data)
        dispatch(postAdded(res))
    }

    const queryPosts = async (x) => {       
            console.log('x = ', x)
            if (x === 1) {
                return Promise.reject({code: '0000', message: '参数不正确'})
            }
            const res = await get('/api/v1/auth/posts')
            dispatch(listPosts(res))
    }

    // const queryPosts = async () => {
    //     await queryPostsTrunk()
    // }

    // const addPost = (newPost) => {
    //     dispatch(addPostTrunk(newPost))
    // }

    return {
        posts,
        queryPosts,
        addPost
    }

}