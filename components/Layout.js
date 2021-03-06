import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/NavLinks";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
import Logo from "../public/images/logo.svg";
import MobileNav from "../components/MobileNav";
import ThemeSwich from "../components/ThemeSwich";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-12">
          <div>
            <Link href="/" aria-label="TsuguBlog">
              <div className="flex items-center justify-between">
                <div className="mr-1">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div className="h-7 text-xl sm:text-xl font-semibold text-gray-900 dark:text-gray-100 sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden md:flex">
              {headerNavLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className={
                    router.pathname.startsWith(link.href)
                      ? "font-medium text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 transition duration-300 ease-in-out m-2 py-2 md:mx-5"
                      : "font-medium text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 transition duration-300 ease-in-out m-2 py-2 md:mx-5"
                  }
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwich />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default Layout;
