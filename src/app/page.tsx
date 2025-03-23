'use client';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useState, useRef, useEffect} from "react";

export default function Home() {

  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const scrollToSlide = (index: number) => {
    containerRef.current?.children[index].scrollIntoView({ behavior: 'smooth'});
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.pageY - (containerRef.current?.offsetTop || 0));
    setScrollTop(containerRef.current?.scrollTop || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const y = e.pageY - (containerRef.current?.offsetTop || 0);
    const walk = (y - startY) * 3;
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTop - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to the nearest slide
    if (containerRef.current){
      const slideHeight  = 400;
      const currentScroll = containerRef.current.scrollTop;
      const nearestSlide = Math.round(currentScroll / slideHeight);
      containerRef.current.scrollTo({
        top: nearestSlide * slideHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSlide(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    const slides = container.querySelectorAll('.role-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl backdrop-blur-md bg-gray-900/90 rounded-2xl p-4 shadow-accent shadow-md z-50 border border-gray-600">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-2xl font-semibold text-white text-shadow">
            <Avatar>
              <AvatarImage src="https://github.com/viperelectric.png" alt="viper"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <label className="">ViperElectric: Daniel Cser</label>
          </div>
          <ul className="flex gap-6">
            <li><a href="#" onClick={(e) => {e.preventDefault(); scrollToSlide(0); }}className="text-white hover:text-accent transition-colors text-shadow">Home</a></li>
            <li><a href="https://github.com/ViperElectric" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors text-shadow">Projects</a></li>
            {/*<li><a href="mailto:dcser@dtcser.com" className="text-white hover:text-accent transition-colors text-shadow">Contact</a></li>*/}
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl relative">
        <title>Developer - Viper_Electric</title>
        <div className="relative flex w-full">
          <div 
            ref={containerRef}
            className="w-full h-[300px] overflow-y-auto snap-y snap-mandatory scrollbar-hide flex flex-col select-none cursor-grab active:cursor-grabbing gap-[400px] p-12"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Current Role */}
            <div className="role-slide snap-start shrink-0 h-[200px] px-4" data-index="0">
              <div className="flex flex-row items-center gap-12 bg-gray-600 p-10 rounded-lg shadow-accent shadow-lg h-full">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-mono text-accent">2022 - Present</span>
                  <span className="text-2xl text-white">Mobile Application Engineer - Teledyne FLIR</span>
                </div>
              </div>
            </div>
            
            {/* Kind current roll?*/}

            <div className="role-slide snap-start shrink-0 h-[200px] px-4" data-index="1">
              <div className="flex flex-row items-center gap-12 bg-gray-600 p-10 rounded-lg shadow-accent shadow-lg h-full">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-mono text-accent">2013 - Present</span>
                  <span className="text-2xl text-white">IT Support *When Needed for onsite help* - Teledyne FLIR</span>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="role-slide snap-start shrink-0 h-[200px] px-4" data-index="2">
              <div className="flex flex-row items-center gap-12 bg-gray-700 p-10 rounded-lg shadow-accent shadow-lg h-full">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-mono text-accent">2016 - 2022</span>
                  <span className="text-2xl text-white">V&V Software Test Engineer - Teledyne FLIR</span>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="role-slide snap-start shrink-0 h-[200px] px-4" data-index="3">
              <div className="flex flex-row items-center gap-12 bg-gray-700 p-10 rounded-lg shadow-accent shadow-lg h-full">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-mono text-accent">2009 - 2016</span>
                  <span className="text-2xl text-white">Electronics Technician - Teledyne FLIR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Repositioned Dots Navigation */}
          <div className="flex flex-col gap-2 absolute right-[-20px] top-1/2 -translate-y-1/2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => {
                  containerRef.current?.children[index].scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeSlide === index ? 'bg-accent' : 'bg-gray-400 hover:bg-accent'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
