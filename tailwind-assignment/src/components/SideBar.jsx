export const SideBar = () => {
    return (
        <div className="bg-[#fefefe] border border-[#e4e9ee] border-r-3 absolute inset-y-0 left-0">
            <div className="flex justify-between ">
                <div className="flex justify-between bg-[#002a5a] m-5 rounded-[8px] ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2997/2997592.png"
                        alt="Webinar-icon"
                        className="h-5 w-5 my-2 ml-2 mr-1"
                    />
                    <p className="text-[#afbbca] text-sm font-semibold text-center py-2">
                        Webinar
                    </p>
                    <p className="text-[#30b4b3] text-sm font-semibold text-center mr-2 py-2">
                        .gg
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBwb3RyYWl0fGVufDB8fDB8fHww"
                        className="h-10 w-8 m-5 rounded-[8px]"
                    />
                </div>
            </div>
            <div className="flex justify-between mx-5 bg-[#e4e9ee] rounded-[8px] cursor-pointer">
                <p className="text-[#12315f] font-semibold px-2 py-1">Home</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png"
                    alt="Home-icon"
                    className="size-5 mx-2 mt-1.5"
                />
            </div>
            <div className="flex justify-between mx-5 py-2 cursor-pointer">
                <p className="text-[#12315f] px-2 py-1">Webinars</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/681/681494.png"
                    alt="Webinars-icon"
                    className="size-5 mx-2 mt-1.5"
                />
            </div>
            <div className="flex justify-between mx-5 py-2 cursor-pointer">
                <p className="text-[#12315f] px-2 py-1">Billing</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/1611/1611318.png"
                    alt="Billing-icon"
                    className="size-5 mx-2 mt-1.5"
                />
            </div>
            <div className="flex justify-between mx-5 py-2 cursor-pointer">
                <p className="text-[#12315f] px-2 py-1">User Management</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/3596/3596097.png"
                    alt="User-management-icon"
                    className="size-5 mx-2 mt-1.5"
                />
            </div>
            <div className="flex justify-between mx-5 py-2 cursor-pointer">
                <p className="text-[#12315f] px-2 py-1">Settings</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524761.png"
                    alt="Settings-icon"
                    className="size-5 mx-2 mt-1.5"
                />
            </div>
        </div>
    );
};
