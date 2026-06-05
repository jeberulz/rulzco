import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

interface NavMenuProps {
  className?: string;
}

export function NavMenu({ className }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { number: "00", label: "Home", sub: "Where the creative heart is.", href: "#" },
    { number: "00", label: "News", sub: "Our updates, thoughts, resources, and more.", href: "#" },
    { number: "08", label: "Work", sub: "Projects we have worked on.", href: "#" },
    { number: "04", label: "Partnership", sub: "We partner & invest in companies & ideas.", href: "#" },
    { number: "", label: "Studio", sub: "About the Studio, principles & values.", href: "#" },
    { number: "", label: "Monopage", sub: "A unique product form Monolif.", href: "#" },
    { number: "", label: "Services", sub: "What we do and how we do it.", href: "#" },
  ];

  return (
    <>
      {/* Trigger Button */}
      <div 
        onClick={() => setIsOpen(true)} 
        className={`flex items-center gap-1 cursor-pointer text-[#9CA3AF] hover:text-white transition-colors ${className}`}
      >
        <span className="text-sm tracking-[0.2em] font-medium">MENU</span>
        <span className="text-lg leading-none font-light ml-1">+</span>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Bezier for smooth slide
            className="fixed inset-0 bg-black z-[100] text-white overflow-y-auto"
          >
            <div className="max-w-[1600px] mx-auto p-6 md:p-12 h-full flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-16 md:mb-24">
                <div className="w-12 h-12">
                   {/* Logo Icon Placeholder or Component - Using simple SVG shape to match image 'II' logo */}
                   <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="10" height="40" fill="white"/>
                        <rect x="18" y="0" width="10" height="40" fill="white"/>
                        <path d="M18 0L28 0L10 40H0L18 0Z" fill="white"/> {/* Abstract interpretation */}
                        {/* Actually, let's just use the white bars like in the image */}
                   </svg>
                   {/* Or just use the Logo component if it fits? The image shows a specific icon. 
                       I'll stick to a custom SVG for the "II" look in the top left corner of the menu */}
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm tracking-widest hover:text-gray-300 transition-colors"
                >
                  CLOSE <X size={20} />
                </button>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 flex-grow">
                
                {/* Left Column: Description & Contact */}
                <div className="flex flex-col justify-between h-full pb-12">
                  <div className="max-w-2xl">
                    <p className="text-3xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight mb-16">
                      MONOLIF is a digital design and development studio that combines unparalleled design, creative strategy, and innovative solutions to create a memorable user experience for our clients.
                    </p>
                    
                    <div className="mb-12">
                      <p className="text-xl md:text-2xl mb-2">Want to discuss a new project with MONOLIF?</p>
                      <a href="mailto:contact@monolif.studio" className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors">
                        Get in touch //contact@monolif.studio
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 text-xs uppercase tracking-widest text-gray-400 mt-auto">
                     <div className="flex flex-col gap-2">
                        <a href="#" className="flex items-center gap-1 hover:text-white">Twitter <ArrowUpRight size={12} /></a>
                        <a href="#" className="flex items-center gap-1 hover:text-white">LinkedIn <ArrowUpRight size={12} /></a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <a href="mailto:contact@monolif.co" className="hover:text-white">CONTACT@MONOLIF.CO</a>
                        <span>(+44) 07713 134 330</span>
                     </div>
                  </div>
                </div>

                {/* Right Column: Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 pb-12 content-start">
                   {menuItems.map((item, idx) => (
                     <a key={idx} href={item.href} className="group block">
                        <div className="relative inline-block">
                           <span className="text-5xl md:text-7xl font-light group-hover:text-gray-300 transition-colors block">
                             {item.label}
                           </span>
                           {item.number && (
                             <span className="absolute -top-2 -right-6 text-sm md:text-base tracking-widest text-gray-500 font-normal">
                               {item.number}
                             </span>
                           )}
                        </div>
                        <p className="text-sm text-gray-500 mt-2 max-w-[200px]">
                          {item.sub}
                        </p>
                     </a>
                   ))}
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
