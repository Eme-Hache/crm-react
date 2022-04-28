import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import { useState } from 'react'

const Layout = () => {
    const [toggled, setToggled] = useState(false)

    return (
        <div className='flex min-h-screen flex-col md:flex-row'>
            <Menu toggled={toggled} setToggled={setToggled} />

            <div className='p-6 md:p-10 md:h-screen overflow-auto bg-blue-50 flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout