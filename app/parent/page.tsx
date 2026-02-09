import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tasks = [
  { name: "Arrumar o quarto", value: 5 },
  { name: "Lavar a louça", value: 7 },
  { name: "Leitura diária", value: 4 }
];

const children = [
  { name: "Lia", mode: "Saldo inicial", balance: 120 },
  { name: "Theo", mode: "Ganhar dinheiro", balance: 42 }
];

export default function ParentDashboard() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-secondary">Área dos pais</p>
          <h1 className="text-3xl font-semibold">Painel de controle</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie tarefas, saldos e acompanhe a evolução mensal.
          </p>
        </div>
        <Button>Convidar filho(a)</Button>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resumo dos filhos</CardTitle>
            <CardDescription>
              Saldos atuais e modo financeiro configurado.
            </CardDescription>
          </CardHeader>
          <div className="space-y-4">
            {children.map((child) => (
              <div
                key={child.name}
                className="flex items-center justify-between rounded-2xl bg-muted/60 px-4 py-3"
              >
                <div>
                  <p className="font-semibold">{child.name}</p>
                  <p className="text-xs text-muted-foreground">{child.mode}</p>
                </div>
                <p className="text-lg font-semibold">R$ {child.balance}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tarefas globais</CardTitle>
            <CardDescription>
              Edite valores e ajuste por filho quando necessário.
            </CardDescription>
          </CardHeader>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.name}
                className="flex items-center justify-between rounded-2xl border border-muted px-4 py-3"
              >
                <div>
                  <p className="font-medium">{task.name}</p>
                  <p className="text-xs text-muted-foreground">Valor base</p>
                </div>
                <p className="font-semibold">R$ {task.value}</p>
              </div>
            ))}
          </div>
          <Button className="mt-6 w-full" variant="secondary">
            Criar nova tarefa
          </Button>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas rápidas</CardTitle>
            <CardDescription>
              Média de tarefas concluídas por semana.
            </CardDescription>
          </CardHeader>
          <p className="text-3xl font-semibold">12,4</p>
          <p className="text-sm text-muted-foreground">+8% vs mês anterior</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saldo total pago</CardTitle>
            <CardDescription>Somatório do mês atual.</CardDescription>
          </CardHeader>
          <p className="text-3xl font-semibold">R$ 268</p>
          <p className="text-sm text-muted-foreground">2 filhos ativos</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tarefa mais popular</CardTitle>
            <CardDescription>Últimos 30 dias.</CardDescription>
          </CardHeader>
          <p className="text-2xl font-semibold">Leitura diária</p>
          <p className="text-sm text-muted-foreground">32 registros</p>
        </Card>
      </section>
    </main>
  );
}
