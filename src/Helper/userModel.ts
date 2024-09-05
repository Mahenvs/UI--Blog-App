export type userModel = {
    email: string;
    password: string;
    username?:string;
    // remember:string;
}

export type postModel = {
    id:number;
    createdat?: string;
    title: string;
    description: string;
    userId: string;
    username:string;
    isbookmarked?:boolean;
    isliked?:boolean;

}
