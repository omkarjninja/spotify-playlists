import Hope from "./hope"
import { useState } from "react"
import "./bg.css"
function Playlists(){
  const [pageNum,setpageNum]=useState('1')
  const [pagevalue,setpageVal]=useState('1')
  const NextPage=(event)=>{
    setpageNum('2')
  }
  const valueChange=()=>{
    setpageNum("2")
  }
    const data=[{
        id:1,name:"Gloomy Days",genre:"lo-fi calm",link:"https://open.spotify.com/playlist/7BWuZ74WtcVOHFsXiHB6KN?si=fd4bb695fbf945c4",
        embed:"https://open.spotify.com/embed/playlist/7BWuZ74WtcVOHFsXiHB6KN?utm_source=generator",ima:"glo"
      },
    {
      id:2,name:"Floating",genre:"chill pop",link:"https://open.spotify.com/playlist/0CQS6aGOczVRnl231m8FOu?si=fe3419f8f1854a11",
      embed:"https://open.spotify.com/embed/playlist/0CQS6aGOczVRnl231m8FOu?utm_source=generator",ima:"spa"
  },{
    id:3,name:"SleepWalk",genre:"lo-fi Sleepy",link:"https://open.spotify.com/playlist/7BIu7BP07DDsrN3DioqwQn?si=af9e7217a6454475",
    embed:"https://open.spotify.com/embed/playlist/7BIu7BP07DDsrN3DioqwQn?utm_source=generator",ima:"sw"
},{
  id:4,name:"Staring at the ceiling at 3 am",genre:"lo-fi relaxing sad",link:"https://open.spotify.com/playlist/6u2kDcD8S7EmEZtOUsoUco?si=e39cbdc0a9294220",
  embed:"https://open.spotify.com/embed/playlist/6u2kDcD8S7EmEZtOUsoUco?utm_source=generator",ima:"ceil"
},{
  id:5,name:"Sad Piano Music",genre:"Sad Piano",link:"https://open.spotify.com/playlist/4lAmlZTxQ93NI8TzvDhcSe?si=02caf6acd422425d",
  embed:"https://open.spotify.com/embed/playlist/4lAmlZTxQ93NI8TzvDhcSe?utm_source=generator",ima:"piano"
},{
  id:6,name:"LooksMaxxing",genre:"Modern Aderneline",link:"https://open.spotify.com/playlist/3bD71u4Wr1cCcp1zuLTqZw?si=0c1015b196e34067",
  embed:"https://open.spotify.com/embed/playlist/3bD71u4Wr1cCcp1zuLTqZw?utm_source=generator",ima:"looks"
},{
  id:7,name:"End of a Movie",genre:"lo-fi calm",link:"https://open.spotify.com/playlist/13xi6WEIDT9OKEcU2PYcP4?si=df397800796e4611",
  embed:"https://open.spotify.com/embed/playlist/13xi6WEIDT9OKEcU2PYcP4?utm_source=generator",ima:"end"
},{
  id:8,name:"Cool fall nights",genre:"chill modern",link:"https://open.spotify.com/playlist/0r4k7wVyTldjdxeqHbLUNQ?si=c2886377547e4a6d",
  embed:"https://open.spotify.com/embed/playlist/0r4k7wVyTldjdxeqHbLUNQ?utm_source=generator",ima:"cool"
},{
  id:9,name:"Life and Love",genre:"lo-fi chill calm",link:"https://open.spotify.com/playlist/429Ro3hRrGA1xLtpFn1ZFd?si=2d47d24ed02d411a",
  embed:"https://open.spotify.com/embed/playlist/429Ro3hRrGA1xLtpFn1ZFd?utm_source=generator",ima:"love"
}]
        
    return(
        <>
        {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"> */}
 <div id="music">
  {data.map((user) => (
     <div className="max-h-screen rounded-lg bg-gray-200 ml-2 mr-2 mb-2 mt-1" 
     >
        <a href={`${user.link}`} target="_blank" className="group relative block h-64 sm:h-80 lg:h-96 bg">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
      
        <div
          className={` ${user.ima} relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 relative bg-cover bg-center bg-no-repeat`}
        
        >
          <div
            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-12 sm:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
      
            <h2 className="mt-4 text-xl font-medium sm:text-2xl text-white">{user.name}</h2>
          </div>
      
          <div
            className="absolute w-full p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
          >
            {/* <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">Go around the world</h3> */}
      
      
            <p className="mt-8 font-bold text-white">{user.name}</p>
            <iframe src={`${user.embed}`} width="100%" height="202" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          </div>
          
        </div>
        
      </a>
      </div>
      ))}
  </div>
  {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}
<center>
<div className="inline-flex justify-center gap-1 mb-2">
  <a 
    href="/"
    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span className="sr-only">Prev Page</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      viewBox="0 0 20 20"
      fill={pageNum===1?"white":"currentColor"}
    >
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </a>



  <a
    href={`/2 `}
    onClick={NextPage}
    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span className="sr-only">Next Page</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</div>
</center>
  {/* </div> */}

        </>
    )
}
export default Playlists