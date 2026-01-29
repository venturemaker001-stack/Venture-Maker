import "./globals.css";
import Header from "@/app/components/Header";
import KakaoFloat from "@/app/components/KakaoFloat";


export const metadata = {
  title: "Venture Maker",
  description: "Total Business Growth Strategy",
  icons: {
    icon: "/venture.ico,"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-white">
        <Header />
        {children}
        <KakaoFloat />
      </body>
    </html>
  );
}

