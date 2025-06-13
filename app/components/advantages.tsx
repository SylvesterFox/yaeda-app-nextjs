import Image from "next/image";
import kur from "@/public/kur.png";
import OfferButton from "./offer-button";

export default function Advantages() {
  return (
    <div className="w-full bg-[var(--main-color)] rounded-b-[32px] md:rounded-b-[48px] shadow-lg relative z-10 pb-16 mt-20">
      {/* Верхний блок с изображением */}
      <div className="h-[250px] sm:h-[400px] md:h-[519px] relative flex justify-center rounded-b-[24px] md:rounded-b-[30px] overflow-hidden shadow-md">
        <Image
          alt="kur"
          src={kur}
          fill
          className="object-cover"
          style={{ objectPosition: "center top" }} // смещаем изображение вниз
        />
      </div>

      {/* Заголовок */}
      <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-center mt-10 px-4 sm:px-10 md:px-[80px] lg:px-[150px]">
        Преимущества курьеров на личном или арендованном транспорте
      </h2>

      {/* Контент */}
      <div className="flex flex-col items-center mt-8 px-4">
        <ul className="text-center text-lg sm:text-xl md:text-[27px] space-y-10 mb-14 max-w-4xl">
          <li>
            <p className="font-bold">Приоритет</p>
            <p>Получайте заказы быстрее других</p>
          </li>
          <li>
            <p className="font-bold">Оперативность</p>
            <p>Успевайте доставлять больше заказов</p>
          </li>
          <li>
            <p className="font-bold">Выше доход</p>
            <p>Надбавка за каждый заказ — доход вело и авто курьеров больше на 30%</p>
          </li>
        </ul>

        <OfferButton />
      </div>
    </div>
  );
}