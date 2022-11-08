import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>© 2022 — Prito Reza | All rights reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
        <Link>
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
