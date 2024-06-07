import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <nav className='nav'>
                <h1>ВКР</h1>
                <NavLink
                    className={({ isActive }: { isActive: boolean }) => [(isActive ? 'nav__active' : ''), 'nav__link'].join(' ')}
                    to='/home'>
                    Главная
                </NavLink>
                <NavLink
                    className={({ isActive }: { isActive: boolean }) => [(isActive ? 'nav__active' : ''), 'nav__link'].join(' ')}
                    to='/courses'>
                    Курсы
                </NavLink>
                <NavLink
                    className={({ isActive }: { isActive: boolean }) => [(isActive ? 'nav__active' : ''), 'nav__link'].join(' ')}
                    to='/auth'>
                    Войти
                </NavLink>
            </nav>
        </header>
    );
}