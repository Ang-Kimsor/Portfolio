import Img from "./../assets/Kimsor(1).jpg";
const des = [
  "Hi, I'm a third-year Computer Science student with a strong passion for web development and creating interactive, user-friendly websites. I enjoy turning creative ideas into real digital experiences through clean, responsive, and efficient code.",
  "I have hands-on experience with HTML, CSS, JavaScript, TypeScript, ReactJS, Bootstrap, and TailwindCSS for frontend development. On the backend, I’ve worked with PHP and MySQL to build dynamic and data-driven web applications.",
  "I love learning new technologies and improving my skills through practical projects — from building e-commerce sites to experimenting with full-stack features. My goal is to gain real-world experience, collaborate with professional developers, and grow into a skilled Front-End or Full-Stack Developer who creates impactful and reliable web solutions.",
];
const About = () => {
  return (
    <main className="w-full flex flex-col items-center gap-5 h-[calc(100vh - 70px)]">
      <h1 className="text-5xl mt-5 lg:mb-20 text-white font-bold tracking-wider">
        About Me
      </h1>
      <div className="w-[90%] h-fit flex lg:flex-nowrap lg:justify-between justify-center items-center flex-wrap-reverse py-2 gap-10">
        <div className="lg:w-[calc(100vw-500px)] w-full flex flex-col gap-5 justify-center">
          {des.map((item, index) => (
            <p
              key={index}
              className="lg:text-lg text-md lg:text-start text-center text-[#f8f8f8dd] font-semibold"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="w-[380px] h-[380px] flex items-center justify-center">
          <img
            src={Img}
            alt="Profile"
            className="lg:size-full object-cover rounded-full"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
