import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}
