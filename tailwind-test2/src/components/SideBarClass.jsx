

export const SideBarClass = () => {
    return (
        <div className="flex">
            <div className="bg-blue-600 h-screen sm:w-2xs w-8 transition-all duration-1000">
                SideBar
            </div>
            <div className="bg-green-800 w-screen h-screen">Content</div>
        </div>
    );
};
