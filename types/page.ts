export interface Page {
    options: Option[]
    content: Content
    title: string
}

export interface Option {
    path: string
    name: string
}

export interface Content {
    text?: string
    url?: string
}