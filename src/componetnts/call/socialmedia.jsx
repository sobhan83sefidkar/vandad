function SocialMedia() {
    const arr = [
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-1.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-2.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-3.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-4.webp",
        "https://raw.githubusercontent.com/sobhansefidkar/vandad-images/refs/heads/main/images/call2/Untitled-5.webp",
    ]
    return ( 
        <div className=" w-full h-auto flex justify-center">
            <div className=" w-full h-full flex flex-wrap justify-center gap-5 max-w-[1300px]">
                {
                    arr.map((item , i ) => {
                        return (
                            <img key={i} src={item} alt="" />
                        )
                    })
                }
            </div>
        </div>
     );
}

export default SocialMedia;