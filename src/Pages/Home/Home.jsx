
import About from "./About/About";
import BentoGrid from "./About/BentoGrid";
import FeaturedWorks from "./FeaturedWorks/FeaturedWorks";
import GetInTouch from "./GetInTouch/GetInTouch";
import WeDO from "./GetInTouch/WeDO";
import Hero from "./Hero/Hero";
import VisionMission from "./VisionMission/VisionMission";
import WhatIDo from "./WhatIDo/WhatIDo";


const Home = () => {
    return (
        <div>
            <Hero />
            <About/>
            <WhatIDo />
            
            
            <BentoGrid/>
            <VisionMission />
            <FeaturedWorks />
            
            {/* <GetInTouch /> */}
            <WeDO/>
        </div>
    );
};

export default Home;