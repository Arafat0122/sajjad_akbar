
import About from "./About/About";
import BentoGrid from "./About/BentoGrid";
import FeaturedWorks from "./FeaturedWorks/FeaturedWorks";
import GetInTouch from "./GetInTouch/GetInTouch";
import WeDO from "./GetInTouch/WeDO";
import Hero from "./Hero/Hero";
import Publications from "./Publications/Publications";
import RecentActivities from "./RecentActivities/RecentActivities";
import WhatIDo from "./WhatIDo/WhatIDo";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <WhatIDo />
            <BentoGrid />
            {/* <FeaturedWorks />*/}
            {/* <GetInTouch /> */}
            <Publications />
            <RecentActivities />
            <WeDO />
        </div>
    );
};

export default Home;