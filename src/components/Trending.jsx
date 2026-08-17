import Card from "./Card";
import aiWritingImg from "../Gambar/Man and robot with computers sitting together in workplace.jpg";
import aiImgGen from "../Gambar/futuristic-half-robot-tiger.jpg";
import analysisImg from "../Gambar/futuristic-ai-dashboard-display.jpg";
import supportImg from "../Gambar/female-programmer-scanning-her-face-with-biometric-security-technology-virtual-screen-digital-remix.jpg";

function Trending(){
    const trendingData = [
        {
            id: 1,
            href: "#",
            image: aiWritingImg,
            title: "Ai writing Assistant",
            description: "Instantly generate high-quality articles, marketing copy, and professional emails without writer's block."
        },
        {
            id: 2,
            href: "#",
            image: aiImgGen,
            title: "AI image generator",
            description: "Transform your text prompts into stunning, high-resolution visuals and digital artwork in seconds."
        },
        {
            id: 3,
            href: "#",
            image: analysisImg,
            title: "AI data analysis tool",
            description: "Turn complex raw data into automated charts and actionable business insights instantly."
        },
        {
            id: 4,
            href: "#",
            image: supportImg,
            title: "AI costumer support",
            description: "Provide 24/7 automated customer service with instant, friendly answers to boost sales."
        }
    ];

    return(
        <section className="p-[50px] flex flex-col items-center bg-grey-color">
            <h2 className="text-[36px] font-bold text-primary mb-[40px]">Trending</h2>
            <div className="grid grid-cols-5 gap-[20px] max-w-[1000px] mx-auto mt-[40px]">
                {trendingData.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        className="trending-item"
                        imageAlt="trending img"
                    />
                ))}
            </div>
        </section>
        
    )
}

export default Trending;