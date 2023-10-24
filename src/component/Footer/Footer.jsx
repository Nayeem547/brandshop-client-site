import { FaStickyNote,  FaPhone, FaVoicemail, FaClock } from "react-icons/fa";

const Footer = () => {
    return (
        
            <footer className=" mt-24  ">
            <div className=" bg-black flex justify-center flex-col   p-32  ">
        <div className=" mt-[-40px] pb-14 " >
          <h2 className=" text-3xl font-semibold text-white font-mono ">
            AUTO CAR
          </h2>
          <p className=" text-[#b3b5ba]  font-semibold ">
            You Can Buy Here
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white  " >
          <div className=" flex flex-col text-center lg:text-left space-y-3 " >
            <h2 className=" text-2xl " >About Brands</h2>

            <h2>The Cars Specialists!</h2>

            <p>
            A car brands website is a platform or online resource dedicated to showcasing and providing information about various automobile manufacturers and their respective brands. These websites typically serve as a hub for car enthusiasts, buyers, and researchers. Here's a short description:
            </p>
          </div>
 
        <div className=" space-y-4  text-left " >
            <h2 className=" text-xl " >Keep In Touch</h2>
            <p className="flex gap-2" > <FaStickyNote></FaStickyNote> 38-2 Hilton Street, California, USA</p>
            <p className="flex gap-2"> <FaPhone></FaPhone> (+01) 123 456 7890</p>
            <p className="flex gap-2"> <FaVoicemail></FaVoicemail> info@dvents.org</p>
            <p className="flex gap-2 "> <FaClock></FaClock> Mon - Fri 9.00 am - 6.00 pm</p>
        </div>

        <div className=" flex flex-col text-left space-y-3  " >
            <h2 className=" text-xl " >Quick Links</h2>
            <a className="hover:text-yellow-300" href="#">Our Services</a>
            <a className="hover:text-yellow-300"  href="#">About Brands</a>
            <a className="hover:text-yellow-300"  href="#">Get In Touch</a>
            <a className="hover:text-yellow-300"  href="#">Our Team</a>
            </div>

        </div>
      </div>
            </footer>
        
    );
};

export default Footer;