import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo de volta</CardTitle>
          <CardDescription>
            Entre com e-mail ou uma conta social para acessar o painel.
          </CardDescription>
        </CardHeader>
        <div className="space-y-4">
          <Button className="w-full">Entrar com e-mail</Button>
          <Button variant="outline" className="w-full">
            Entrar com Google
          </Button>
          <Button variant="outline" className="w-full">
            Entrar com Apple
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Não tem conta? <Link href="/auth" className="text-primary">Crie agora</Link>
        </p>
      </Card>
    </main>
  );
}
