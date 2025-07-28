import type { JSX } from "react";
import React from "react";
import Style from "./style.module.css";
import Logo from "../../assets/sso.jpg";

import Fb from "../../assets/fb.png";
import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import Twitter from "../../assets/twitter.png";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";

type SSOOptions = {
  label: string;
  imageUrl: string;
};

const SingleSignOn = (): JSX.Element => {
  const ssoOptions: SSOOptions[] = React.useMemo(() => {
    return [
      { label: "Facebook", imageUrl: Fb },
      { label: "Google", imageUrl: Google },
      { label: "Apple", imageUrl: Apple },
      { label: "Twitter", imageUrl: Twitter },
      { label: "Email", imageUrl: Email },
      { label: "Phone", imageUrl: Phone },
    ];
  }, []);

  return (
    <React.Fragment>
      <div className={Style.root}>
        <div className={Style.container}>
          <div className={Style.leftContainer}>
            <div className={Style.ssoContainer}>
              <div className={Style.logo}></div>
              <div className={Style.loginOrSignUpText}>
                <p>Log in or sign up</p>
              </div>
              <p className={Style.descriptionText}>
                Use your email or other serivce to continue with us
              </p>

              <div className={Style.ssoOptionsContainer}>
                {ssoOptions.map((options) => {
                  return (
                    <div className={Style.ssoOption} key={options.label}>
                      <div>
                        <img src={options.imageUrl} alt={options.label} />
                      </div>
                      <div>
                        <p> Continue with {options.label} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={Style.rightContainer}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleSignOn;
