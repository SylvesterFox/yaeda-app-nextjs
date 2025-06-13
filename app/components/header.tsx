import Image from "next/image";

export default function Header() {
    return (   
        <div className=" flex justify-center items-center relative w-[100%] lg:top-17 top-10  left-0">
             <header className="bg-[var(--main-color)] text-white lg:h-[142px] h-[80px] lg:w-[80%] flex items-center justify-between rounded-b-[24px] z-20 px-9 fixed drop-shadow-lg w-[100%] ">
                <div className="flex flex-col ">
                    <img src="/logo.png" alt="YaEdaParner Logo" className="h-12 mr-4 hidden lg:block" />
                    <Image src="/logo.png" alt="yaeda" width={120} height={120} className="lg:hidden" />
                    <h1 className="text-[10px] font-bold text-black lg:block lg:text-[20px]">Паринер сервиса</h1>
                </div>
                <nav className="ml-auto">
                    <ul className="lg:flex space-x-3 drop-shadow-lg text-[20px] hidden">
                        <li><a href="#" className="text-white  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white hover:text-black">Стать курьером</a></li>
                        <li><a href="#" className="text-white px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white hover:text-black">Преимущества</a></li>
                        <li><a href="#" className="text-white  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white hover:text-black">FAQ</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}