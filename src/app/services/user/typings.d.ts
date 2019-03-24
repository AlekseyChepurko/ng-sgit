interface IUser {
    name?: string;
    login: string;
}

interface IUSerCreds {
    login: string;
    pass: string
}

export {
    IUser,
    IUSerCreds
};
