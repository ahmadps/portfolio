import Head from 'next/head'
import{BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube
  } from "react-icons/ai";
  import Image from "next/image";
  import deved from '../public/dev-ed-wave.png';
  import design from "../public/design.png";
  import code from '../public/code.png';
  import consulting from "../public/consulting.png";
  import web1 from '../public/web1.png';
  import web2 from '../public/web2.png';
  import web3 from '../public/web3.png';
  import web4 from '../public/web4.png';
  import web5 from '../public/web5.png';
  import web6 from '../public/web6.png';
  import {useState} from "react"; 
  import { Typewriter } from 'react-simple-typewriter';
  
  


export default function Home() {
  const [darkMode, setDarkMode]= useState(false);
   
  return (
    <div className={darkMode ? "dark" :""}>
      <Head>
        <title>Ahmad Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md-px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1  className="text-xl font-burtons dark:text-white " >developed-by-ahmad</h1>
            
            <ul className="flex items-center ">
              <li><span className="pr-3 text-sm font-medium dark:text-white">Dark mode</span></li>
              <li>
                <BsFillMoonStarsFill 
                onClick={()=> setDarkMode(!darkMode)} 
                className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer text-2xl dark:text-white"/>
                
              </li>
              <li className=" transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300">
                
                <a 
                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 
                
                " href="https://drive.google.com/file/d/1zugsAerKiG-bS4VS3XcnsUXTzROB8kSk/view?usp=sharing" 
                >Resume Download</a ></li>

            </ul>
          </nav>
          <div className="text-center p-5">
            <h1></h1>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl"> <Typewriter
            words={['Ahmad Lu.']}
            loop={1}
            cursor={false}
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
                              /></h2>
            <h3  className="text-2xl py-2 md:text-3xl dark:text-white">Jr Front-End Develoer and Designer</h3>
            <p className="text-md pt-10  text-red-500 font-bold md:text-xl max-w-lg mx-auto">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Design','Code','Launch', 'Repeat!']}
            loop={0}
            cursor={true}
            cursorStyle='_'
            typeSpeed={70}
            delaySpeed={1000}
              />
        </p>
            
                      </div>
         
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill"  objectFit="cover" />
          </div>
          <div className="text-5xl flex justify-center gap-16 py-5 mt-5  text-gray-600 dark:text-gray-300">
            <a  href="https://www.linkedin.com/in/ahmad-lubbad/" target="_self">
            <AiFillLinkedin  />
            </a>
            </div>
       </section>
       <section>
        <div className=" text-center pt-9">
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
             <span className="text-teal-500  text-2xl"> <Typewriter
            words={['Soon..', '..????????????']}
            loop={0}
            cursor={true}
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
                              /></span>
            </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white ">
            <Image src={design} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core design theory.
            </p>
            
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
            <Image src={code} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2 ">Code your dream project</h3>
            <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
                reality.
            </p>
            
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={consulting} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-3 ">
            Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
            </p>
            
          </div>
        </div>
       </section>
       <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white text-center">Portfolio</h3>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 "><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
          <div className="basis-1/3 flex-1 "><Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
          <div className="basis-1/3 flex-1 "><Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
          <div className="basis-1/3 flex-1 "><Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
          <div className="basis-1/3 flex-1 "><Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
          <div className="basis-1/3 flex-1 "><Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>

        </div>
       </section>
      </main>
    </div>
  );
}
