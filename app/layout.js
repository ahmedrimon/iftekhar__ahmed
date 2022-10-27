import Navbar from "./Navbar.js";

export default function RootLayout({ children }) {
  return (
    <html>
      <Navbar />
      <body>{children}</body>
    </html>
  )
}
