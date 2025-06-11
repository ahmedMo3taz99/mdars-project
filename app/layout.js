export const metadata = {
  title: {
    template: "%s | Mdares",
    default: "Welcome To | Mdares",
  },
  description: "The biggest website for school reservations for your child",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
