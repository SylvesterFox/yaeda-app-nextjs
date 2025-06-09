export default function Header() {
    return (   
        <div className=" flex justify-center items-center relative w-[100%] top-17  left-0">
             <header className="bg-[var(--main-color)] text-white h-[142px] w-[80%] flex items-center justify-between rounded-b-[24px] z-20 px-9 fixed drop-shadow-lg ">
                <div className="flex flex-col ">
                    <img src="/logo.png" alt="YaEdaParner Logo" className="h-12 mr-4 hidden lg:block" />
                    <h1 className="text-[20px] font-bold text-black hidden lg:block">Паринер сервиса</h1>
                </div>
                <nav className="ml-auto">
                    <ul className="lg:flex space-x-3 drop-shadow-lg text-[20px] hidden">
                        <li><a href="#" className="text-black  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white">Стать курьером</a></li>
                        <li><a href="#" className="text-black px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white">Преимущества</a></li>
                        <li><a href="#" className="text-black  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white">FAQ</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}