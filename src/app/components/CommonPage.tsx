const CommonPage = () => {
return   (
<>  
     <form>   
       <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        
          </div>
          <div>
          <input type="search" id="default-search" className="md:h-16 block w-full lg:p-4 md:p-2.5 p-2 pl-10 text-lg text-black border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative" placeholder="Keyboard" required/>
      <div className="absolute inset-y-0 right-5 md:top-5 top-3.5">
        <img src="images\icon-search.svg" className="lg:h-8" alt="search bar" />
      </div>
          </div>
     
        </div>
      </form>
      <div className="flex justify-between justify-items-center justify-center pt-12">
        <div>
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pb-4">Keyboard</h1>
            <span className="text-purple-600 font-medium text-2xl ">/'Ki:b:d/</span>
     </div>
     <div className="">
     <img src="images\icon-play.svg" className="h-16 mr-3" alt="play botton" />
     </div>
 
      </div>

      <div className="flex pt-10 space-x-4">
           <span className=" font-bold text-xl">noun</span>
    <div className="w-full pt-4">
    <hr className="text-gray-500 dark w-full "/>
    </div>

      </div>
  <section className="pt-10">
    <h1>Meaning</h1>
    <div className="pt-4 pl-10">
        <ul className="list-disc marker:text-purple-600 font-medium pt-3 text-gray-700 text-lg">
            <li>
            The (keys )include punctuation, alphanumeric and special keys 
            </li>
            <li className="pt-3">
            A keyboard is a peripheral device that enables a user to input text into a computer or any other electronic machinery.
            </li>
            <li className="pt-3">The horizontal rows of character keys in the typing area have specific names.</li>
        </ul>
    </div>
    <div className="flex pt-10 space-x-4">
           <span className=" text-gray-500 text-xl">Synonyms</span>
   <p className="text-purple-600 font-bold">electronic Keyboard</p>
      </div>
      <div className="flex justify-center items-center pt-10 space-x-4">
           <span className=" font-bold text-xl">Verb</span>
    <hr className="text-gray-500 dark w-full "/>
      </div>
  </section>
<section className="pt-10">
<h1>Meaning</h1>
    <div className="pt-4 pl-10 space-y-4">
        <ul className="list-disc marker:text-purple-600 font-medium pt-3 text-gray-700 text-lg">
            <li>
            To type on a computer leyboard
            </li>
          </ul>
          <p className=" text-gray-500 ">"keyboarding is the part of this job i hate the most"</p>
          <div className="dark mt-4 pb-4 pt-4 text-gray-500 w-full">
<hr/>    
</div>
    </div>
    <div className="flex  underline"> 
      <p>source</p>
      <a href="https://www.dictionary.com/" className="pl-3">
      <p>https://www.dictionary.com/</p>
      </a>
   <img src="images\icon-arrow-down.svg" alt="arrow"></img>
    </div>
</section>

</> 
)
}
export default CommonPage;