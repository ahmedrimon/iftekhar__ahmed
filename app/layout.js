import navbar from "../components/Navbar/navbar.js";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Iftekhar Portfolio</title>
      </head>
      <body>
        <navbar />
        {children}
      </body>
    </html>
  )
}
