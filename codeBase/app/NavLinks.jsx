import React, { useState } from "react";
import Link from "next/link";
import { links } from "./MyLinks.js";

const NavLinks = ({ navigate }) => {
    const [heading, setHeading] = useState("");

    const uid = function(){
        const uuid = Date.now().toString(36) + Math.random().toString(36).substr(2);
        console.log(uuid);
        return uuid;
    }
    return (
        <>
            {links.map((link) => (
                <div key={link.id*Math.random()} className="group text-blue">
                    <div className="px-1 text-left md:cursor-pointer group hover:border-b-4 md:hover:border-blue">
                        <h1
                            className="py-3 flex justify-between items-center md:pr-0 pr-5 group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                            }}
                        >
                            {/* {
                                link.submenu ? link.name :
                                    (<span onClick={() => navigate("/"+link.name)}>{link.name}</span>)
                            } */}
                            <span onClick={() => navigate("/"+link.name)}>{link.name}</span>

                            <span className="text-xl md:hidden inline">
                                <ion-icon
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                                        }`}
                                ></ion-icon>
                            </span>
                        </h1>

                        {/********** submenu *****************/}

                        {link.submenu && (
                            <div>
                                <div className="absolute hidden top-16 left-0 group-hover:md:block hover:md:block w-[100%] shadow-lg">
                                    <div className="bg-white shadow grid grid-cols-1 gap-10">
                                        {link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.sublink.id*Math.random()} className="w-[50%] grid grid-cols-2 gap-1 pl-20 py-6">
                                                {mysublinks.sublink.map((slink) => (
                                                    <li key={slink.id*Math.random()} className="text-sm my-1 hover:bg-gray-100 px-2 py-1">
                                                        <span
                                                            onClick={() => navigate(slink.link)}
                                                        >
                                                            {slink.name}
                                                        </span>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                    {/************ Mobile menus ******************/}
                    <div
                        className={`
                            ${heading === link.name ? "md:hidden" : "hidden"}
                        `}
                    >
                        {link.submenu && link.sublinks.map((slinks) => (
                            <div key={slinks.sublink.id*Math.random()}>
                                <div>
                                    <div
                                        className={`${heading === link.name ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.sublink.map((slink) => (
                                            <li key={slink.id*Math.random()} className="py-3 pl-14">
                                                {/* <Link href={slink.link}>{slink.name}</Link> */}
                                                <span onClick={()=>navigate(slink.link)}>{slink.name}</span>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;