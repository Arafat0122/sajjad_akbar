import { useEffect } from "react";
import hijabImage from "/img-bg01.jpg";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Button from "../../../Common/Button/Button";

const AboutHome = () => {
    useEffect(() => {
        const img = new Image();
        img.src = hijabImage;
    }, []);

    return (
        <div
            className="w-full bg-left bg-cover lg:bg-center"
            style={{
                backgroundImage: `url(${hijabImage})`,
            }}
        >
            <div className="flex justify-end mx-auto max-w-7xl">
                <div className="max-w-2xl flex flex-col justify-end  p-6 my-[100px] md:my-[300px]">
                    <h6 className="text-xl font-semibold text-white">About</h6>
                    <h3 className="text-5xl font-bold text-blue-300 pt-[17px] pb-[30px]">
                        Sajjad Akbar
                    </h3>
                    <p className="text-lg font-medium text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                        quidem blanditiis fugit minus quos, ipsum qui ipsa commodi labore
                        adipisci nisi dicta aut pariatur cum voluptatibus neque, accusamus
                        dolorem perspiciatis.
                    </p>

                    <div className="mt-[50px]">
                        <Button
                            text="Learn More "
                            icon={ArrowRight}
                            className="border border-blue-300 text-blue-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;