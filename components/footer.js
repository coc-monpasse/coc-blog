import React from "react";
import Image from "next/image";
import Link from "next/link";

function footer() {
  return (
    <div className=" w-full mx-auto px-4  font-sans flex flex-col lg:flex-row text-center shadow bg-black text-white">
      <div
        className="flex flex-col lg:flex-row justify-between lg:w-1/2"
        id="links-icons"
      >
        <div className="flex flex-col lg:w-1/2">
          <Link href="/">
            <p className="font-bold text-lg cursor-pointer">Inicio</p>
          </Link>
          <Link href="/about">
            <p className="font-bold text-lg cursor-pointer">sobre mi</p>
          </Link>
          <Link href="/projects">
            <p className="font-bold text-lg cursor-pointer">projects</p>
          </Link>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <Link href="/blog">
            <p className="font-bold text-lg cursor-pointer">blog</p>
          </Link>
          <Link href="/citas">
            <p className="font-bold text-lg cursor-pointer">citas</p>
          </Link>
          <Link href="/sponsors">
            <p className="font-bold text-lg cursor-pointer">sponsors</p>
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-evenly mx-auto lg:w-1/2"
        id="links-icons"
      >
        <a href="#">
          <Image src="/githu.png" width={50} height={50} layout="intrinsic" alt="paso"/>
        </a>
        <a href="#">
          <Image src="/inst.png" width={65} height={50} layout="intrinsic" alt="paso"/>
        </a>
        <a href="https://coctsx.hashnode.dev/">
          <Image src="/hash.png" width={50} height={50} layout="intrinsic" alt="paso"/>
        </a>
        <a href="#">
          <Image src="/linke.png" width={50} height={50} layout="intrinsic" alt="paso"/>
        </a>
        <a href="https://www.digitalocean.com/?refcode=81af27fc86ed&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
          <img
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
            alt="DigitalOcean Referral Badge"
          />
        </a>
      </div>
    </div>
  );
}

export default footer;
