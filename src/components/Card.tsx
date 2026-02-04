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
            <img src={image} alt={name} style={{opacity:"100%"}} />
            <p style={{opacity:"100%"}}>{name}</p>
        </div>
    );
}