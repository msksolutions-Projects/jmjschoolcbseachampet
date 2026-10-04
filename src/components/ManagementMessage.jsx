import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";


import principalImg from "/principal.webp";

const principal = {
  name: "SR. JOJJAMMA P",
  role: "Principal",
  message: `Welcome to JMJ School, Karunapuram, a place where education is imparted with care, commitment, and conscience. Our school stands firm on the values of impartiality, discipline, integrity, and respect for every individual.

  We believe that true education goes beyond textbooks. It shapes character, builds confidence, and prepares students to become responsible citizens of tomorrow.

  With a strong emphasis on moral values and disciplined learning, we strive to nurture young minds to think critically, act ethically, and lead courageously.`,
  quote: "Empowering minds, building futures",
};

export default function ManagementMessage() {
  return (
    <section className="relative w-full bg-slate-50 py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl translate-x-4 translate-y-4 -z-10 hidden sm:block" />
              
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/5]">
                <img
                  src={principalImg}
                  alt={principal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x800?text=Principal+Photo";
                  }}
                />
              </div>

              
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-10 bg-primary rounded-full" />
            
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Message From <br />
                <span className="text-primary">The Principal</span>
              </h2>
            </div>

            <div className="relative">
              <FontAwesomeIcon 
                icon={faQuoteLeft} 
                className="absolute -top-4 -left-8 text-primary/10 text-7xl -z-10" 
              />
              <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
                {principal.message}
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-8 border-primary shadow-sm">
                <p className="text-xl font-medium text-gray-800 italic">
                   "{principal.quote}"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">             
              <div>
                <h4 className="text-xl font-bold text-gray-900 leading-none">{principal.name}</h4>
                <p className="text-gray-500 mt-1">{principal.role}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}