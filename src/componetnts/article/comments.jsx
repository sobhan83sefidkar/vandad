function Comments() {
    return (
        <div className=" w-full h-auto">
            <div className=" w-full h-full">
                <div className=" flex justify-center">
                    <h2 className=" text-2xl font-bold border-b border-gray-400">دیدگاه ها</h2>
                </div>
                <div className=" flex lgmax:flex-col my-5">
                    <div className=" w-[30%] lgmax:w-full">
                        <form class="bg-white w-full h-max p-6 rounded-lg shadow-md">
                            <div class="mb-4">
                                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
                                    نام
                                </label>
                                <input
                                    placeholder="نام شما"
                                    type="text"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div class="mb-4">
                                <label for="content" class="block text-gray-700 text-sm font-bold mb-2">
                                    دیدگاه
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="دیدگاه شما"
                                    id="content"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div class="flex items-center justify-between">
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    type="submit"
                                    class="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" w-[70%] lgmax:w-full lgmax:my-5 h-auto">
                        <div className=" w-full h-full px-2 flex flex-col gap-2">
                            <div className=" flex flex-col gap-3 border-r border-red-500 p-3">
                                <h2 className=" text-sm">سبحان سفیدکار</h2>
                                <p className=" text-xs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                            <div className=" flex flex-col gap-3 border-r border-red-500 p-3">
                                <h2 className=" text-sm">سبحان سفیدکار</h2>
                                <p className=" text-xs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;