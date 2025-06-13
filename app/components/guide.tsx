import OfferButton from "./offer-button";

export default function GuideBlock() {
    return (
        <div className="w-full max-w-screen-2xl px-4 mx-auto mt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left sm:ml-50 mb-8">
                Как стать курьером?
            </h2>

            <div className="flex flex-col items-center">
                <div className="w-full max-w-[1122px] bg-white flex rounded-[30px] shadow-lg mb-12 p-6 sm:p-12">
                    <ul className="list-decimal pl-6 sm:pl-10 text-lg sm:text-xl md:text-[27px] font-bold space-y-6 sm:space-y-8 leading-relaxed">
                        <li>Заполнить анкету (2–3 минуты)</li>
                        <li>Ознакомиться с условиями сотрудничества (2–3 минуты)</li>
                        <li>Выбрать время и адрес курьерского центра для получения сумки</li>
                        <li>Получить сумку, активировать приложение и начать доставки</li>
                    </ul>
                </div>

                <OfferButton />
            </div>
        </div>
    );
}
