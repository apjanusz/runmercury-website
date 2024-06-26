import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { Footer } from "./components/Footer";

const logo = (
  <span>
    <img
      src="/images/mercury-black-logo.svg"
      style={{ height: "33px" }}
      className="dark:hidden"
      alt="Mercury Dark Logo"
    ></img>
    <img
      src="/images/mercury-white-logo.svg"
      style={{ height: "33px" }}
      className="hidden dark:block"
      alt="Mercury Logo"
    ></img>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/mljar/mercury",
  },
  docsRepositoryBase: "https://github.com/mljar/runmercury-website/tree/main",
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    if (frontMatter?.ogTitle) {
      return {
        titleTemplate: frontMatter?.ogTitle,
      };
    }

    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Mercury",
      };
    }
  },
  logo,
  head: function useHead() {
    const { frontMatter } = useConfig();
    const { title } = useConfig();
    const { route } = useRouter();
    //console.log(route);
    // here :)
    let socialCard;
    if (frontMatter?.ogImage === "widgets") {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-widgets.png";
    } else if (frontMatter?.ogImage === "features") {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-features.png";
    } else if (frontMatter?.ogImage === "cloud") {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-cloud.png";
    } else if (frontMatter?.ogImage === "examples") {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-examples.png";
    } else if (frontMatter?.ogImage === "tutorials") {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-tutorials.png";
    } else if (frontMatter?.ogImage === "integrations") {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-integrations.png";
    }else {
      socialCard = "https://runmercury.com/images/og-images/mercury-og-default.png";
    }
    //console.log(socialCard);

    return (
      <>
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            frontMatter.description
              ? frontMatter.description
              : "You can convert Jupyter notebooks to web applications with Mercury framework. Just create Python notebook and serve it as interactive web app in Mercury. What is more, Mercury provides interactive widgets that can be used in Jupyter Notebook. Deployment of notebooks is simplified with Mercury Cloud service."
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site" content="@RunMercury" />
        <meta name="twitter:site:domain" content="runmercury.com" />
        <meta name="twitter:url" content="https://runmercury.com" />
        <meta
          name="og:title"
          content={
            title ? title : "Build web applications in Jupyter Notebook and Mercury"
          }
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Mercury" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </>
    );
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: <Footer />,
  },
  //darkMode: false
};

export default config;
