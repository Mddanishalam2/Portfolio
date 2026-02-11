const Home =()=>{
  return(
    <>
            {/* Home Section */}
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen py-16 md:py-24">
          <div className="w-full md:w-1/2 text-center md:text-left animate-fly-in-left">
            <p className="text-blue-600 text-lg md:text-xl font-medium mb-2">Hello, My name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 dark:text-gray-400">Md Danish Alam</h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-700 mb-6">I build things for the web.</h2>
            <p className="max-w-xl text-md md:text-lg text-gray-600 mb-8 leading-relaxed mx-auto md:mx-0 dark:text-gray-400">
              I'm a MERN Stack developer specializing in building exceptional digital experiences. I am passionate about creating clean, elegant, and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#projects" className="bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 text-sm rounded-lg sm:py-3 sm:px-6 sm:text-base sm:rounded-full transition-transform transform hover:scale-105 duration-300">
                View My Work
              </a>
              <a href="#contact" className="bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 text-sm rounded-lg sm:py-3 sm:px-6 sm:text-base sm:rounded-full transition-transform transform hover:scale-105 duration-300">
                Get In Touch
              </a>
              <a
                href="/Md_Danish_Alam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl py-2 px-4 text-sm rounded-lg sm:py-3 sm:px-6 sm:text-base sm:rounded-full">
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:-ml-12 mb-12 md:mb-0 animate-fly-in-right">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl flex-shrink-0 animate-pulse-slow">
              {/* My Image */}
              <img
                src="/userpic2.png"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </section>

    </>
  );
}
export default Home;