import "./App.css";
import { SideBar } from "./components/SideBar";

const currDate = () => {
    const customDateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const now = new Date();
    const formattedDate = customDateFormatter.format(now);

    return formattedDate;
};

const App = () => {
    return (
        <div>
            <SideBar />
            <div className="bg-[#002a5a] h-30">header</div>
            <div className="flex">
                <div className="shadow border-[#e4e9ee] border-1 ml-65 px-10 pt-10 pb-5 h-65 w-45 rounded-xl relative top-[-30px] bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBwb3RyYWl0fGVufDB8fDB8fHww"
                        className="rounded-xl h-20 w-18 ml-3"
                    />
                    <p className="text-xs pt-5 font-bold mb-2 ml-2">
                        Prabhleen Kaur
                    </p>
                    <p className="text-xs text-[#89888a] relative left-[-5px]">
                        prabhleen@gmail.com
                    </p>
                    <p className="text-xs text-[#89888a] text-center pt-1">
                        9899999882
                    </p>
                    <p className="text-xs text-[#89888a] text-center m-3">
                        Delhi, India
                    </p>
                </div>
                <div className="m-10">
                    <p className="text-xs pb-2 ">{currDate()}</p>
                    <p className="font-bold text-[#264871]">
                        Good Morning, Prabhleen! 👋
                    </p>
                    <div className="shadow border border-[#e4e9ee] my-4 w-100 h-73 rounded-xl">
                        <div className="flex bg-[#dfe0e1] mx-4 mt-4 h-8 rounded-[4px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/2886/2886665.png"
                                alt="Calender-icon"
                                className="h-6 mx-2 pt-2"
                            />
                            <div className="text-xs ml-1 my-2 h-8">
                                {currDate()}
                            </div>
                            <div className="flex justify-between">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png"
                                    alt="Arrow-left"
                                    className="pl-28 h-4 mt-2"
                                />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3114/3114931.png"
                                    alt="Arrow-right"
                                    className="h-4 pl-2 mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify">
                                <div className="my-2 ml-4 pr-1 border-r-1 border-[#3fdfcf]">
                                    11:30 AM
                                    <p className="text-xs text-[#89888a]">
                                        11:30 AM
                                    </p>
                                </div>
                                <div className="flex my-2 mx-1 text-xs">
                                    <div className="text-[#89888a]">Live</div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/9459/9459124.png"
                                        alt="Video-recording-cam-live"
                                        className="h-3 w-3 ml-2 my-1"
                                    />
                                </div>
                                <div className="mt-6 relative left-[-45px]">
                                    UX Webinar
                                </div>
                            </div>
                            <hr class="mx-4 my-0.5 border-r-1 border-[#89888a]"></hr>
                        </div>
                        <div>
                            <div className="flex justify">
                                <div className="my-2 ml-4 pr-1 border-r-1 border-[#3fdfcf]">
                                    11:30 AM
                                    <p className="text-xs text-[#89888a]">
                                        11:30 AM
                                    </p>
                                </div>
                                <div className="flex my-2 mx-1 text-xs">
                                    <div className="text-[#89888a]">
                                        Upcoming
                                    </div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/9187/9187613.png"
                                        alt="Video-recording-cam-blue-upcoming"
                                        className="h-3 w-3 ml-2 my-1"
                                    />
                                </div>
                                <div className="mt-6 relative left-[-78px]">
                                    My First Webinar
                                </div>
                            </div>
                            <hr class="mx-4 my-0.5 border-r-1 border-[#89888a]"></hr>
                        </div>
                        <div>
                            <div className="flex justify">
                                <div className="my-2 ml-4 pr-1 border-r-1 border-[#3fdfcf]">
                                    11:30 AM
                                    <p className="text-xs text-[#89888a]">
                                        11:30 AM
                                    </p>
                                </div>
                                <div className="flex my-2 mx-1 text-xs">
                                    <div className="text-[#89888a]">
                                        Upcoming
                                    </div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/9187/9187613.png"
                                        alt="Video-recording-cam-blue-upcoming"
                                        className="h-3 w-3 ml-2 my-1"
                                    />
                                </div>
                                <div className="mt-6 relative left-[-78px]">
                                    Important Webinar
                                </div>
                            </div>
                            <hr class="mx-4 my-0.5 border-r-1 border-[#89888a]"></hr>
                        </div>
                        <div>
                            <div className="flex justify">
                                <div className="my-2 ml-4 pr-1 border-r-1 border-[#3fdfcf]">
                                    11:30 AM
                                    <p className="text-xs text-[#89888a]">
                                        11:30 AM
                                    </p>
                                </div>
                                <div className="flex my-2 mx-1 text-xs">
                                    <div className="text-[#89888a]">
                                        Upcoming
                                    </div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/9187/9187613.png"
                                        alt="Video-recording-cam-blue-upcoming"
                                        className="h-3 w-3 ml-2 my-1"
                                    />
                                </div>
                                <div className="mt-6 relative left-[-78px]">
                                    Webinar 1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow border border-[#e4e9ee] h-40 w-55 mt-26 rounded-xl relative left-[-10px]">
                    <div className="grid grid-cols-2">
                        {/* Schedule a Webinar */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#24d6d9] mt-3 rounded-[4px]">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/8727/8727717.png"
                                    alt="Schedule-meeting"
                                    className="size-6 m-2 relative right-[-2px]"
                                />
                            </div>
                            <p className="text-[10px] font-semibold mt-2">
                                Schedule a Webinar
                            </p>
                        </div>

                        {/* Join a Webinar */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#24d6d9] mt-3 p-3 rounded-[4px]">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                                    alt="Join-meeting"
                                    className="size-4"
                                />
                            </div>
                            <p className="text-[10px] font-semibold mt-2">
                                Join a Webinar
                            </p>
                        </div>

                        {/* Open Recordings */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#24d6d9] p-2 m-2 rounded-[4px]">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/10476/10476058.png"
                                    alt="Join-meeting"
                                    className="size-6"
                                />
                            </div>
                            <p className="text-[10px] font-semibold ">
                                Open Recordings
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
