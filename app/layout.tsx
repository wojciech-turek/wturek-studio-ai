// This is a root layout that just passes through to the locale-specific layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
