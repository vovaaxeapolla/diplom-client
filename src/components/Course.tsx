import '@styles/Course.sass'
import { NavLink } from 'react-router-dom';

export const Course = () => {
    return (
        <div className="course">
            <div className="course__leftbar">
                <div className="course__leftbar-header">
                    <h3>Стандартные алгоритмы С++</h3>
                </div>
                <div className='course__module'>
                    <label htmlFor='1' className='ui-btn ui-bold'>
                        1 Модуль
                    </label>
                    <input type='checkbox' hidden id='1' />
                    <div className='course__module-materials'>
                        <NavLink className='ui-btn' to={'1'}>1.1 Материал</NavLink>
                        <NavLink className='ui-btn' to={'2'}>1.2 Материал</NavLink>
                    </div>
                </div>
            </div>
            <div className="course__main-wrapper">
                <main className="course__main">
                    <div className="course__header ui-card">
                        <h1>Тема</h1>
                    </div>
                    <div className="course__content ui-card">
                        <div className="course__img-container">
                            <img src="https://i.ytimg.com/vi/aoxfxdIxSGE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFUgWShlMA8=&rs=AOn4CLBytwEm90YpAAXclTJ8B29jkXfGBg" alt="" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}