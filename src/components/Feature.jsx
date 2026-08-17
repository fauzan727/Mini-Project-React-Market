import Button from "./Button";
import featuredImg from "../Gambar/2002.i039.010_chatbot_messenger_ai_isometric_set-09.jpg";

function Feature(){
    const handleMoreClick = () => {
        console.log("More button clicked");
    };

    return (
        <section className="p-[50px] max-w-[1200px] ml-0">
            <span className="text-[2rem] font-bold mb-[25px]">Featured Product</span>
            <div className="flex items-center gap-[20px]">
                <img
                    src={featuredImg}
                    alt="feature image"
                    className="w-[300px] h-auto rounded-[10px] object-cover"
                />
                <div className="flex flex-col gap-[15px]">
                    <h2 className="text-[1.5rem] font-bold">Top rated AI tool</h2>
                    <p className="text-secondary-text leading-relaxed">
                        Revolutionize your work flow with this highly-rated AI tool.<br />
                        Experience unparalleled efficiency and innovation
                    </p>
                    <Button variant="primary" onClick={handleMoreClick}>more&gt;&gt;</Button>
                </div>
            </div>
        </section>
    )
}

export default Feature