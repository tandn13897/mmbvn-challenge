import { ReactElement } from "react";

type TMenuItem = {
    icon: ReactElement,
    name: string,
    link?: string,
}

type TSubMenu = {
    header: string
    items: TMenuItem[]
}

export type { TMenuItem, TSubMenu };