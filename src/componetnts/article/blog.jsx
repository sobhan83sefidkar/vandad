import { useEffect, useState } from "react";
import BlogItem from "./blogItem";
import arr from "@/article";
import Link from "next/link";

function Blog() {
    const [sortArr, setSortArr] = useState([])
    useEffect(() => {
        const sortedArr = arr.sort((a, b) => b.view - a.view);
        setSortArr(sortedArr)
    }, [arr])
    return (
        <div className=" w-full h-auto flex justify-center ">
            <div className=" w-full h-full max-w-[1300px]">
                <div className=" w-full h-full flex lgmax:flex-col-reverse">
                    <div className=" w-[70%] lgmax:w-full p-3 flex flex-col gap-5">
                        {
                            arr.map((item, i) => {
                                return (
                                    <BlogItem index={i} item={item} />
                                )
                            })
                        }
                    </div>
                    <div className=" w-[30%] lgmax:w-full p-3 sticky top-0">
                        <div className=" w-full h-auto flex flex-col gap-3 rounded-lg border border-gray-300 py-3">
                            <div className=" flex justify-center">
                                <h2 className=" text-center max-w-max py-1 border-r-4 border-red-500 px-2">پربازدید ترین مقالات</h2>
                            </div>
                            <ul className=" text-sm px-5 flex flex-col gap-2">
                                {
                                    sortArr.slice(0 , 2).map((item, i) => {
                                        return (
                                            <Link key={i} href={item.link}>
                                                <li className=" text-center flex gap-2 border border-gray-300 rounded-lg overflow-hidden items-center">
                                                    <img className=" w-24 object-cover" src={item.img} alt="" />
                                                    <span className=" font-bold">{item.title}</span>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;