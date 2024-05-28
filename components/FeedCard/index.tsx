import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard : React.FC = () => {
    return <div className="border border-l-0 border-r-0 border-b-0 border-gray-700 p-4 hover:bg-gray-900 transition-all cursor-pointer">
       <div className="grid grid-cols-12">
        <div className="col-span-1">
            <Image src='https://avatars.githubusercontent.com/u/147183123?v=4' alt="user-image" height={50} width={50} className="rounded-full"/>
        </div>
        <div className="col-span-11 px-4">
             <h5>Priya Sharma</h5>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae quod consequatur magni accusamus quibusdam sunt, qui repudiandae et.</p>
             <div className="flex justify-evenly mt-5 text-xl text-gray-500 mr-2">
             <div><BiMessageRounded/></div>
             <div><FaRetweet/></div>
             <div><AiOutlineHeart/></div>
             <div><BiUpload/></div>
             </div>
        </div>
       </div>
    </div>
}

export default FeedCard