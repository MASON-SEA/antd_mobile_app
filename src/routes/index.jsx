/*
 * @Date: 2023-10-16 17:10:56
 * @LastEditors: mason
 * @LastEditTime: 2023-10-17 18:00:41
 * @FilePath: \app1\src\routes\index.jsx
 */
// 路由独立配置文件
import { Routes, Route} from 'react-router-dom'
import Home from '@/App'
import Login from '@/pages/login'
const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </>
    )
}

export default RoutesConfig

