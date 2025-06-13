import Image from "next/image";
import BurgerMenu from "./burgermenu";

export default function Header() {
    return (   
        <div className=" flex justify-center items-center relative w-[100%] lg:top-17 top-10  left-0">
             <header className="bg-[var(--main-color)] text-white lg:h-[142px] h-[80px] lg:w-[80%] flex items-center justify-between rounded-b-[24px] z-20 px-9 fixed drop-shadow-lg w-[100%] ">
                <div className="flex flex-col ">
                    <img src="/logo.png" alt="YaEdaParner Logo" className="h-12 mr-4 hidden lg:block" />
                    <Image src="/logo.png" alt="yaeda" width={120} height={120} className="lg:hidden" />
                    <h1 className="text-[10px] font-bold text-black lg:block lg:text-[20px]">Паринер сервиса</h1>
                </div>
                <BurgerMenu />
            </header>
        </div>
    )
}