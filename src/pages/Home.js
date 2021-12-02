import { Link } from "react-router-dom";
import HomeMiddle from "../Images/home_middle.png";
import homeBottom1 from "./../Images/home-bottom-1.jpeg";
import homeBottom2 from "./../Images/home-bottom-2.jpeg";
import homeBottom3 from "./../Images/home-bottom-3.jpeg";

const Home = () => {
  return (
    <div>
      {/* Menu */}
      <div className="menubar-wrapper">
        <img
          src="https://www.pinclipart.com/picdir/big/63-631058_feet-clipart-blue-foot-logo-blue-animal-footprint.png"
          className="logo-home"
        />
        <div className="links-home">
          <Link to="/signin" className="link-home">
            Sign In
          </Link>
          <Link to="/" className="link-home">
            Events
          </Link>
          <Link to="/" className="link-home">
            Details
          </Link>
        </div>
      </div>
      {/* pic 1 */}

      <div className="home-middle-wrapper">
        <div className="slogans">
          <div className="slogan1-wrapper">
            <div className="slogan1">
              Animal
              <br />
              Shelter
              <br />
              Management
              <br />
              Software
            </div>
          </div>

          <div className="slogan2">
            Rescue Animals <br /> is Our Passion
          </div>
        </div>
        <img src={HomeMiddle} className="home-middle-img" />
      </div>
      {/* 3 pics */}
      <div className="home-bottom-img-wrapper">
        <img src={homeBottom1} className="bottom-img" />
        <img src={homeBottom2} className="bottom-img" />
        <img src={homeBottom3} className="bottom-img" />
      </div>

      {/* locations */}

      <div className="location-wrapper">
        <div className="location">
          Lacation - vadodara
          <br />
          xkadmqdkklw ld
          <br />
          wofjfwdijfmdwkf
          <br />
          wjfoijwlkwkfpwfkwlk
        </div>

        <div className="location">
          Lacation - vadodara
          <br />
          xkadmqdkklw ld
          <br />
          wofjfwdijfmdwkf
          <br />
          wjfoijwlkwkfpwfkwlk
        </div>

        <div className="location">
          Lacation - vadodara
          <br />
          xkadmqdkklw ld
          <br />
          wofjfwdijfmdwkf
          <br />
          wjfoijwlkwkfpwfkwlk
        </div>

        <div className="location">
          Contact : 9876584937
          <br />
          Email : asy67@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Home;
