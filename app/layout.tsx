import Head from 'next/head'
import navbar from "../components/Navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Head/>
      <body>
        <navbar />
        {children}
      </body>
    </>
  )
}
