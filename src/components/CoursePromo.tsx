import '@styles/CoursePromo.sass'
import { Page } from './Page';

export const CoursePromo = () => {
    return (
        <Page>
            <div className="course-promo">
                <header className="course-promo__header">
                    <div className="course-promo__header__wrapper">
                        <h1 className="course-promo__title">Стандартные алгоритмы С++</h1>
                        <p>Алгоритмы широко применяются в решении различных задач и сильно упрощают жизнь программиста, который в них разбирается.</p>
                        <div className="course-promo__header-info">
                            Средний уровень
                        </div>
                    </div>
                </header>
                <main className="course-promo__main">
                    <div className="course-promo__content">
                        <div className="course-promo__leftbar ui-card">
                            <div className="course-promo__paragraph">
                                <h2>
                                    Чему вы научитесь
                                </h2>
                                <p>Оценивать сложность своего решения
                                    Правильно подбирать алгоритм для решения
                                    Находить более простое решение задачи
                                    Разбираться в алгоритмах сортировок
                                    Мыслить алгоритмически
                                    Применять алгоритмы и структуры данных на реальных практических заданиях</p>
                            </div>
                            <div className="course-promo__paragraph">
                                <h2>
                                    О курсе
                                </h2>
                                <p>Алгоритмы в явном виде используются в узких направлениях разработки, где время выполнения и затрачиваемая память играют важнейшую роль. А неявно алгоритмы используются ВЕЗДЕ: в готовых библиотеках, в базах данных и в готовых технологиях. За любым вызовом готового метода стоит готовый алгоритм. Следовательно, важно понимать оптимальность выполнения любого метода.

                                    Целью курса является обучение работе с основными алгоритмами стандартной библиотеки.</p>
                            </div>
                            <div className="course-promo__paragraph">
                                <h2>
                                    Для кого этот курс
                                </h2>
                                <p>Для всех, кто уже знаком с основами языка и желает более эффективно решать поставленные задачи</p>
                            </div>
                            <div className="course-promo__paragraph">
                                <h2>
                                    Начальные требования
                                </h2>
                                <p>Знание основ языка</p>
                            </div>
                            <div className="course-promo__paragraph">
                                <h2>
                                    Начальные требования
                                </h2>
                                <p>Знание основ языка</p>
                            </div>
                            <div className="course-promo__paragraph" id='course-program'>
                                <h2>
                                    Программа курса
                                </h2>
                                <p>Знание основ языка</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-promo__rightbar ui-card">
                        <h2>1300 руб.</h2>
                        <button className='ui-btn ui-btn-accent'>Купить</button>
                        <button className='ui-btn ui-btn-secondary'>В избранное</button>
                        <div className="course-promo__structure">
                            <h3>Состав курса</h3>
                            <span><span className='ui-bold'>37</span> уроков</span>
                            <span><span className='ui-bold'>54</span> теста</span>
                            <span><span className='ui-bold'>35</span> интерактивных задач</span>
                            <a href="#course-program">Программа курса</a>
                            Последнее обновление 28.05.2024
                        </div>
                    </div>
                </main>
            </div>
        </Page>
    );
}