import Image from "next/image";
import kur from "@/public/kur.png";
import OfferButton from "./offer-button";

export default function Advantages() {
    return (
        <div className="h-[1388px] bg-[var(--main-color)] rounded-b-[48px] drop-shadow-lg  z-10 relative ">
            <div className="h-[519px] bg-red-500 relative flex justify-center rounded-b-[30px] overflow-hidden drop-shadow-lg">
                <Image alt="kur"  src={kur} fill={true} style={{ objectFit: "cover",  objectPosition: "center 0.030rem"}} className="absolute inset-0 scale-100"  />
            </div>
            <div>
                <h2 className="text-[48px] font-bold text-center mt-10 px-[321px]">Преимущества курьеров на личном или арендованном транспорте</h2>
                <div className="flex flex-col items-center mt-6">
                    <ul className="text-center text-[27px] mb-[109px]">
                        <li className="mb-12">
                            <p className="font-bold">Приоритет</p>
                            <p>Получайте заказы быстрее других</p>
                        </li>
                        <li className="mb-12">
                            <p className="font-bold">Оперативность</p>
                            <p>Успевайте доставлять больше заказов</p>
                        </li>
                        <li className="mb-12">   
                            <p className="font-bold">Выше доход</p>
                            <p>Надбавка за каждый заказ - доход вело и авто курьеров больше на 30%</p>
                        </li>
                    </ul>
                    <OfferButton />
                </div>

            </div>

        </div>
    )
}