import mockjs from "mockjs";

const Random = mockjs.Random

const posts = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ]

const apis = [
    {
        url: '/api/v1/auth/posts',
        type: 'get',
        response: config => {
            return {
                succ: true,
                code: '',
                msg: '',
                data: posts
            }
            
            // 返回错误
            // return {
            //     succ: false,
            //     code: 'ERR-001',
            //     msg: '不能获取文章列表',
            //     data: null
            // }
        }
    },
    {
        url: '/api/v1/auth/posts',
        type: 'post',
        response: config => {
            const post = JSON.parse(config.body)
            posts.push(post)
            return {
                succ: true,
                code: '',
                msg: '',
                data: post
            }
        }
    }
]

export default apis