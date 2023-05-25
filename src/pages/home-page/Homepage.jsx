import React from "react";
import './home-page.css';
import {GameItem} from "../../components/game-item";


const GAMES = [
    {
        image: '/games-images/fifa23.jpg',
        title: 'Fifa 23',
        genres: ['Спорт', 'Спортивный Симулятор'],
        price: 3500,
        video: 'https://www.youtube.com/embed/o3V-GvvzjE4',
        id: 1,
        description: "В FIFA 23 всемирная игра становится ещё лучше с технологией HyperMotion2; в течение сезона в игре появятся мужской и женский FIFA World Cup™, женские команды, кроссплатформенная игра* и многое другое.",
    },
    {
        image: '/games-images/Company.jpg',
        title: 'Company of Heroes 3',
        genres: ['Экшен', 'Стратегия', 'Тактика'],
        video: 'https://www.youtube.com/embed/F0nWPG_cFqY',
        price: 5000,
        id: 2,
        description: 'Company of Heroes 3 - это третья часть стратегии в реальном времени, посвященная сражениям Второй мировой войны. Триквел повествует о Средиземноморском театре военных действий, где игрокам открывается доступ к множеству разнообразных регионов. В CoH 3 кампания построена на манер того, что было в Dawn of War: Dark Crusade - игроки должны захватывать территории, постепенно окрашивая карту в свой цвет. Кроме сетевого режима игрокам также доступен и многопользовательский.'
    },
    {
        image: '/games-images/residentevil2.jpg',
        title: 'Resident Evil 2',
        genres: ['Глубокий сюжет', 'Survival horror'],
        video: 'https://www.youtube.com/embed/TdbocZWvviM',
        price: 4599,
        id: 3,
        description: 'Resident Evil 2 — игра в жанре survival horror. Основная механика игрового процесса схожа с предыдущей игрой, Resident Evil. Игрок исследует вымышленный средне-западный город, решает головоломки и сражается с монстрами.'
    },
    {
        image: '/games-images/battlefield.jpg',
        title: 'Battlefield V',
        genres: ['Экшен', 'Шутер'],
        video: 'https://www.youtube.com/embed/eDgFmLUOClI',
        price: 3258,
        id: 4,
        description: 'Battlefield V - это очередная часть серии военных шутеров от первого лица, основная ставка в котором сделана на многопользовательские сражения.'
    },
    {
        image: '/games-images/calisto.jpg',
        title: 'The Callisto Protocol',
        genres: ['Экшен', 'Survival horror'],
        video: 'https://www.youtube.com/embed/IT7swHyN8FQ',
        price: 4920,
        id: 5,
        description: 'The Callisto Protocol - это приключенческий триллер, созданием которого занимаются авторы серий Dead Space и Call of Duty.'
    },
    {
        image: '/games-images/dayz.jpg',
        title: 'Day Z',
        video: 'https://www.youtube.com/embed/7jk8prJA9nI',
        genres: ['Открытый мир', 'Шутер'],
        price: 3690,
        id: 6,
        description: 'DayZ - это многопользовательская игра в жанре survival horror в открытом мире. Действие игры происходит в вымышленном постсоветском государстве Черноруссия, жители которого в результате некоего катаклизма превратились в агрессивных зомби.'
    },
    {
        image: '/games-images/readdead.jpeg',
        title: 'Red Dead Redemption 2',
        video: 'https://www.youtube.com/embed/eaW0tYpxyp0',
        genres: ['Вестерн', 'Шутер'],
        price: 2999,
        id: 7,
        description: 'Red Dead Redemption 2 представляет собой игру в жанре action-adventure с открытым миром; игрок управляет одним персонажем с возможностью переключения камеры на вид от первого или от третьего лица по своему выбору.'
    },
    {
        image: '/games-images/mortalKombat12.jpg',
        title: 'Mortal Kombat 12',
        genres: ['Файтинг', 'Экшен'],
        video: 'https://www.youtube.com/embed/_EnQsEIfy2Y',
        price: 4720,
        id: 8,
        description: 'Mortal Kombat 12 - это двенадцатая часть знаменитой серии файтингов, которая предлагает игрокам необычайно глубокую кастомизацию, улучшенный по сравнению с предыдущей частью движок, множество новых - и крайне брутальных - добиваний, а также новых и старых знакомых бойцов, многих из которых игроки знают более 20 лет. '
    },
    {
        image: '/games-images/NFC.jpg',
        title: 'Need for Speed Unbound',
        genres: ['Аркада', 'Гонки'],
        video: 'https://www.youtube.com/embed/9ewiJJe_nYI',
        price: 3999,
        id: 9,
        description: 'Need for Speed Unbound - это новая часть гоночной серии от Criterion Games и Electronic Arts. Игра совмещает реализм и яркий, цветастый «мультяшный» стиль, благодаря чему машины в игре выглядят максимально реалистичными, а вот персонажи и спецэффекты вышли стилизованными.'
    },
]

export const Homepage = () =>{

    return (
        <div className='home-page'>
            {GAMES.map(game => <GameItem game={game} key={game.id} />)}
        </div>
    )
}