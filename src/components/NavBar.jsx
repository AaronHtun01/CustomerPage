import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";


const Navbar = () => {

  return (
    <div className="flex justify-between p-8">
        <div>
            <h1 className="text-2xl font-semibold">Customer List</h1>
        </div>

        <div className="flex gap-8 items-center">
            <h1 className="w-28 p-2 border-2 text-center border-slate-200 rounded-md text-xs hover:bg-slate-200 cursor-pointer">မြန်မာ</h1>
            <h1 className="p-2 rounded-md border-2 hover:text-primary duration-300 cursor-pointer"><FaKeyboard/></h1>
            <h1 className="p-2 rounded-md border-2 hover:bg-slate-200 cursor-pointer"><HiMiniSpeakerWave/></h1>
            <h1 className="p-2 rounded-md border-2 hover:bg-slate-200 cursor-pointer"><MdOutlineDarkMode/></h1>
            <h1 className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-500 cursor-pointer">A</h1>
        </div>
    </div>
  )
}

export default Navbar