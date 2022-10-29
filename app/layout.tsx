import Navbar from "../components/Navbar/navbar";

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
