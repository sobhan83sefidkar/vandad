import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

function Navbar({ setOpenMenu }) {
    const [fixedNavbar, setFixedNavbar] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 1) {
                setFixedNavbar(true)
            } else {
                setFixedNavbar(false)
            }
        })
    }, [])
    return (
        <div className={`navbar ${fixedNavbar ? "fixed top-0" : "absolute top-0"} left-0 w-full h-[75px] z-[100] p-2 flex justify-center`}>
            <div className="navbar-container relative w-full xlmax:w-[90%] lgmax:w-[95%] h-full flex justify-between px-10 xlmax:px-2 bg-white">
                <div className=" h-full flex items-center overflow-hidden">
                    <span className=" mdmax:block hidden cursor-pointer" onClick={() => setOpenMenu(true)}>
                        <FiMenu size={30} />
                    </span>
                    <ul className=" flex items-center gap-5 mdmax:hidden text-gray-500 text-sm">
                        <li className=" cursor-pointer">
                            <Link href={`/`}>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className=" cursor-pointer">
                            <Link href={"/services"}>
                                خدمات ما
                            </Link>
                        </li>
                        <li className=" cursor-pointer">
                            <Link href={"/projects/project1"}>
                                پروژه ها
                            </Link>
                        </li>
                        <li className=" cursor-pointer">
                            <Link href={"/articles"}>
                                مقاله
                            </Link>
                        </li>
                        <li className=" cursor-pointer">
                        <a href="https://s6.uupload.ir/filelink/iCJ5o0DjNwqU_840b8f4d18/رزومه_فناوری_اطلاعات_ونداد_نوین_f9eo.pdf" target="_blank">دانلودرزومه</a>
                        </li>
                        <li className=" cursor-pointer">
                            <Link href={`/aboutus`}>
                                درباره ما
                            </Link>
                        </li>
                        <li className=" cursor-pointer">
                            <Link href={"/callus"}>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className=" mdmax:hidden absolute w-24 z-10 top-[40%] left-[50%] translate-x-[-50%]">
                    <img src="../../images/vandad.webp" alt="" />
                </div>
                <div className=" mdmax:hidden absolute left-[50%] translate-x-[-50%] top-[99%] w-40">
                    <img src="../../images/half-circle.webp" alt="" />
                </div>
                <div className=" text-red-500 font-bold text-2xl h-full flex items-center italic overflow-hidden">
                    <button className=" counseling">
                        ثبت نام
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;