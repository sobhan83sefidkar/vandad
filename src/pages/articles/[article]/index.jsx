import Articles from "@/componetnts/index/articles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import arr from "@/article";
import { useRouter } from "next/router";
import Comments from "@/componetnts/article/comments";
import { CiCalendarDate } from "react-icons/ci";

function ArticleItem() {
    const router = useRouter()
    const { article } = router.query
    const [articleItem, setArticleItem] = useState({})

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    useEffect(() => {
        const find = arr.find((item) => item.link.split('/')[2] === article)
        console.log(find)
        setArticleItem(find)
    }, [router])

    if (!articleItem) {
        return
    }

    return (
        <div className=" w-full h-auto flex justify-center mt-36 mdmax:mt-24  scroll-smooth">
            <div className=" w-full h-full max-w-[1300px]">
                <div className=" my-4 flex mdmax:flex-col justify-between">
                    <h2 className=" text-4xl font-bold border-r-4 border-red-500 px-2 ">{articleItem.title && articleItem.title}</h2>
                    <span className=" flex items-center mdmax:mt-5 gap-1"><CiCalendarDate size={25}/>{articleItem.date}</span>
                </div>
                <img data-aos="fade" className=" w-full h-auto max-h-[500px] object-cover  rounded-xl" src={articleItem.img && articleItem.img} alt="" />
                <div className=" p-5" data-aos="fade-up">
                    <p className=" py-4 text-sm">{articleItem.text && articleItem.text}</p>
                </div>
                <Comments />
                <Articles />
            </div>
        </div>
    );
}

export default ArticleItem;