import "../styles/aboutStyle.css";

const About = () => {
  return (
    <div className="bg">
      <h1 className="title">About</h1>
      <div className="align">
        <div className="about ">
          <div className="about-me">
            <p>
              Hello! I'm <strong>Omprakash</strong>, a passionate developer with
              a knack for creating engaging and efficient solutions. With a
              strong foundation in web development, I enjoy transforming ideas
              into digital reality.
            </p>
          </div>
          <div className="about-img">
            <img
              src="https://i.ibb.co/ygmmD4m/1000021553-removebg-preview.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
