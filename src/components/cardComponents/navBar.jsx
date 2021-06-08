import './styles/navBar.css'

export const NavBar = () => {
    return (
        <div className='main'>
            <nav className='flex'>
                <div className='flex'>
                    <img src="/images/logo.png" alt="Pañalera Store" />
                    <h1>Pañalera Store</h1>
                    
                </div>
                
                <ul className='listNone'>
                    <li><a>Inicio</a></li>
                    <li><a>Productos</a></li>
                    <li><a>Carrito</a></li>
                    <li><a>Perfil</a></li>
                </ul>
            </nav>
        </div>
    )
}