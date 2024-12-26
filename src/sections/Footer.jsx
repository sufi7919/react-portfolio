import { useState } from "react";
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <footer className="c-space pt-3 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Thin Thank You Text */}
      <div className="text-white font-light text-xs sm:text-sm mb-2">
        🎉 Thank you for reaching out! Feel free to contact me anytime via:
      </div>

      {/* Contact Information */}
      <div className="mt-2">
        <p className="text-white text-xs sm:text-sm">
          <a
            href="mailto:sofiyan7919@gmail.com"
            className="text-blue-200 hover:underline"
          >
            Email: sofiyan7919@gmail.com
          </a>
        </p>
        <p className="text-white text-xs sm:text-sm">
          <a href="tel:+15714183975" className="text-blue-200 hover:underline">
            Phone: +1 (571) 418-3975
          </a>
        </p>
      </div>

      {/* Social Icons (LinkedIn, Gmail, Phone) */}
      <div className="flex items-center gap-12">
        {/* LinkedIn */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredIcon("linkedin")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            href="https://www.linkedin.com/in/hakeem-sofiyan-92062a2a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon text-white text-5xl aspect-square overflow-visible transition-all duration-150 ease-in-out transform hover:scale-110" />
          </a>
          {hoveredIcon === "linkedin" && (
            <motion.div
              className="tooltip absolute bottom-full mb-2 bg-black-500 text-white p-2 text-sm shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}  
            >
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/hakeem-sofiyan-92062a2a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/hakeem-sofiyan
              </a>
            </motion.div>
          )}
        </div>

        {/* Gmail */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredIcon("gmail")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            href="mailto:sofiyan7919@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaEnvelope className="social-icon text-white text-5xl aspect-square overflow-visible transition-all duration-150 ease-in-out transform hover:scale-110" />
          </a>
          {hoveredIcon === "gmail" && (
            <motion.div
              className="tooltip absolute bottom-full mb-2 bg-black-500 text-white p-2 text-sm shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}  
            >
              Email:{" "}
              <a href="mailto:sofiyan7919@gmail.com">sofiyan7919@gmail.com</a>
            </motion.div>
          )}
        </div>

        {/* Phone */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredIcon("phone")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            href="tel:+15714183975"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaPhoneAlt className="social-icon text-white text-5xl aspect-square overflow-visible transition-all duration-150 ease-in-out transform hover:scale-110" />
          </a>
          {hoveredIcon === "phone" && (
            <motion.div
              className="tooltip absolute bottom-full mb-2 bg-black-500 text-white p-2 text-sm shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}  
            >
              Phone: <a href="tel:+15714183975">+1(571)418-3975</a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
        <p>© 2024 Sofiyan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;





// import  { useState } from "react";
// import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";


// const Footer = () => {
//   const [hoveredIcon, setHoveredIcon] = useState(null);
//   return (
    
//     <footer className="c-space pt-3 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
//       {/* Thin Thank You Text */}
//       <div className="text-white font-light text-xs sm:text-sm mb-2">
//         🎉 Thank you for reaching out! Feel free to contact me anytime via:
//       </div>
//       {/* Contact Information */}
//       <div className="mt-2">
//         <p className="text-white text-xs sm:text-sm">
//           <a
//             href="mailto:sofiyan7919@gmail.com"
//             className="text-blue-200 hover:underline"
//           >
//             Email: sofiyan7919@gmail.com
//           </a>
//         </p>
//         <p className="text-white text-xs sm:text-sm">
//           <a href="tel:+15714183975" className="text-blue-200 hover:underline">
//             Phone: +1 (571) 418-3975
//           </a>
//         </p>
//       </div>
//       {/* Social Icons (LinkedIn, Gmail, Phone) */}
//       <div className=" flex items-center gap-12"> {/* Increased gap */}
//         {/* LinkedIn */}
//         <div
//           className="relative "
//           onMouseEnter={() => setHoveredIcon("linkedin")}
//           onMouseLeave={() => setHoveredIcon(null)}
//         >
//           <a
//             href="https://www.linkedin.com/in/hakeem-sofiyan-92062a2a3/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <FaLinkedin className="social-icon text-white text-5xl aspect-square overflow-visible transition-transform duration-300 ease-in-out transform hover:scale-125" />
//           </a>
//           {hoveredIcon === "linkedin" && (
//             <motion.div
//               className="tooltip absolute bottom-full mb-2 bg-black-500 text-white p-2  text-sm shadow-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               LinkedIn:{" "}
//               <a
//                 href="https://www.linkedin.com/in/hakeem-sofiyan-92062a2a3/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 linkedin.com/in/hakeem-sofiyan
//               </a>
//             </motion.div>
//           )}
//         </div>

//         {/* Gmail */}
//         <div
//           className="relative"
//           onMouseEnter={() => setHoveredIcon("gmail")}
//           onMouseLeave={() => setHoveredIcon(null)}
//         >
//           <a
//             href="mailto:sofiyan7919@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <FaEnvelope className="social-icon text-white text-5xl aspect-square overflow-visible transition-transform duration-300 ease-in-out transform hover:scale-125" />
//           </a>
//           {hoveredIcon === "gmail" && (
//             <motion.div
//               className="tooltip absolute bottom-full mb-2 bg-black-500 text-white p-2 text-sm shadow-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               Email:{" "}
//               <a href="mailto:sofiyan7919@gmail.com">sofiyan7919@gmail.com</a>
//             </motion.div>
//           )}
//         </div>

//         {/* Phone */}
//         <div
//           className="relative"
//           onMouseEnter={() => setHoveredIcon("phone")}
//           onMouseLeave={() => setHoveredIcon(null)}
//         >
//           <a
//             href="tel:+15714183975"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <FaPhoneAlt className="social-icon text-white text-5xl aspect-square overflow-visible transition-transform duration-300 ease-in-out transform hover:scale-125" />
//           </a>
//           {hoveredIcon === "phone" && (
//             <motion.div
//               className="tooltip absolute bottom-full mb-2 bg-black-500 text-white p-2  text-sm shadow-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               Phone: <a href="tel:+15714183975">+1(571)418-3975</a>
//             </motion.div>
//           )}
//         </div>
//       </div>
//       <div className="text-white-500 flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//         <p>© 2024 Sofiyan. All rights reserved.</p>
//       </div>

      

      
//     </footer>
    
//   );
// };

// export default Footer;
