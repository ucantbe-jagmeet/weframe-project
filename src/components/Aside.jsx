"use client"
import asideLinks from "@/utils/asideLinks";
import Link from "next/link";

const Aside = () => {
    return (
        <main className="h-screen w-[15rem] bg-[#FFF] sm:flex hidden flex-col items-center justify-evenly py-10">
            <div className="flex flex-col gap-y-10 w-[70%] h-full overflow-y-auto hide-scrollbar py-7">
                {asideLinks.map((icon) => (
                    <div
                        onClick={() => { console.log('clikced') }}
                        className="cursor-pointer"
                        key={icon.id}
                    >
                        <Link
                            href={icon.path}
                            className={`flex gap-x-6 hover:text-[#369FFF] cursor-pointer `}
                        >
                            <h2 className="text-xl">{icon.icon}</h2>
                            <h2 className="text-sm">{icon.name}</h2>
                        </Link>
                    </div>

                ))}
            </div>

        </main>
    );
};
export default Aside;
