import "../../style.scss";
import SideBar from "../../components/sidebar";
import Demi_bar_top from "../../components/demi-bar";
import VSEditor from "../../components/editor";

function Home() {
  return (
    <body>
        <div className="box">
            <div className="flex flex-col z-10">
                <div className="content w-screen flex flex-row">
                    <div className="w-52 sidebar-color">
                        <SideBar />
                    </div>
                    <div className="w-full bg-gray-800 h-[3.30rem] text-white">
                        <div className="w-full h-[1.65rem] text-white">
                            <Demi_bar_top/>
                        </div>
                        <div className="w-full h-[1.65rem] text-white">
                            demi-bar
                        </div>
                        <div className="h-content bg-black">
                            <VSEditor/>
                        </div>
                        <div className="bg-black h-6 text-white">
                            bottom-bar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  );
}

export default Home;
