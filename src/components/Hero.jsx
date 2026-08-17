import heroImg from "../Gambar/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";

function Hero() {
  return (
    <section
      className="flex items-center justify-center px-12 py-12"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "300px",
      }}
    >
        <div className="max-w-[600px]">
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
            Tech Market
            </span>

            <h1 className="mt-4 text-4xl font-bold text-black drop-shadow-md">
            Your Marketplace for Digital Products & AI Tools
            </h1>

            <p className="mt-5 text-lg text-black drop-shadow-sm">
            Find the best software, AI solutions, and digital resources to improve
            your workflow and unlock new possibilities.
            </p>
        </div>
    </section>
  );
}

export default Hero;