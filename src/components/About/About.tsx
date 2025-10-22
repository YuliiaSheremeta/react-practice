interface AboutProps{
    name: string;
    table: number;
};

export default function About({name,table}:AboutProps) {
    return (
        <div>
            <h1>Welcome {name} to our restaurant!</h1>
            <p>Your table is {table}</p>
        </div>
    )
};