import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const days = Array.from({ length: 30 }, (_, index) => index + 1);

const tasks = [
  { name: "Arrumar o quarto", value: 5 },
  { name: "Revisar o material", value: 4 },
  { name: "Ajudar em casa", value: 6 }
];

export default function ChildDashboard() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-secondary">Área dos filhos</p>
          <h1 className="text-3xl font-semibold">Olá, Lia!</h1>
          <p className="text-sm text-muted-foreground">
            Registre suas tarefas e acompanhe o saldo do mês.
          </p>
        </div>
        <Card className="flex items-center gap-4">
          <div>
            <p className="text-xs uppercase text-muted-foreground">Saldo atual</p>
            <p className="text-2xl font-semibold">R$ 120</p>
          </div>
          <Button variant="secondary">Ver extrato</Button>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Calendário do mês</CardTitle>
            <CardDescription>
              Clique em um dia para registrar as tarefas concluídas.
            </CardDescription>
          </CardHeader>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-7">
            {days.map((day) => (
              <button
                key={day}
                className="flex h-12 items-center justify-center rounded-2xl bg-muted/60 text-sm font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground"
              >
                {day}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tarefas disponíveis</CardTitle>
            <CardDescription>Selecione as tarefas do dia.</CardDescription>
          </CardHeader>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.name}
                className="flex items-center justify-between rounded-2xl border border-muted px-4 py-3"
              >
                <div>
                  <p className="font-medium">{task.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Valor: R$ {task.value}
                  </p>
                </div>
                <Button variant="outline">Registrar</Button>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Meta semanal</CardTitle>
            <CardDescription>Progresso desta semana.</CardDescription>
          </CardHeader>
          <p className="text-3xl font-semibold">8/12</p>
          <p className="text-sm text-muted-foreground">Faltam 4 tarefas</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dia favorito</CardTitle>
            <CardDescription>Quando mais registra tarefas.</CardDescription>
          </CardHeader>
          <p className="text-2xl font-semibold">Sexta-feira</p>
          <p className="text-sm text-muted-foreground">6 registros</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Economia do mês</CardTitle>
            <CardDescription>Diferença para o saldo inicial.</CardDescription>
          </CardHeader>
          <p className="text-2xl font-semibold">+R$ 18</p>
          <p className="text-sm text-muted-foreground">Últimos 30 dias</p>
        </Card>
      </section>
    </main>
  );
}
