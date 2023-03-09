import { ReactNode } from "react";
import Contact from "./contact";
import Navbar from "./navbar";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <Contact />
      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
