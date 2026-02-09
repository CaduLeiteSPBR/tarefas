# Tarefas do Mês

Sistema completo para gestão de tarefas e mesadas para famílias. Pais configuram tarefas globais, ajustam valores por filho e acompanham dashboards mensais. Filhos registram as tarefas concluídas em um calendário interativo e acompanham o saldo.

## Stack sugerida

- **Next.js + React** para interface moderna e responsiva.
- **Tailwind CSS** para estilização rápida e acessível.
- **Prisma + PostgreSQL** para dados persistentes.
- **NextAuth** para autenticação com e-mail e social.

## Configuração inicial

1. Copie o arquivo `.env.example` para `.env` e ajuste as credenciais.
2. Instale as dependências:

```bash
npm install
```

3. Gere o cliente Prisma:

```bash
npx prisma generate
```

4. Rode o projeto:

```bash
npm run dev
```

## Funcionalidades planejadas

- Convite por e-mail para filhos entrarem na família.
- Calendário mensal para registro de tarefas.
- Configuração de saldo inicial ou modo de ganhos.
- Dashboards com estatísticas mensais e históricos.

## Estrutura dos dados

O schema Prisma define famílias, usuários (pais/filhos), tarefas globais e personalizações por filho, além do histórico mensal.
