import Link from "next/link";

const data = [
    { id: 1, text: "Home", href: "/home" },
    { id: 2, text: "Create", href: "/create" },
    { id: 3, text: "Blogs", href: "/blogs" },
];

const Navlinks = () => {
    return (
        <div className=" hidden lg:block ">
            <ul className="flex gap-x-10">
                {data.map((links) => {
                    const { id, text, href } = links;
                    return (
                        <li
                            key={id}
                            className="text-white mx-2 text-lg hover:bg-[--primary-light-blue] hover:text-[--main-logo-color] p-1 px-2 rounded cursor-pointer transition-all duration-300 "
                        >
                            <Link
                                href={href}
                            >
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navlinks;
