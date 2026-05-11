import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { I18nProvider } from "@/context/I18nProvider";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCMS-DDU | Membership Management",
  description: "Prosperity Party Membership Contribution Management System - Dire Dawa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ClerkProvider>
          <I18nProvider>
            <AuthProvider>
              {/* Optional: Add header here or in specific layouts */}
              <header className="fixed top-4 right-4 z-[1001] flex gap-4">
                <Show when="signed-out">
                  <div className="flex gap-2">
                    <SignInButton />
                    <SignUpButton />
                  </div>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </header>
              {children}
            </AuthProvider>
          </I18nProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
