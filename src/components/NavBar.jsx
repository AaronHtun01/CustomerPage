import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("Myanmar")
    const [darkMode, setDarkMode] = useState(false)
    const [speakerWave, setSpeakerWave] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLanguage = (language) => {
        setSelectedLanguage(language)
        setIsOpen(false)
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const toggleSpeaker = () => {
        setSpeakerWave(!speakerWave)
    }

  return (
    <div className="flex justify-between p-8 items-center relative">
        <div>
            <h1 className="text-xl font-medium cursor-pointer">Customer List</h1>
        </div>

        <div className="flex justify-end gap-8 items-center">
            <div>
                <button onClick={toggleMenu} className="w-32 border-2 border-neutral-300 p-1 text-sm rounded-md cursor-auto hover:bg-slate-200 duration-500">{selectedLanguage}</button>
                
                
                <div className={`absolute flex flex-col border-2 border-neutral-300 rounded my-1 gap-2 bg-light w-32 transition-all duration-200 ease-in-out transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <button onClick={() => handleLanguage("မြန်မာ")} className="p-2 text-sm cursor-auto hover:bg-slate-200 duration-500">မြန်မာ</button>
                    <button onClick={() => handleLanguage("English")} className="p-2 text-sm cursor-auto hover:bg-slate-200 duration-500">English</button>
                    <button onClick={() => handleLanguage("แบบไทย")} className="p-2 text-sm cursor-auto hover:bg-slate-200 duration-500">แบบไทย</button>
                </div>
            </div>

            <h1 className="p-2 rounded-md bg-light hover:text-primary duration-300 cursor-pointer"><FaKeyboard/></h1>

            <h1 onClick={toggleSpeaker} className="p-2 rounded-md bg-light hover:bg-slate-200 duration-500 cursor-pointer">{speakerWave ? <HiMiniSpeakerWave className="text-primary"/> : <HiMiniSpeakerXMark /> }</h1>

            <h1 onClick={toggleDarkMode} className="p-2 rounded-md bg-light hover:bg-slate-200 hover:text-primary duration-500 cursor-pointer">{darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode /> }</h1>
            
            <h1 className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-300 hover:bg-slate-500 duration-500 cursor-pointer">A</h1>
        </div>
    </div>
  )
}

export default Navbar