import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Form, Input, Button } from "antd"

// import { postAdded } from '../../store/slice/PostSlice'
import { usePosts } from '../../hooks/posts/usePosts'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // const dispatch = useDispatch()
    const { addPost } = usePosts()
    const { TextArea } = Input;

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    
    const onFinish = () => {
        if (title && content) {
            // dispatch(
            //     postAdded({
            //         id: nanoid(),
            //         title,
            //         content
            //     })
            // )
            addPost({
                id: nanoid(),
                title,
                content
            })
            setTitle('')
            setContent('')
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('error info = ' + errorInfo)
    }

    return (
        <section>
            <h2>添加新文章</h2>
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
                <Form.Item
                    className="block pr-4 my-2 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                    label="文章标题"
                    name="postTitle"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                </Form.Item>

                <Form.Item
                    className="block pr-4 my-2 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                    label="内容"
                    name="postContent"
                >
                    <TextArea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="my-2">
                    <Button type="primary" htmlType="submit">保存文章</Button>
                </Form.Item>
            </Form>
        </section>
    )
}