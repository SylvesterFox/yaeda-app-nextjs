import OfferButton from "./offer-button";

export default function Main() {
    return (
        <main className="max-w-[1920px] h-[842px] mx-auto px-4 flex justify-center bg-[var(--main-color)] rounded-b-[48px] drop-shadow-lg">
            <div className="flex flex-col items-center justify-center w-[658px] h-[403px] m-auto">
                <h1 className="text-[64px] font-bold text-black mb-4 text-center">Доход до 190 000 ₽ в месяц¹</h1>
                <span className="border-solid border-b-1 border-black w-full"></span>
                <h5 className="text-[32px] text-black mb-8 text-center p-1">Управляйте доходом и получайте ежедневные выплаты²</h5>
                <OfferButton />
            </div>
            <div className="flex flex-row items-end justify-center">
                <img src="/main-image.png" alt="Main Image" className="w-[743px] h-[743px] object-cover right-[200px] relative rounded-lg drop-shadow-[-29px_0px_38.5px_rgba(0,0,0,0.25)]" />
            </div>
        </main>
    )
}