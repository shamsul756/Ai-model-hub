import React, { useEffect, useRef, useState } from 'react'; // ✅ single import
//  here are add countup function
const CountUp = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 2000;
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
//  here timeing condition
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, stepTime);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-[#4f39f6] to-purple-500 py-10 mb-10">
            <div className="flex justify-center items-center gap-16 text-white text-center">

                <div>
                    <p className="text-6xl font-bold">
                        <CountUp target={50} suffix="K+" />
                    </p>
                    <p className="text-xl mt-2 text-white/70">Active Users</p>
                </div>

                <div className="h-12 w-px bg-white/30"></div>

                <div>
                    <p className="text-6xl font-bold">
                        <CountUp target={200} suffix="+" />
                    </p>
                    <p className="text-xl mt-2 text-white/70">Premium Tools</p>
                </div>

                <div className="h-12 w-px bg-white/30"></div>

                <div>
                    <p className="text-6xl font-bold">
                        <CountUp target={4.9} suffix="" />
                    </p>
                    <p className="text-xl mt-2 text-white/70">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats; 