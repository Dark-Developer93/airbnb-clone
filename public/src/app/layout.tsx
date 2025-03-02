import NavigationEvents from "../components/common/NavigationEvents";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { Inter } from "next/font/google";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "Created by WeMaAd Agency as a clone of Airbnb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
        rel="stylesheet"
        precedence="default"
      />
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
        type="text/css"
        precedence="default"
      ></link>
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
