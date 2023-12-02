import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Spotify clone",
  description: "Listen always",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider>
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider>
                <Sidebar songs={userSongs}>{children}</Sidebar>
                <Player/>
              </ModalProvider>
            </UserProvider>
          </SupabaseProvider>
        </ToasterProvider>
      </body>
    </html>
  );
}
