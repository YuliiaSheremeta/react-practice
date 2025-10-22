import css from './Dish.module.css';
import clsx from 'clsx';

interface Dish{
    id: number,
    name:string,
}

interface DishProps{
    type?: 'success' | 'error';
}

const dishes: Dish[] = [
    { id: 1, name: 'risotto' },
    { id: 2, name: 'pasta' },
    { id: 3, name: 'ravioli' },
    { id: 4, name: 'lasagne' },
    { id: 5, name: 'zuppa' },
        
];

export default function Dish({type}:DishProps) {
    return (
        <>
            <p className={clsx(css.dish, type && css[type])}>Our dishes today: </p>
            <ul>
                {dishes.map((dish) =>
                    (<li key={dish.id}>{dish.name}</li>))}
            </ul>
        </>
    );
}