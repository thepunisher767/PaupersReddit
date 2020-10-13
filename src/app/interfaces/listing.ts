export interface Listing {
    kind: string;
    data: Data;
}

export interface Data {
    children: PostData[];
}

export interface PostData {
    data: Post;
}

export interface Post {
    title: string;
    thumbnail: string;
    permalink: string;
}
