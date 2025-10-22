interface MenuProps {
    username: string;
    maincorses: string[]; 
}

export default function Menu({ username, maincorses }: MenuProps) {
    return (
        <div>
            <p>Hello {username}!</p>
            {maincorses.length > 0 && (
                <p>We have {maincorses.length} disches today!</p>
            )}
            {maincorses.length >= 5 ? (<button>Order</button>) : (<button>Come back</button>)}
        </div>
    );
}