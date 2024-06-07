import '@styles/Profile.sass'
import { Link, NavLink, Route, Routes } from 'react-router-dom';

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__leftbar">
                <div className="profile__info">
                    <div className="profile__img">
                        <img src="https://s3-ap-southeast-2.amazonaws.com/dmsuploads/package/images/2020/1584328035.jpeg" alt="" />
                    </div>
                    <div className="profile__name">Фадеев Владимир</div>
                    <div className="profile__role">Студент</div>
                </div>
                <nav className='profile__nav'>
                    <NavLink className='profile__navlink' to='/profile'>
                        Профиль
                    </NavLink>
                    <NavLink className='profile__navlink' to='/profile/courses'>
                        Мои курсы
                    </NavLink>
                    <NavLink className='profile__navlink' to='/profile/settings'>
                        Настройки
                    </NavLink>
                    <button className='ui-btn ui-btn-dangerous profile__exit'>Выйти</button>
                </nav>
            </div>
            <div className="profile__content">
                <Routes>
                    <Route path='/profile' />
                    <Route path='/profile/courses' />
                    <Route path='/profile/settings' />
                </Routes>
            </div>
        </div>
    );
}