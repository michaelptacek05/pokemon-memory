interface CardProps {
    id: number;
    name: string;
    image: string;
    onClick: (id: number) => void;
}

export default function Card({ id, name, image, onClick }: CardProps) {
    return (
        <div 
            className="card"
            onClick={() => onClick(id)}
        >
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}