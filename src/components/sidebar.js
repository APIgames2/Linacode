import "../style.scss"

function SideBar() {
    return(
        <div className="">
            <div className="text-white">
                some things
            </div>
            <div className="icons-bar">
                <button className="icon-btn">
                    <img src="../file.svg"/>
                </button>
                <button className="icon-btn">
                    <img src="../search.svg"/>
                </button>
                <button className="icon-btn">
                    <img src="../warning.svg"/>
                </button>
                <button className="icon-btn">
                    <img src="../task.svg"/>
                </button>
            </div>
            <div className="text-white">
                file viewer
            </div>
        </div>
    )
}

export default SideBar;