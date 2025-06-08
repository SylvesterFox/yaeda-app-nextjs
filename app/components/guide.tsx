import OfferButton from "./offer-button";

export default function GuideBlock() {
    return (
        <div className="w-[1440px] h-[866px] mx-auto mt-[45px]">
            <span className="text-[40px] font-bold w-[454px] ml-[183px]">
                Как стать курьером?
            </span>
            <div className="flex flex-col items-center mt-3">
                <div className="w-[1122px] h-[568px] bg-white flex  items-center rounded-[45px] drop-shadow-lg mb-[48px]">
                    <ul className="list-decimal font-bold text-[27px] my-[68px] ml-[53px] leading-[110px]">
                        <li>
                            <p>Заполнить анкету (2–3 минуты)</p>
                        </li>
                        <li>
                            <p>Ознакомиться с условиями сотрудничества (2–3 минуты)</p>
                        </li>
                        <li>
                            <p>Выбрать время и адрес курьерского центра для получения сумки</p>
                        </li>
                        <li>
                            <p>Получить сумку, активировать приложение и начать доставки.</p>
                        </li>
                    </ul>
                </div>
                <OfferButton />
            </div>
        </div>
    )
}