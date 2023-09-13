
const { useState } = require("react");

const Navbar = ({onChangeFont}:{onChangeFont: (event: React.SyntheticEvent) => void}) =>{
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);
const toggleTheme = () =>{
  setTheme(!theme)
}
    return(
        <nav className="flex justify-between flex-wrap md:p-6 py-6">
        <div className="text-white mr-6 lg:mr-72">
          <img src="images/book-icon.png" className="h-8 mr-3" alt="Flowbite Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div>
          <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>                
                <select onChange={onChangeFont} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={0}>Lora</option>
                  <option value={1}>Inter</option>               
                  <option value={2}>Iconsolata</option>
                </select>
            </li>
            <li>
              <label className="inline-flex relative items-center cursor-pointer">
                  <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={theme}
                      readOnly
                  />
                  <div onClick={toggleTheme} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
                  ></div>
              </label>
            </li>
            <li>
            
            <img src="images\icon-moon.svg" alt="moon pic"/>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;