import React from "react";
import { Github, Youtube, Twitter, Linkedin, FolderSync } from "lucide-react";
import logo_2 from "../assets/logo-2.png";

const Footer = () => {
  const [openWhyNetlify, setOpenWhyNetlify] = React.useState(false);
  const [openProducts, setOpenProducts] = React.useState(false);
  const [openExplore, setOpenExplore] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openContactUs, setOpenContactUs] = React.useState(false);

  const handleToggle = (section) => {
    switch (section) {
      case "Why Netlify":
        setOpenWhyNetlify(!openWhyNetlify);
        break;
      case "Products":
        setOpenProducts(!openProducts);
        break;
      case "Explore":
        setOpenExplore(!openExplore);
        break;
      case "Company":
        setOpenCompany(!openCompany);
        break;
      case "Contact Us":
        setOpenContactUs(!openContactUs);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mx-5 sm:mx-10 md:mx-20 mt-24 mb-10 flex flex-col items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <span>
          <img src={logo_2} alt="" />
        </span>
        <span className="flex gap-6 items-center justify-center">
          <Github color="#a89393" strokeWidth={2} />
          <Youtube color="#a89393" strokeWidth={2} />
          <Twitter color="#a89393" strokeWidth={2} />
          <Linkedin color="#a89393" strokeWidth={2} />
          <FolderSync color="#a89393" strokeWidth={2} />
        </span>
      </div>

      <div className="grid grid-cols-1 w-full md:grid-cols-5 pt-10 mx-auto sm:px-10 md:px-20 gap-10  justify-center">
        <div className="border-b md:border-b-0 w-full">
          <h1 className="font-bold mb-5 ">
            <span
              onClick={() => handleToggle("Why Netlify")}
              className="cursor-pointer"
            >
              Why Netlify
            </span>
          </h1>

          <ul
            className={`md:flex flex-col gap-4 font-light text-sm ${
              openWhyNetlify ? " flex" : "hidden"
            }`}
          >
            <li>Customers</li>
            <li>Composable Web Platform</li>
            <li>Security</li>
            <li>Agency Partner Program</li>
            <li>Technology Partner Program</li>
          </ul>
        </div>

        <div className="border-b md:border-b-0 w-full">
          <h1 className="font-bold mb-5">
            <span
              onClick={() => handleToggle("Products")}
              className="cursor-pointer"
            >
              Products
            </span>
          </h1>

          <ul
            className={`md:flex flex-col gap-4 font-light text-sm ${
              openProducts ? " flex" : "hidden"
            }`}
          >
            <li>Composable Web Platform</li>
            <li>Netlify Connect</li>
            <li>Netlify Core</li>
            <li>Netlify Create</li>
            <li>Netlify SDK</li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Adds-ons +</li>
          </ul>
        </div>

        <div className="border-b md:border-b-0 w-full">
          <h1 className="font-bold mb-5">
            <span
              onClick={() => handleToggle("Explore")}
              className="cursor-pointer"
            >
              Explore
            </span>
          </h1>

          <ul
            className={`md:flex flex-col gap-4 font-light text-sm ${
              openExplore ? " flex" : "hidden"
            }`}
          >
            <li>Docs</li>
            <li>Integrations</li>
            <li>Jamstack Book</li>
            <li>Community</li>
            <li>Resources & Guides</li>
            <li>Remotely Interesting</li>
            <li>Technologies +</li>
          </ul>
        </div>

        <div className="border-b md:border-b-0 w-full">
          <h1 className="font-bold mb-5">
            <span
              onClick={() => handleToggle("Company")}
              className="cursor-pointer"
            >
              Company
            </span>
          </h1>

          <ul
            className={`md:flex flex-col gap-4 font-light text-sm ${
              openCompany ? " flex" : "hidden"
            }`}
          >
            <li>Blog</li>
            <li>About</li>
            <li>Careers</li>
            <li>Compose Conference</li>
            <li>Press</li>
            <li>Jamstack Fund</li>
            <li>Netlify Store</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="border-b md:border-b-0 w-full">
          <h1 className="font-bold mb-5">
            <span
              onClick={() => handleToggle("Contact Us")}
              className="cursor-pointer"
            >
              Contact Us
            </span>
          </h1>

          <ul
            className={`md:flex flex-col gap-4 font-light text-sm ${
              openContactUs ? " flex" : "hidden"
            }`}
          >
            <li>Sales</li>
            <li>Support</li>
            <li>Status</li>
            <li>Forums</li>
            <li>Hire an Agency</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-start gap-5 mt-20 flex-col mx-auto">
        <p>Stay up to date with Netlify news</p>
        <span className="flex gap-5 flex-wrap">
          <input
            className="text-lg px-5 py-2 rounded-md border border-[#466967] "
            type="text"
            placeholder="Email address"
          />

          <button className="bg-[#8EFBF7] text-[#3c3c3c] font-bold text-lg px-5 py-2 rounded-md">
            Subscribe
          </button>
        </span>
      </div>
      <div className="w-full mt-20">
        <hr />
        <div className="flex flex-col gap-5 md:flex-row justify-between mt-2 items-center">
          <ul className="flex gap-6 flex-wrap">
            <li>Trust Center</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>GDPR/CCPA</li>
            <li>Abuse</li>
            <li>Cookie Settings</li>
          </ul>
          <span className="flex-shrink-0">&copy; 2023 Netlify</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
