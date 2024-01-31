import Link from "next/link";
import landing from '../assets/images/landing.svg'
import Image from "next/image";
const Landing = () => {
  return (
    <>
      <main className=" h-[100vh] p-7">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-500">WeFrame</h1>
          <Link href="/content">
            <button className="border text-sm border-[--primary-dark-blue1] px-2 py-1 b  rounded-md bg-white text-[--primary-dark-blue1] hover:text-white hover:bg-[--primary-dark-blue1] transition-all duration-200 ease-in ">
              Proceed to Content
            </button>
          </Link>

        </div>
        <div className=" md:flex mt-32 items-center justify-center  hidden">

          <Image src={landing} alt="" height={400} width={400} />
        </div>
      </main>
    </>
  );
};

export default Landing