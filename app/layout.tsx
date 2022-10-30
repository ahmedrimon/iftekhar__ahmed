import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <head>
        <title>Iftekhar Ahmed</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </div>
  )
}
