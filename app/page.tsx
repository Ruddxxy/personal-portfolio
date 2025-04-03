import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-purple-600 hover:text-purple-800">Hola,Welcome! </h1>
      <p className="text-lg text-black mb-8 bg-gray-100 p-4 rounded-lg shadow-lg">Hi, I'm Rudra Narayan Mohapatro,
        a passionate software engineer with a keen interest in cybersecurity.
        I am a  CSE undergrad student at NIT,Rourkela.
      </p>
      <p className="text-lg text-black mb-8 italic bg-violet-100 p-3 rounded">
        I am passionate about the cycle of breaking and developing : Engineering
      </p>
      <Link 
        href="/about" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition duration-200"
      >
        Learn More
      </Link>
    </div>
  );
} 