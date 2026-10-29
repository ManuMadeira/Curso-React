import type { Demand } from "./type"

export const initialDemands: Demand[] = [
    { id: 1,  title: "Implementar nova funcionalidade", client: "Cliente A", priority: "high", status: "todo" },
    { id: 2,  title: "Corrigir bug crítico", client: "Cliente B", priority: "medium", status: "doing" },
    { id: 3,  title: "Atualizar documentação", client: "Cliente C", priority: "low", status: "done" },
    { id: 4,  title: "Refatorar código legado", client: "Cliente D", priority: "low", status: "todo" },
    { id: 5,  title: "Melhorar performance do sistema", client: "Cliente E", priority: "medium", status: "doing" },
    { id: 6,  title: "Adicionar testes unitários", client: "Cliente F", priority: "low", status: "done" },
    { id: 7,  title: "Implementar nova funcionalidade", client: "Cliente G", priority: "high", status: "todo" },
]