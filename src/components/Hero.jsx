import profileImage from '../assets/photo.jpg';
function Hero() {
  return (
    <section id="home" className="section hero">
        <div className="hero-content">
            <div className="hero-text-box">
            <p className="intro">Hello, I'm</p>

            <h1>Milan Harsha</h1>

            <h3>Networking Enthusiast | Cloud Explorer | Security Learner | DevOps Learner</h3>

            <p className="hero-text">
                Passionate about Network Engineering, Cyber Security, Cloud Computing, and DevOps Engineering, with a focus on building secure, reliable, and scalable digital solutions.
                I enjoy working with modern infrastructure, automation, and cloud-based technologies to improve system performance and efficiency. 
                Always eager to learn, solve real-world problems, and contribute to teams that value innovation, security, and continuous improvement.
            </p>

            <div className="hero-buttons">
                <a href="#projects" className="btn primary">View Projects</a>
                <a href="#pipeline" className="btn secondary">Download CV</a>
            </div>
        </div>

        <div className="hero-image-box">
          <img src={profileImage} alt="Milan Harsha" className="profile-img" />
        </div>
        </div>


    </section>
  );
}

export default Hero;