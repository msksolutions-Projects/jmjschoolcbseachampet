import React, { useState } from 'react';

const ClubFAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I join a club?',
      answer: 'You can join a club by filling out the registration form on this page or by attending our Annual Club Fair. You can also directly contact the club coordinator via email.'
    },
    {
      id: 2,
      question: 'Can I join multiple clubs?',
      answer: 'Yes! Students are encouraged to join multiple clubs based on their interests. However, please make sure you can commit to the meeting schedules and activities.'
    },
    {
      id: 3,
      question: 'Is there a membership fee?',
      answer: 'Most clubs are free to join. Some clubs may have minimal fees for materials or competition entry fees. This information is provided when you register.'
    },
    {
      id: 4,
      question: 'What if I miss a meeting?',
      answer: 'It\'s okay to miss occasional meetings, but regular attendance is encouraged. Contact your club coordinator to catch up on what you missed.'
    },
    {
      id: 5,
      question: 'Can I start a new club?',
      answer: 'Absolutely! If you have an idea for a new club, submit a proposal to the Student Activities Office. You\'ll need a faculty advisor and at least 10 interested members.'
    },
    {
      id: 6,
      question: 'Do clubs look good on college applications?',
      answer: 'Yes! Colleges value sustained involvement in extracurricular activities. Leadership positions and achievements in clubs demonstrate commitment and skills.'
    },
    {
      id: 7,
      question: 'When do clubs typically meet?',
      answer: 'Most clubs meet after school hours between 3:30 PM and 5:30 PM. Some clubs meet on weekends for special events or competitions. Check the specific club page for exact schedules.'
    },
    {
      id: 8,
      question: 'Can I switch clubs during the year?',
      answer: 'Yes, you can join or leave clubs throughout the school year. However, we encourage you to commit for at least one semester to get the full experience.'
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about joining our clubs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-blue-900 transition-colors"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-slate-900 flex items-center gap-3">
                    <i className="fas fa-question-circle text-blue-900"></i>
                    {faq.question}
                  </span>
                  <i className={`fas fa-chevron-down text-slate-600 transition-transform ${
                    activeAccordion === faq.id ? 'rotate-180' : ''
                  }`}></i>
                </button>
                
                {activeAccordion === faq.id && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-slate-700 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default ClubFAQ;