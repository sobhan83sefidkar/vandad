import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

function MobileSidebar({ setOpenMenu, openMenu }) {
    return (
        <div className={`mobile-sidebar duration-700 ${openMenu ? " translate-x-0" : " translate-x-[100%]"} fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-100 z-[100]`}>
            <div className="mobile-sidebar-container w-full h-full ">
                <div className=" w-full h-12 flex items-center justify-end px-4">
                    <span className=" cursor-pointer" onClick={() => setOpenMenu(false)}>
                        <IoCloseSharp size={30} />
                    </span>
                </div>
                <ul className=" flex flex-col items-start text-gray-500 text-sm">
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/"}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/aboutus"}>
                            درباره ما
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">
                        <Link href={"/costumers"}>
                            مشتریان ما
                        </Link>
                    </li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">خدمات ما</li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">سرویس ها</li>
                    <li className=" cursor-pointer w-full py-4 px-2 border-b border-gray-400">مقاله</li>
                </ul>
                <div className=" w-full h-auto flex justify-center">
                    <img className=" w-48" src="../../images/vandad.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default MobileSidebar;