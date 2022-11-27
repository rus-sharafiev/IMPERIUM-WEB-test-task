import './css/start.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const [padding, setPadding] = useState({padding: 0});
    const [opacity, setOpacity] = useState(1);

    let slides = [        
        {
            id: 1,
            img: '/img/image2.png',
            name: 'Иван Иванович',
            team: 'какой-то команды'
        },
        {
            id: 2,
            img: '/img/image1.png',
            name: 'Константин Константинович',
            team: 'такой-то команды'
        },
        {
            id: 3,
            img: '/img/image2.png',
            name: 'Петр Петрович',
            team: 'такой-то команды'
        }
    ];

    let slide = slides[activeSlide];  
    let prevSlide = activeSlide != 0 ? activeSlide - 1 : slides.length - 1;
    let prevPrevSlide = prevSlide != 0 ? prevSlide - 1 : slides.length - 1;
    let nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
    let nextNextSlide = nextSlide < slides.length - 1 ? nextSlide + 1 : 0;
    
    return(
        <>
        <div className='carousel-container' style={padding}>
            <div key={'next' + slides[nextNextSlide].id}>
                <img src={slides[nextNextSlide].img} alt='slide' />
            </div>
            <div key={slides[nextSlide].id}>
                <img src={slides[nextSlide].img} alt='slide' />
            </div>
            <div key={slide.id} className='active'>
                <img src={slide.img} alt='slide' />
                <div style={{opacity: opacity}} >
                    <div>
                        <span>{slide.name}</span>
                        <span>Крутой хоккеист <br />{slide.team}</span>
                    </div>
                    <div>
                        <img src='/img/circle.svg' alt='circle' />
                        <img src='/img/round_text.svg' alt='round_text' className='rotate' />
                    </div>
                </div>
            </div>
            <div key={slides[prevSlide].id}>
                <img src={slides[prevSlide].img} alt='slide' />
            </div>
            <div key={'prev' + slides[prevPrevSlide].id}>
                <img src={slides[prevPrevSlide].img} alt='slide' />
            </div>
        </div>
        <Link to={'catalog'} className='round-btn to-catalog' style={{opacity: opacity}}>В каталог</Link>
        <div className='btns'>
            <div onClick={ () => {
                    setTimeout(() => {
                        activeSlide < slides.length - 1 ? setActiveSlide(activeSlide + 1) : setActiveSlide(0);
                        setPadding({padding: 0});
                        setTimeout(() => setOpacity(1), 100);
                    }, 200);
                    setPadding({padding: '0 0 0 2240px', transitionDuration: '0.2s'});
                    setOpacity(0);
                }}>
                <img src='/img/back_btn.svg' alt='Назад' />
            </div>
            <div onClick={ () => {
                    setTimeout(() => {
                        activeSlide != 0 ? setActiveSlide(activeSlide - 1) : setActiveSlide(slides.length - 1);
                        setPadding({padding: 0});
                        setTimeout(() => setOpacity(1), 100);
                    }, 200);
                    setPadding({padding: '0 2240px 0 0', transitionDuration: '0.2s'});
                    setOpacity(0);
                }}>
                <img src='/img/frw_btn.svg' alt='Вперед' />
            </div>
        </div>
        </>
    );
}

