import FeaturedWorks from "./FeaturedWorks/FeaturedWorks";
import GetInTouch from "./GetInTouch/GetInTouch";
import Hero from "./Hero/Hero";
import VisionMission from "./VisionMission/VisionMission";
import WhatIDo from "./WhatIDo/WhatIDo";


const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedWorks />
            <VisionMission />
            <WhatIDo />
            <GetInTouch />
        </div>
    );
};

export default Home;