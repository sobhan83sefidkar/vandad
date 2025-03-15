import Link from "next/link";

function BlogItem({ index, item }) {
    return (
        <Link href={item.link}>
            <div key={index} className=" w-full h-auto rounded-lg overflow-hidden">
                <div className=" w-full h-full flex mdmax:flex-col bg-gray-200">
                    <div className=" flex items-center">
                        <img className=" max-w-[150px] mdmax:max-w-full h-full rounded-lg" src={item.img} alt="" />
                    </div>
                    <div className=" p-3">
                        <div className=" flex justify-between py-2">
                            <h2 className=" font-bold">{item.title}</h2>
                            <span>{item.date}</span>
                        </div>
                        <p className=" text-sm">{item.text}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogItem;