import ThemeContextProvider from '@/providers/context/ThemeContext'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
