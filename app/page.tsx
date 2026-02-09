import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Configuração flexível",
    description:
      "Escolha entre saldo inicial ou acumular valores positivos ao longo do mês."
  },
  {
    title: "Rotina divertida",
    description:
      "Calendário interativo para crianças registrarem as tarefas do dia."
  },
  {
    title: "Insights em tempo real",
    description:
      "Dashboards com estatísticas mensais, tarefas favoritas e evolução do saldo."
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
      <SiteHeader />

      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <Card className="flex flex-col justify-between">
          <div className="space-y-4">
            <CardTitle>Fluxo pensado para pais e filhos</CardTitle>
            <CardDescription>
              Pais criam tarefas globais, ajustam valores por filho e acompanham o
              progresso em dashboards claros. Crianças registram o que fizeram e
              veem o saldo crescer (ou diminuir) com transparência.
            </CardDescription>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parent" className="inline-flex">
              <Button>Visualizar área dos pais</Button>
            </Link>
            <Link href="/child" className="inline-flex">
              <Button variant="secondary">Visualizar área dos filhos</Button>
            </Link>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos passos</CardTitle>
            <CardDescription>
              Crie sua conta, convide os filhos por e-mail e personalize as
              tarefas. O histórico mensal fica salvo para acompanhar a evolução.
            </CardDescription>
          </CardHeader>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>✔️ Autenticação por e-mail ou social.</p>
            <p>✔️ Dados persistentes em banco de dados.</p>
            <p>✔️ Interface responsiva para celular e desktop.</p>
          </div>
        </Card>
      </section>
    </main>
  );
}
