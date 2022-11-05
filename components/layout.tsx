import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  {
    href: "/",
    title: "Dashboard",
  },
  {
    href: "/apps",
    title: "Apps",
  },
];

export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-[#E8F3FB] w-full md:w-80 py-14 px-5">
          <nav>
            <img
              src="https://clouddley.com/_next/image?url=%2Fimages%2Fauth-logo.png&w=640&q=75"
              alt="logo"
            />
            <ul className="mt-20">
              {menuItems.map(({ href, title }) => (
                <li className="my-8 mx-3" key={title}>
                  <Link href={href}>
                    <p
                      className={`flex p-2 rounded hover:bg-[#0481D2] hover:text-white cursor-pointer ${
                        (router.asPath === href ||
                          router.asPath === "/create-app") &&
                        "bg-[#0481D2] text-white"
                      }`}
                    >
                      {title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 md:my-8 my-2 md:px-8 px-2">{children}</main>
      </div>
    </div>
  );
}
