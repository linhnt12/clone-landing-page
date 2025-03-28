import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./tailwind.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fontsHref from "~/styles/fonts.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: fontsHref },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/noto-sans-jp-v53-latin-900.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="ja" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full font-noto-sans">
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}