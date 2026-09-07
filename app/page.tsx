import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="page">
      <header className="header-container">
        <div className="header">
          <div className="logo-container">
            <Image
              width={20}
              height={20}
              className="logo-img"
              src="/insight_3.webp"
              alt="logo"
            />
            <p className="logo-name">PANZERFAUST</p>
          </div>

          <a className="collab-butt">Work with Me!</a>
        </div>
      </header>
      <main className="main-content">
        <div className="content-container">
          <div className="my-profile">
            <p className="intro max-w-xl">Hi, I&apos;m Harvey Tyson Ablen!</p>
            <p className="desc max-w-svh">
              I am an aspiring 3rd year software engineering student who wants
              to learn more about coding and stuff.
            </p>
            <a className="contact">Contact Me!</a>
          </div>
          <div className="publicity">
            <div className="top">
              <Image
                width={350}
                height={200}
                className="profile-img"
                src="/me.jpg"
                alt="this is me"
              />
            </div>
            <div className="bottom">
              <Image
                width={160}
                height={150}
                className="github-profile"
                src="/github-profile.png"
                alt="this is me"
              />
              <div className="socials-container">
                <div className="socials">
                  <a
                    className="socials-butt facebook"
                    href="https://www.facebook.com/harveytyson.ablen.12"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    className="socials-butt github"
                    href="https://github.com/VIVII-viix"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
                <div className="call-action">
                  <p>Follow me here!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
