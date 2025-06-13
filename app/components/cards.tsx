import Image from "next/image"
import OfferButton from "./offer-button"

export default function CradsContent() {
    return (
        <div className="max-w-[1920px] mx-auto px-4 border-dashed border-b-2">
            <div className="flex flex-col gap-16">
                {/* Карточки */}
                <div className="flex flex-wrap justify-center gap-8 mt-14">
                    {cardsTop.map((card, idx) => (
                        <Card key={idx} {...card} />
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {cardsBottom.map((card, idx) => (
                        <Card key={idx} {...card} />
                    ))}
                </div>

                {/* Кнопка */}
                <div className="flex justify-center mb-10">
                    <OfferButton />
                </div>
            </div>
        </div>
    );
}



function Card({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
    return (
        <div className="w-full sm:w-[327px] h-auto bg-white rounded-[30px] shadow-lg">
            <div className="h-[106px] bg-[var(--main-color)] rounded-t-[30px] flex items-center justify-center text-black font-bold text-[18px] sm:text-[20px] text-center gap-4 px-4">
                {icon}
                <span>{title}</span>
            </div>
            <p className="mt-6 font-bold text-center text-[18px] sm:text-[20px] px-6 pb-6">{text}</p>
        </div>
    );
}

import { PlugIcon, TimeIcon, CarIcon, MoneyIcon, DiscontIocn, ArrowIcon } from './Icons';

// Примерные данные карточек
const cardsTop = [
    {
        icon: <PlugIcon />,
        title: "Быстрое подключение к сервису",
        text: "Начинайте доставлять заказы уже на следующий день"
    },
    {
        icon: <TimeIcon />,
        title: "Абсолютно свободный график",
        text: "Выходите на доставки, когда захочется, совмещайте с учёбой или работой"
    },
    {
        icon: <CarIcon />,
        title: "Доставляйте на чем угодно",
        text: "Доставляйте заказы пешком, на велосипеде, самокате или собственном автомобиле"
    }
];

const cardsBottom = [
    {
        icon: <MoneyIcon />,
        title: "Чаевые",
        text: "Целиком отправляются вам"
    },
    {
        icon: <DiscontIocn />,
        title: "Скидка на еду",
        text: "Заказывайте еду в ресторанах-партнёрах для себя и близких"
    },
    {
        icon: <ArrowIcon />,
        title: "Страхование",
        text: "Одна программа действует во время доставок, другая — после них: в случае травмы или болезни вам положены выплаты³"
    }
];
