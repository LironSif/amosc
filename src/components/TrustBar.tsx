import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import muniLogo from '../assets/municipality-color.svg';
import industryLogo from '../assets/industrial-plants.svg';
import policeLogo from '../assets/Israel_Police.svg';
import modLogo from '../assets/Misrad_habitahon.svg';
import goVLogo from '../assets/Israel.svg';

const partnersList = [
  { name: "משרד הביטחון", logo: modLogo },
  { name: "משטרת ישראל", logo: policeLogo },
  { name: "רשם הקבלנים", logo: goVLogo }, 
  { name: "עיריות ורשויות", logo: muniLogo },
  { name: "מפעלי תעשייה", logo: industryLogo },
];

const loopedPartners = [...partnersList, ...partnersList, ...partnersList, ...partnersList];

export function TrustBar() {
  return (
    // --- השינויים הגדולים כאן ---
    // 1. min-h-[300px]: נותן גובה פיזי למיכל כדי שיהיה לאן לפזר את התוכן.
    // 2. justify-between: דוחף את הטקסט למעלה ואת הסליידר למטה (לקצוות).
    // 3. py-10: שומר על מרווח ביטחון מהקצוות עצמם.
    <div className="trust-section w-full min-h-[200px] flex flex-col items-center justify-evenly py-6 border-b border-slate-800/50 bg-slate-900/30 overflow-hidden">
      
      <style>{`
        .trust-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>

      {/* הטקסט - ייצמד לחלק העליון (מתחת ל-Padding) */}
      <div className="text-center px-4 z-20 relative w-full">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          מומחיות מוכחת בעבודה מול הגופים המובילים
        </p>
      </div>

      {/* הסליידר - ייצמד לחלק התחתון */}
      <div className="relative w-full max-w-[100vw] mt-8" dir="ltr">
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: { spaceBetween: 40 },
            768: { spaceBetween: 80 }
          }}
          className="trust-swiper pointer-events-none"
        >
          {loopedPartners.map((partner, index) => (
            <SwiperSlide key={`${index}-${partner.name}`} className="!w-auto !flex justify-center items-center">
              
              <div className="group flex flex-col items-center gap-4 w-32 px-2">
                
                {/* עיגול לבן */}
                <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-white shadow-lg shadow-slate-900/20 flex items-center justify-center overflow-hidden relative transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="block !w-[45px] !h-[45px] object-contain" 
                    style={{ maxWidth: '45px', maxHeight: '45px' }} 
                  />
                </div>
                
                <span className="text-xs md:text-sm text-slate-500 font-medium text-center whitespace-nowrap transition-colors duration-300 group-hover:text-slate-300">
                  {partner.name}
                </span>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b1220] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b1220] to-transparent z-10" />
      </div>
    </div>
  );
}