import "./globals.css";

export const metadata = {
  title: "Glazey Admin Dashboard",
  description: "Modern Admin Dashboard",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}