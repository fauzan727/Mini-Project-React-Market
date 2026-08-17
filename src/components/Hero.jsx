import heroImg from "../Gambar/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";

function Hero(){
    return (
        <section className="flex justify-center items-center p-[50px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="text-center md:text-left">
                <h1 className="bg-grey-color rounded-[20px] px-[12px] py-[6px] text-3xl font-bold text-White-text">
                    Tech Market
                </h1>
                <h2 className="text-[18px] font-bold text-white mt-4">
                    Your Marketplace for Digital Products &amp; AI Tools
                </h2>
                <p className="text-[18px] text-white mt-[20px] mb-[30px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">
                    Find the best software, AI solutions, and digital resources 
                    to improve your workflow and unlock new possibilities.
                </p>
            </div>
        </section>
    )
}

export default Hero;