
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`"max-w-screen overflow-clip" `}
      >
          {children}
      </body>
    </html>
  );
}