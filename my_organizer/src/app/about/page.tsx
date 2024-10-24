export default function About({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
  