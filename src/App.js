import './App.css';
// import LoginPage from './pages/login/LoginPage'
import { useRoutes } from 'react-router-dom';
import { baseRouters, functionalRouters } from './routes/index'
import { memo } from 'react'
import useSecurity from './hooks/security/useSecurity';
import { useEffect, useState } from 'react';

const App = memo(() => {

  const { menus } = useSecurity()

  const [routers, setRouters] = useState([])

  useEffect(() => {
    console.log('App. menus = ', menus)
    const children = []
    menus.map(m => {
      const rObj = functionalRouters.find(item => item.meta.name === m.rkey)
      if (rObj) {
        children.push(rObj)
      }
    })
    baseRouters[1].children = baseRouters[1].children.concat(children)
    setRouters(baseRouters)
  }, [menus])
  

  return (
    <>
    { useRoutes(routers)}
    </>
  )
})

export default App;
