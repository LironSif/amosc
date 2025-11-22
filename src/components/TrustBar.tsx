import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// ייבוא ה-CSS של Swiper
import 'swiper/swiper-bundle.css';

// ייבוא הלוגואים
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
    // שינוי מבני: flex-col כדי שהטקסט והסליידר יהיו אחד מעל השני
    <div className="trust-section py-12 border-b border-slate-800/50 bg-slate-900/30 flex flex-col items-center justify-center overflow-hidden">
      
      <style>{`
        .trust-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>

      {/* הטקסט - עכשיו הוא חלק מהזרימה הרגילה (לא absolute) */}
      <div className="text-center mb-12 px-4 z-20 relative">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          מומחיות מוכחת בעבודה מול הגופים המובילים
        </p>
      </div>

      {/* הסליידר */}
      <div className="relative w-full max-w-[100vw]" dir="ltr">
        
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
                  
                  {/* תמונה מוגבלת בגודל */}
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="block !w-[45px] !h-[45px] object-contain" 
                    style={{ maxWidth: '45px', maxHeight: '45px' }} 
                  />
                  
                </div>
                
                {/* טקסט מתחת ללוגו */}
                <span className="text-xs md:text-sm text-slate-500 font-medium text-center whitespace-nowrap transition-colors duration-300 group-hover:text-slate-300">
                  {partner.name}
                </span>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* הצללות בצדדים */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b1220] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b1220] to-transparent z-10" />
      </div>
    </div>
  );
}