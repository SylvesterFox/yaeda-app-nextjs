import Image from "next/image";
import OfferButton from "./offer-button";

export default function Main() {
    return (
        <main className="max-w-[1920px] h-[842px] mx-auto lg:px-[290px] flex justify-center bg-[var(--main-color)] rounded-b-[48px] drop-shadow-lg ">
            <div className="flex flex-col items-center justify-center w-[658px] h-[403px] lg:m-auto mt-70">
                    <h1 className="lg:text-[64px] text-[35px] font-bold text-black lg:mb-4  text-center px-1">Доход до 190 000 ₽ в месяц¹</h1>
                    <span className="border-solid border-b-1 border-black lg:w-full w-80"></span>
                    <h5 className="lg:text-[32px] text-[22px] font-bold text-black mb-8 text-center p-1">Управляйте доходом и получайте ежедневные выплаты²</h5>
                    <Image width={400} height={500} src="/image-eda.png" alt="" className="scale-130 h-[260px] w-[260px] object-cover mb-17 mt-6 rounded-[68px] bg-amber-300 lg:hidden"  />
                    <OfferButton />
            </div>
            <div className="lg:flex hidden flex-row items-end justify-center">
                <img src="/main-image.png" alt="Main Image" className="w-[743px] h-[743px] relative rounded-lg drop-shadow-[-29px_0px_38.5px_rgba(0,0,0,0.25)] hidden lg:block" />
            </div>
        </main>
    )
}