const SecondBlock = () => {

    const hsticks = [
        {
            id: 1,
            img: '/img/Frame1353.png',
            name: 'Хоккейная клюшка Заряд Т100',
            price: '14 690'
        },
        {
            id: 2,
            img: '/img/Frame1353.png',
            name: 'Хоккейная клюшка Заряд Т100',
            price: '14 690'
        },
        {
            id: 3,
            img: '/img/Frame1353.png',
            name: 'Хоккейная клюшка Заряд Т100',
            price: '14 690'
        },
        {
            id: 4,
            img: '/img/Frame1353.png',
            name: 'Хоккейная клюшка Заряд Т100',
            price: '14 690'
        }
    ]

    return(
        <div className='second-block'>
            <div className='second-block-products'>
                <div className='second-block-products-title'>
                    <div>Выбор наших клиентов</div>
                    <div className='btns'>
                        <div><img src='/img/back_btn.svg' alt='Назад' /></div>
                        <div><img src='/img/frw_btn.svg' alt='Вперед' /></div>
                    </div>
                </div>
                <div className='second-block-cards'>
                    {hsticks.map( (hstick) => // Карусель можно реализовать как в первом блоке
                        <div key={hstick.id} className='second-block-card'>
                            <div>
                                <img src={hstick.img} />
                            </div>
                            <div>
                                <div>
                                    <span>{hstick.name}</span>
                                    <span>{hstick.price} ₽</span>
                                </div>
                                <div>
                                    <div><img src='/img/products_compare.svg' /></div>
                                    <div><span>Подробнее</span><span className="material-symbols-rounded">chevron_right</span></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='second-block-stripes'>
                <div>
                    <span>
                        <span>Клюшки</span>
                        <span>Одежда</span>
                        <span>Аксессуары</span>
                        <span>Клюшки</span>
                        <span>Одежда</span>
                        <span>Аксессуары</span>
                    </span>
                    <span>
                        <span>Клюшки</span>
                        <span>Одежда</span>
                        <span>Аксессуары</span>
                        <span>Клюшки</span>
                        <span>Одежда</span>
                        <span>Аксессуары</span>
                    </span>
                </div>
                <div>
                    <span>
                        <span>Клюшки для маленьких чемпионов</span>
                        <span>Уникальная клюшка с твоим именем</span>
                        <span>Клюшки для маленьких чемпионов</span>
                        <span>Клюшки для маленьких чемпионов</span>
                    </span>
                    <span>
                        <span>Клюшки для маленьких чемпионов</span>
                        <span>Уникальная клюшка с твоим именем</span>
                        <span>Клюшки для маленьких чемпионов</span>
                        <span>Клюшки для маленьких чемпионов</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

const ThirdBlock = () => {
    return(
        <div className='third-block'>
            <div className='test'>
                <div className='test-title'>
                    <span>Подберем Вашу <br /> идеальную клюшку</span>
                    <span>Пройдите тест и узнайте какая клюшкам подойдет именно вам</span>
                </div>
                <img src='/img/test_zarad.svg' alt='ЗаряД' />
                <img src='/img/IMG_0104.png' alt='Хокеист' />
                <div className='test-red'></div>
                <div className='test-blue'></div>
                <Link to={'test'} className='round-btn'>Пройти тест</Link>
            </div>
            <div className='about'>
                <div>
                    <div>
                        <span>О бренде ЗаряД</span>
                        <span>Первый завод в россии по производству полного ассортимента высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры</span>
                    </div>
                    <div className='orange-btn'><Link to={'/about'}>Подробнее <br />о компании</Link></div>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Космические технологии</span>
                            <span>Первый завод в россии по производству полного ассортимента высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры</span>
                        </div>
                        <img src='/img/image_29_1.png' alt='Космические технологии' />
                    </div>
                    <div>
                        <div>
                            <span>Российский стиль</span>
                            <span>Клюшки заряд специально спроектированы для точной игры в пас, первого длинного паса, максимального контроля шайбы и остроатакующей комбинационной игры</span>
                        </div>
                        <img src='/img/image_29_2.png' alt='Российский стиль' />
                    </div>
                </div>
            </div>
            <div className='sale'>
                <div>
                    <div>
                        <div>
                            <div>
                                Получи <img src='/img/sale_icon_1.svg' /><br />
                                <img src='/img/sale_icon_2.svg' /> скидку <span>500 ₽</span><br />
                                за подписку
                            </div>
                            <span>Никакого спама и рекламы, только полезная<br />информация, скидки и персональные предложения</span>
                            <div className='sale-red'></div>
                            <div className='sale-blue'></div>
                        </div>
                        <input type='email' placeholder='Ваш Email'></input>
                    </div>
                    <Link to={'/subscribe'} className='round-btn'>Подписаться</Link>
                </div>
                <div>
                    <div></div>
                    <img src='/img/image70.png' alt='image70'></img>
                </div>
            </div>
        </div>
    );
}

export default Start = () => {
    return(
        <main>
            <div className='first-block'>
                <img src='/img/start_zarad.svg' alt='ЗаряД' />
                <div className='start-red'></div>
                <div className='start-blue'></div>
                <Carousel />
            </div>
            <SecondBlock />
            <ThirdBlock />
        </main>
    );
}