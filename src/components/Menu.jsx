import MenuItem from './MenuItem'

const Menu = ({ toggled, setToggled }) => {
    return (
        <div className={`${toggled ? 'md:w-28' : 'md:w-80'} bg-white 
            py-10 relative shadow-lg transition-all duration-500 sm:w-full`}
        >
            <h2 className={`${toggled ? 'opacity-0' : 'opacity-100'} text-4xl
                font-black text-center text-blue-700 md:w-80 transition-all duration-300`}
            >
                CRM
            </h2>

            <nav className='mt-10 px-6 flex flex-row md:flex-col gap-4'>
                <MenuItem toggled={toggled} to='/customers' icon='fa-solid fa-house'>
                    Todos los Clientes
                </MenuItem>

                <MenuItem toggled={toggled} to='/customers/add' icon='fa-solid fa-user-plus'>
                    Agrega un Cliente
                </MenuItem>
            </nav>

            <i
                className='absolute bg-blue-700 w-8 h-8 rounded-full top-11 
                -right-4 shadow-lg md:flex justify-center 
                items-center hover:cursor-pointer font-bold text-white hidden'
                onClick={() => setToggled(!toggled)}
            >
                <i
                    className={`fa-solid fa-arrow-right w-full h-full flex 
                    items-center justify-center transition-all duration-300`}
                />
            </i>
        </div>
    )
}

export default Menu