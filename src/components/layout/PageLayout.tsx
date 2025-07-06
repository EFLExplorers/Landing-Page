import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col">
        {children}
      </main>
    </div>
  );
};
