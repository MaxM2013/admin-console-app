import React, { useEffect } from 'react'
//import { useSelector } from 'react-redux'
import { usePosts } from '../../hooks/posts/usePosts'

export const PostList = ({messageApi}) => {
    
  // const posts = useSelector(state => state.posts)
  const { posts, queryPosts } = usePosts()

  const fetchData = async () => {
    try {
      await queryPosts(0)
    } catch(e) {
      console.log('PostList, error = ', e)
      messageApi.open({
        type: 'error',
        content: e.code + ', ' + e.message,
      });
    }
  }

  useEffect(() => {

      fetchData()

  }, [])

  const renderedPosts = posts.map(post => (
    <article 
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" 
      key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>文章列表</h2>
      {renderedPosts}
    </section>
  )
}