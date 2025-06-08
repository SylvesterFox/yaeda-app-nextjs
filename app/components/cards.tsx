import Image from "next/image"
import OfferButton from "./offer-button"

export default function CradsContent() {
    return (
        <div className="max-w-1920px px-1 flex justify-center border-dashed border-b-2">
            <div className="w-[1440px] h-[1063px]  gap-[75px]">
                <div className="flex flex-row gap-[55px] justify-center">
                    <div className="w-[327px] h-[361px] bg-[#FFFFFF] mt-[55px] rounded-[30px] drop-shadow-lg">
                        <div className="w-auto h-[106px] rounded-t-[30px] bg-[#E6A900] flex items-center justify-center text-white font-bold text-[20px] text-center gap-[46px]">
                            <Image src="/plug.svg" width={40} height={40} alt="plug" className="" />
                            <span className="w-[207px]">Быстрое подключение к сервису</span>
                        </div>
                        <p className="mt-[45px] font-bold text-center text-[20px] px-[35px]">Начинайте доставлять заказы уже на следующий день</p>
                    </div>
                    <div className="w-[327px] h-[361px] bg-white mt-[55px] rounded-[30px] drop-shadow-lg">
                        <div className="w-auto h-[106px] bg-[#E6A900] rounded-t-[30px] flex items-center justify-center text-white font-bold text-[20px] text-center gap-[46px]">
                            <Image src="/time.svg" width={30} height={30} alt="time" className="" />
                            <span className="w-[207px]">Абсолютно свободный график</span>
                        </div>
                        <p className="mt-[45px] font-bold text-center text-[20px] px-[35px]">Выходите на доставки, когда захочется, совмещайте с учёбой или работой</p>
                    </div>
                    <div className="w-[327px] h-[361px] bg-white mt-[55px] rounded-[30px] drop-shadow-lg">
                        <div className="w-auto h-[106px] bg-[#E6A900] rounded-t-[30px] flex items-center justify-center text-white font-bold text-[20px] text-center gap-[46px]">
                            <Image src="/car.svg" width={40} height={40} alt="car" className="" />
                            <span className="w-[207px]">Доставляйте на чем угодно</span>
                        </div>
                        <p className="mt-[45px] font-bold text-center text-[20px] px-[35px]">Доставляйте заказы пешком, на велосипеде, самокате или собственном автомобиле</p>
                    </div>
                </div>
                <div className="flex flex-row gap-[55px] justify-center ">
                    <div className="w-[327px] h-[361px] bg-white mt-[55px] rounded-[30px] drop-shadow-lg">
                        <div className="w-auto h-[106px] bg-[#E6A900] rounded-t-[30px] flex items-center justify-center text-white font-bold text-[20px] text-center gap-[46px]">
                            <Image src="/bx-money.svg" width={40} height={40} alt="money" className="" />
                            <span className="w-[207px]">Чаевые</span>
                        </div>
                        <p className="mt-[45px] font-bold text-center text-[20px] px-[35px]">Целиком отправляются вам</p>
                    </div>
                    <div className="w-[327px] h-[361px] bg-white mt-[55px] rounded-[30px] drop-shadow-lg">
                        <div className="w-auto h-[106px] bg-[#E6A900] rounded-t-[30px] flex items-center justify-center text-white font-bold text-[20px] text-center gap-[46px]">
                            <Image src="/discount.svg" width={40} height={40} alt="discount" className="" />
                            <span className="w-[207px]">Скидка на еду</span>
                        </div>
                        <p className="mt-[45px] font-bold text-center text-[20px] px-[35px]">Заказывайте еду в ресторанах-партнёрах для себя и близких</p>
                    </div>
                    <div className="w-[327px] h-[361px] bg-white mt-[55px] rounded-[30px] drop-shadow-lg">
                        <div className="w-auto h-[106px] bg-[#E6A900] rounded-t-[30px] flex items-center justify-center text-white font-bold text-[20px] text-center gap-[46px]">
                            <Image src="/acces.svg" width={40} height={40} alt="acces" className="" />
                            <span className="w-[207px]">Страхование</span>
                        </div>
                        <p className="mt-[45px] font-bold text-center text-[20px] px-[35px]">Одна программа действует во время доставок, другая — после них: в случае травмы или болезни вам положены выплаты³</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center mt-[55px]">
                    <OfferButton />
                </div>
            </div>   
        </div>
    )
}