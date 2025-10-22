interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "password">

const updateUser = (updatedProps: UpdateProps) => {
    // hitting the database to the update the user information
}