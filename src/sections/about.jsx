const About= ()=>{
  return(
    <>
     {/* About Section */}
        <section id="about" className="py-24 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-gray-400">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-2/3 space-y-6 text-gray-700 leading-relaxed dark:text-gray-400">
              <p>
                Hi, I'm Md Danish Alam, a passionate MERN Stack Developer who enjoys building responsive and user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js to create scalable solutions that blend clean design with strong functionality.
              </p>
              <p>
                I love solving DSA problems, exploring new technologies, and crafting impactful digital experiences that make life smarter and easier.
              </p>
              <p>
                When I'm not coding, you'll find me enjoying a good shayari book, traveling, or experimenting with new recipes. Let's connect and build something amazing together!
              </p>
            </div>
          </div>
        </section>
    </>
  );
}
export default About;