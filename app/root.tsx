// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { getToast } from "remix-toast";
import { json } from "@remix-run/node";
import { Toaster, toast as showToast } from "react-hot-toast";
import React from "react";

import "./tailwind.css";
import Navbar from "./components/Navbar";

// ✅ 1. Loader for root (not imported from somewhere else!)
export async function loader({ request }: LoaderFunctionArgs) {
  const { toast, headers } = await getToast(request);
  return json({ toast }, { headers });
}

// ✅ 2. Fonts & Tailwind styles
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { toast } = useLoaderData<typeof loader>();

  // ✅ 3. Display toast on client (Remix-recommended way)
  React.useEffect(() => {
    if (toast?.message) {
      showToast(toast.message); // show toast from server
    }
  }, [toast]);

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
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
