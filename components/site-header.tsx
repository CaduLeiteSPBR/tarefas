import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl bg-card/80 p-6 shadow-soft backdrop-blur-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold text-secondary">Tarefas do Mês</p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Gestão divertida de tarefas e mesadas
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pais organizam, filhos conquistam metas diárias e acompanham o saldo em
          tempo real.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/auth" className="inline-flex">
          <Button variant="outline">Entrar</Button>
        </Link>
        <Link href="/auth" className="inline-flex">
          <Button>Começar agora</Button>
        </Link>
      </div>
    </header>
  );
}
