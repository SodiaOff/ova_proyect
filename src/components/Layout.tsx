import { FC, ReactNode, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Link from "next/link";
import { routes } from "../constants/routes";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const router = useRouter();

  const currentRoutes = useMemo(
    () =>
      routes.map((item) => ({
        ...item,
        isActive: item.route === router.asPath,
      })),
    [router.asPath]
  );

  useEffect(() => {
    const handleRouteChange = () => NProgress.start();

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-dark bg-primary navbar-expand-md sticky-top">
        <div className="container-fluid">
          <Link href={"/"}>
            <a className="navbar-brand" href="#">
              OVA
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {currentRoutes.map((item, key) => (
                <li key={key} className="nav-item">
                  <Link href={item.route}>
                    <a
                      className={"nav-link " + (item.isActive ? "active" : "")}
                      aria-current="page"
                      href="#"
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="my-3 container">{children}</div>
      <footer className="mt-auto bg-primary text-center text-lg-start text-white">
        <div className="text-center p-1">©2022 Dev Team SODIA OFF</div>
      </footer>
    </div>
  );
};

export default Layout;
