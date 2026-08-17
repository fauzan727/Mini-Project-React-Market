import Card from "./Card";
import productivityImg from "../Gambar/images.jpg";
import marketingImg from "../Gambar/digital_marketing_04.jpg";
import codeImg from "../Gambar/11793526_4843806.jpg";
import designImg from "../Gambar/302951236_abd66437-97d4-4783-a7ad-9550aeccacd0.jpg";
import aiToolsImg from "../Gambar/86c9992b-f530-4548-ab4e-a318839a905d.jpg";

function Categories(){
    const categoriesData = [
        {
            id: 1,
            href: "Productivity.html",
            image: productivityImg,
            title: "Productivity",
            description: "Boost your efficiency with AI poweredproductivity tools."
        },
        {
            id: 2,
            href: "Marketing.html",
            image: marketingImg,
            title: "Marketing",
            description: "Enhance yyour marketing strategy with AI-driven insight."
        },
        {
            id: 3,
            href: "code.html",
            image: codeImg,
            title: "Code",
            description: "Accelerate your coding with intelegent AI assistant."
        },
        {
            id: 4,
            href: "#",
            image: designImg,
            title: "Design",
            description: "Unleash your creativity with AI-enhanced design tools."
        },
        {
            id: 5,
            href: "#",
            image: aiToolsImg,
            title: "AI Tools",
            description: "Explore a wide range of innoative Ai tools for various application."
        }
    ];

    return (
        <section id="categories" className="p-[50px] flex flex-col items-center bg-grey-color">
            <h2 className="text-[36px] font-bold text-primary mb-[40px]">
                Categories
            </h2>
            <div className="grid grid-cols-5 gap-[20px] max-w-[1000px] mx-auto mt-[40px]">
                {categoriesData.map((category) => (
                    <a key={category.id} href={category.href} className="categories-list">
                        <Card
                            image={category.image}
                            title={category.title}
                            description={category.description}
                            className="categories-card"
                            imageAlt={`${category.title} Image`}
                        />
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Categories