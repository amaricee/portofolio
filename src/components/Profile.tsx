import profileImg from "../assets/foto1.jpeg";
import goLogo from "../assets/go.svg";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/js.svg";
import laravelLogo from "../assets/laravel.svg";
import mysqlLogo from "../assets/mysql.svg";

function Profile() {
  return (
    <section id="profile" className="profile-wrapper">
      <div className="profile-image-container">
        <div className="diamond-frame">
          <img src={profileImg} alt="Profile" className="diamond-img" />
        </div>
      </div>

      <div className="profile-info">
        <h1 className="name">Muhammad Ramadan</h1>

        <p className="subtitle">Web Developer & Creative Learner</p>

        <div className="tech-stack">
          <img src={goLogo} alt="Go" />
          <img src={reactLogo} alt="React" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={laravelLogo} alt="Laravel" />
          <img src={mysqlLogo} alt="MySQL" />
        </div>
      </div>
    </section>
  );
}

export default Profile;
