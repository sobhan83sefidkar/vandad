import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Equipments() {
    const array = [
        {
            img: "../../images/equipments/test.webp",
            title: "فروش تجهیزات کامپیوتری",
            lists: [
                "انواع کیس",
                "مینی کیس",
                "مانیتور",
                "ماوس و کیبورد",
            ]
        },
        {
            img: "../../images/equipments/test.webp",
            title: "تعمیرات تخصصی",
            lists: [
                "تعمیر حرفه ای کیس و مانیتور",
                "تعویض قطعه با قطعات اوجینال",
            ]
        },
        {
            img: "../../images/equipments/test.webp",
            title: "خدمات پرینتر",
            lists: [
                "تعمییر پرینتر در محل",
                "شارژ کاتیج",
                "فروش انواع پرینتر",
                "لوازم جانبی پرینتر",
            ]
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        autoplay: 5000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                },
            },
        ],
    };
    return (
        <div className="equipments w-full h-full flex justify-center my-10 bg-[url(https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/parralax/back-suggestions.webp)]">
            <div className="equipments-container w-full h-full flex flex-col items-center justify-between max-w-[1300px] py-5">
                <div className=" flex justify-center">
                    <h2 data-aos="fade-left" className=" px-3 py-2 border-b max-h-[60px] border-gray-400 font-bold text-2xl">پیشنهاد ها</h2>
                </div>
                <div className=' w-full h-full flex justify-center py-16'>
                    <div className=' max-w-[82%]'>
                        <Slider {...settings}>
                            {
                                array.map((item, i) => {
                                    return (
                                        <div data-aos="fade-up" key={i} className=' w-full h-full'>
                                            <div className=' max-w-[95%] h-[300px] rounded-md flex bg-white relative overflow-hidden'>
                                                <div className=' h-5 w-72 absolute right-[-100px] top-10 rotate-45 bg-yellow-300 text-xs text-center'>
                                                    پیشنهاد ویژه
                                                </div>
                                                <div className=' w-1/2 flex flex-col items-end justify-center'>
                                                    <h2 className=' font-bold mb-5'>{item.title}</h2>
                                                    <ul className=' mb-8'>
                                                        {
                                                            item.lists.map((item, i) => {
                                                                return (
                                                                    <li key={i} className=' flex justify-end gap-1 text-xs text-gray-500'>
                                                                        {item}
                                                                        <img className=' w-4' src="../../images/tick2.webp" alt="" />
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <button className=' py-1 px-3 bg-green-700 text-white rounded-lg text-sm'>بیشتر بخوانید</button>
                                                </div>
                                                <div className=' w-1/2 flex justify-center items-center'>
                                                    <img className=' rounded-2xl' src={item.img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipments;
