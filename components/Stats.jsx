"use client";
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when section is in view
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  // State to handle the trigger and prevent rendering CountUp before view
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true); // Set to true when the section is in view
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="pt-16 lg:pt-[115px] pb-16 lg:pb-[113px] bg-[url('/images/community-impact.webp')] bg-cover bg-center relative"
    >
      {/* Gradient Overlay to Improve Text Contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="mx-auto flex flex-col text-center lg:items-center lg:justify-center w-full relative z-10 px-4">
        <p className="font-medium text-lg text-black uppercase mb-4">Our Impact</p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 w-full lg:w-[70%] text-black">
          Some Key Statistics Reflecting Our Mission and Impact
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Successful Projects */}
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[72px] font-bold text-primary">
              {isInView && <CountUp end={350} suffix='+' duration={2} />}
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-primary">Girls Impacted</p>
          </div>

          {/* Funds Raised */}
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[72px] font-bold text-primary">
              {isInView && <CountUp end={2000} suffix="+" duration={2} />}
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-primary">Of youth and women trained</p>
          </div>

          {/* Lives Impacted */}
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[72px] font-bold text-primary">
              {isInView && <CountUp end={500} suffix="+" duration={2} />}
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-primary">Health care outreach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
