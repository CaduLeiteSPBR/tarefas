import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarefas do Mês",
  description: "Gestão divertida de tarefas e mesadas para famílias"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="gradient-bg">
        {children}
      </body>
    </html>
  );
}
