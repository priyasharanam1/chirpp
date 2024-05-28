import Image from "next/image";
import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiBookBookmark, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
 
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-[90%] m-auto">
        <div className="col-span-3 pt-8 px-10">
          <div className="text-4xl hover:bg-gray-800 w-fit rounded-full p-2 mx-4 cursor-pointer h-fit transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-xl">
            <ul>
              {sidebarMenuItems.map(item =>( <li className="flex py-2 cursor-pointer w-fit rounded-full transition-all pl-4 pr-6 hover:bg-gray-800 justify-start items-center gap-4 mt-1"
              key={item.title}>
              
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>))}
            </ul>
            <button className="bg-[#1d9bf0] mt-5 px-12 py-2 rounded-full w-fit text-md">Tweet</button>
          </div>
        </div>
        
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-gray-700 h-screen overflow-scroll hide-scrollbar">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
