import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="bg-purple-200">
        <section className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-[80vh]">
          {/* Left Content */}
          <div className="flex flex-col gap-4 items-center justify-center p-6 md:p-12 text-center md:text-left">
            <p className={`text-2xl sm:text-3xl md:text-4xl font-bold ${poppins.className}`}>
              The Best URL Shortener in the Market
            </p>
            <p className="text-base md:text-lg text-gray-700">
              We are the most straightforward URL shortener in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/shorten">
                <button className="bg-purple-500 hover:bg-purple-600 transition text-white font-bold px-6 py-2 rounded-lg shadow">
                  Try Now
                </button>
              </Link>
              <Link href="/github">
                <button className="bg-purple-500 hover:bg-purple-600 transition text-white font-bold px-6 py-2 rounded-lg shadow">
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-auto">
            <Image
              className="object-contain mix-blend-darken"
              alt="an image of vector"
              src="/vector.jpg"
              fill
              priority
            />
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="bg-purple-100 px-6 md:px-24 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose BitLinks?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: "⚡",
    title: "Blazing Fast",
    description:
      "Experience ultra-fast redirects and performance using cutting-edge Next.js architecture.",
  },
  {
    icon: "📈",
    title: "Built-in Analytics",
    description:
      "Track clicks, devices, and referrers. Get clear insights on every link you share.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "Your links are safe, secure, and never sold. We don’t track users unnecessarily.",
  },
  {
    icon: "🎨",
    title: "Modern Design",
    description:
      "Enjoy a smooth, clean UI experience — optimized for both desktop and mobile devices.",
  },
  {
    icon: "🛠️",
    title: "API Ready",
    description:
      "Developers can access URL shortening and analytics via our upcoming RESTful API.",
  },
  {
    icon: "🚀",
    title: "Always Improving",
    description:
      "We’re constantly iterating and adding new features. BitLinks evolves with your needs.",
  },
];
