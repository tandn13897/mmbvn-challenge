type TCard = {
    title: string,
    subTitle: string,
    src?: string,
    id: string;
} & (
    {
        direction: "horizontal",
        views: number,
        comments: number,
    } | {
        direction: "vertical"
    }
)

export type { TCard }