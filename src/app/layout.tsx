import "./globals.css";

export const metadata = {
  title: "Ashirwad Shetye: DataPoem-test-Project",
  description: "Functioning nested comment section",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
