export type Status = 'todo' | 'doing' | 'done' 
export type Priority = 'low' | 'medium' | 'high'

export interface Demand {
    id: number
    title: string
    client: string
    priority: Priority
    status: Status
}