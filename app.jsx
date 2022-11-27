import './css/main.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useLocation } from "react-router-dom";
import Start from './start';

const Header = () => {
    return(
        <header>
            <img src='/img/header_logo.svg' alt='Logo' />           
            <div>
                <div className='active'>Ru</div>/
                <div>En</div>
            </div>
            <div>
                <NavLink to={'hockey_sticks'} className={({ isActive }) => isActive ? 'active' : undefined }>Клюшки</NavLink>
                <NavLink to={'clothes'} className={({ isActive }) => isActive ? 'active' : undefined }>Одежда</NavLink>
                <NavLink to={'accessories'} className={({ isActive }) => isActive ? 'active' : undefined }>Аксессуары</NavLink>
                <NavLink to={'customs'} className={({ isActive }) => isActive ? 'active' : undefined }>Кастомизация</NavLink>
                <NavLink to={'find_order'} className={({ isActive }) => isActive ? 'active' : undefined }>Отследить заказ</NavLink>
            </div>
            <div>
                <div>                
                    <div className='header-search'>
                        <input placeholder='Введите текст поиска'></input>{ /* Должен быть элемент Form, но в данном случае он бесполезен */}
                        <img src='/img/header_serch_icon.svg' alt='search icon' />
                    </div>
                    <NavLink to={'contacts'}><img src='/img/header_phone.svg' alt='Контакты' /></NavLink>
                    <NavLink to={'unknown'}><img src='/img/header_unknown.svg' alt='unknown' /></NavLink>
                    <NavLink to={'account'}><img src='/img/header_user_account.svg' alt='Личный кабинет' /></NavLink>
                </div>
                <NavLink to={'cart'}><img src='/img/header_cart.svg' alt='Корзина' /></NavLink>
            </div>
        </header>
    );
}

const Footer = () => {
    return(
        <footer>
            <div>
                <img src='/img/footer_zarad.svg' alt='ЗаряД' />
                <div>
                    <img src='/img/telegramm.svg' alt='telegramm' />
                    <img src='/img/vk.svg' alt='vk' />
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div><span>Наименование</span>ООО «ЗаряД»</div>
                        <div><span>Юридический адрес</span>Республика Татарстан, г. Набережные Челны, <br />ул. Альметьевский тракт, д. 6а</div>
                        <div><span>Телефон</span>+7 (800) 511-93-90</div>
                        <div><span>Email</span>info@zaryad-hockey.ru</div>
                        <div><span>ИНН</span>1646040440</div>
                        <div><span>ОГРН</span>1151674001632</div>
                    </div>
                    <div>
                        <span>© 2017-2022 Заряд</span>
                        <span className='policy'><Link to={'/policy'}>Политика конфиденциальности</Link></span>
                    </div>
                </div>

                <div>
                    <ul>
                        <li>О бренде</li>
                        <li><Link to={'/istoria_brenda'}>История бренда</Link></li>
                        <li><Link to={'/tehnologii'}>Технологии производства</Link></li>
                        <li><Link to={'/proizvodstvo'}>Производство</Link></li>
                        <li><Link to={'/kontakti_magazinov'}>Контакты магазинов</Link></li>
                    </ul>
                    <ul>
                        <li>Партнерам</li>
                        <li><Link to={'/kak_stat_partnerom'}>Как стать партнером</Link></li>
                        <li><Link to={'/kak_mi_rabotaem'}>Как мы работаем</Link></li>
                        <li><Link to={'/info'}>Информация о выборе контрагентов</Link></li>
                    </ul>
                    <ul>
                        <li>Покупателям</li>
                        <li><Link to={'/dossavka_i_oplata'}>Доставка и оплата</Link></li>
                        <li><Link to={'/obmen_i_vozvrat'}>Обмен и возврат</Link></li>
                        <li><Link to={'/warranty'}>Гарантия</Link></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li><Link to={'/bonus_programm'}>Бонусная программа</Link></li>
                        <li><Link to={'/sizes_table'}>Таблица размеров</Link></li>
                        <li><Link to={'/cert'}>Подарочный сертификат</Link></li>
                    </ul>
                    <img src='/img/imperium.svg' alt='imperium' />
                    <Link to={'/contact_us'} className='orange-btn'>Связаться<br />с нами</Link>
                </div>
            </div>            
        </footer>
    );
}

const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return ( 
        <>
            <Routes>                 
                <Route path="hockey_sticks" element={ <Start /> } />
                <Route
                    path="/"
                    element={ <Navigate to="/hockey_sticks" replace /> }
                />
                <Route
                    path="*"
                    element={ <main className='empty-page'><span>404</span>страница не найдена</main> }
                />
            </Routes>
            <Header />
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.querySelector('root')).render(<BrowserRouter><App /></BrowserRouter>);