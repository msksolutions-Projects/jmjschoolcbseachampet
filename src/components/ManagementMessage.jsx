import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";


import principalImg from "/principal.webp";

const principal = {
  name: "Sr. Arogya Gudipudi",
  role: "Principal",
  message: `It gives me immense pleasure to welcome you to JMJ School CBSE, Achampet, a vibrant learning community committed to helping every child learn, grow, and succeed.

At JMJ, we see every student as an individual with unique abilities, dreams, and potential. Our responsibility as educators is not only to impart knowledge but also to create opportunities that encourage curiosity, creativity, communication, collaboration, and independent thinking.

Following the CBSE curriculum, we strive to make learning meaningful, engaging, and connected to real life. Along with academic excellence, equal importance is given to life skills, co-curricular activities, physical well-being, leadership qualities, and character development. We want our students to become confident learners who are prepared to adapt, explore, and contribute positively to the world around them.

Our teachers serve as mentors and facilitators, creating a supportive environment where children feel encouraged to ask questions, express their ideas, discover their strengths, and learn from every experience.

We also value the partnership between school and parents, as we believe that the best outcomes are achieved when educators and families work together towards the growth and happiness of every child.

At JMJ School CBSE, Achampet, our endeavour is to provide an education that inspires a love for learning today and builds a strong foundation for tomorrow.`,
  quote: "Educating Minds, Enriching Lives",
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