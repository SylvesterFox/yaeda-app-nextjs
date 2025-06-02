export default function Header() {
    return (   
        <div className="max-w-1920px mx-auto px-4 flex justify-center">
             <header className="bg-[var(--main-color)] text-white h-[142px] min-w-[1399px] mx-auto flex items-center justify-center rounded-b-[24px] z-20 px-9 fixed drop-shadow-lg">
                <div className="flex flex-col">
                    <img src="/logo.png" alt="YaEdaParner Logo" className="h-12 mr-4" />
                    <h1 className="text-[20px] font-bold text-black">Паринер сервиса</h1>
                </div>
                <nav className="ml-auto">
                    <ul className="flex space-x-3 drop-shadow-lg text-[20px]">
                        <li><a href="#" className="text-black  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white">Стать курьером</a></li>
                        <li><a href="#" className="text-black px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white">Преимущества</a></li>
                        <li><a href="#" className="text-black  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white">FAQ</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}