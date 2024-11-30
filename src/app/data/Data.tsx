interface Host {
    key: number;
    name: string;
    position: string;
    url: string;
}

interface Menus {
    key: number;
    section: string;
    lorem: string
}

interface EpisodeType {
    key: number,
    date: string,
    episode: string,
    title: string,
    details: string,
    videoTime: string,
}
export const HostsData: Host[] = [
    {
        key: 1,
        name: "Lorem Ipsum",
        position: "Position 1",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxjAS5XOyce7tPZQU6VspYHHPSAEan-iV3g&s"
    },
    {
        key: 2,
        name: "Lorem Ipsum",
        position: "Position 2",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxjAS5XOyce7tPZQU6VspYHHPSAEan-iV3g&s"
    }
];

export const Menu: Menus[] = [
    {
        key: 1,
        section: "Section 1",
        lorem: "Lorem Ipsumn A"
    },
    {
        key: 2,
        section: "Section 2",
        lorem: "Lorem Ipsumn B"
    },
    {
        key: 3,
        section: "Section 3",
        lorem: "Lorem Ipsumn C"
    },

];

export const EpisodesData: EpisodeType[] = [
    {
        key: 1,
        date: "MARCH 13,2023",
        episode: "Section 1 | Episode 7",
        title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Title",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        videoTime: "LISTEN. 01:01:36"
    },
    {
        key: 2,
        date: "MARCH 6,2023",
        episode: "Section 1 | Episode 6",
        title: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        details: "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature form 45 BC, making it over 2000 year old. Richard McClintook, a Latin professor at Humpden-Sydeny College in Virgina, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and doing through the cites of the world in classical literature, discovered the undoubtable sourece.",
        videoTime: "LISTEN. 46:13"
    },
    {
        key: 3,
        date: "MARCH 6,2023",
        episode: "Section 1 | Episode 6",
        title: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        videoTime: "LISTEN. 46:13"
    },
    {
        key: 4,
        date: "MARCH 6,2023",
        episode: "Section 1 | Episode 6",
        title: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        details: "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature form 45 BC, making it over 2000 year old. Richard McClintook, a Latin professor at Humpden-Sydeny College in Virgina, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and doing through the cites of the world in classical literature, discovered the undoubtable sourece.",
        videoTime: "LISTEN. 46:13"
    },
    {
        key: 5,
        date: "MARCH 6,2023",
        episode: "Section 1 | Episode 6",
        title: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        videoTime: "LISTEN. 46:13"
    },

]