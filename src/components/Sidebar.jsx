import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const profiles = {
    image: "https://avatars.githubusercontent.com/u/66572675?v=4",
    name: "Wahyudi Firmansyah",
    bio: "Hello everyone! This is my Academic page.",
  };

  const socials = [
    {
      name: "Instagram",
      icon: "https://skillicons.dev/icons?i=instagram",
      link: "https://instagram.com/firmansyah_ken",
    },
    {
      name: "Github",
      icon: "https://skillicons.dev/icons?i=github",
      link: "https://github.com/firmansyahken",
    },
    {
      name: "Linkedin",
      icon: "https://skillicons.dev/icons?i=linkedin",
      link: "https://www.linkedin.com/in/wahyudi-firmansyah-22a1b028a",
    },
    {
      name: "Dribbble",
      icon: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/dribbble/default.svg",
      link: "https://dribbble.com/firmansyahken",
    },
  ];
  return (
    <div className="sticky top-[10%] px-4">
      <div className="relative py-8 flex sm:block items-center gap-x-4">
        <img
          className="block mx-0 sm:mx-auto border border-2 aspect-square w-[70px] sm:w-[150px] rounded-full object-cover"
          src={profiles.image}
          alt="profile"
        />
        <div>
          <h1 className="text-sm sm:text-lg mt-0 sm:mt-4 font-semibold">
            {profiles.name}
          </h1>
          <p className="w-[80%] text-xs sm:text-sm mt-1 sm:mt-2">
            {profiles.bio}
          </p>
        </div>

        <button
          onClick={() => setActive(!active)}
          className={`block sm:hidden mt-2 text-sm px-4 py-2 ${
            active
              ? "bg-white text-black border border-1"
              : "bg-black text-white"
          }`}
        >
          Follow
        </button>

        <div
          className={`${
            active ? "scale-1" : "scale-0"
          } transition-all absolute block sm:hidden space-y-4 py-4 px-6 right-0 z-2 bottom-[-100%] origin-top-right bg-white border boder-1 focus:outline-none`}
        >
          {socials.map((social, index) => (
            <li key={index} className="text-sm list-none">
              {social.name}
            </li>
          ))}
        </div>
      </div>

      <ul className="hidden sm:block space-y-4">
        {socials.map((social, index) => (
          <li key={index} className="flex items-center gap-x-2 text-sm">
            <img className="w-[24px] h-[24px]" src={social.icon} alt="icon" />
            <a href={social.link} target="_blank">{social.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;