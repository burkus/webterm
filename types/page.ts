export interface Page {
    title: string
    options?: Option[]
    content?: Content
}

export interface Option {
    path: string
    name: string
}

export interface Content {
    text?: string
    url?: string
}