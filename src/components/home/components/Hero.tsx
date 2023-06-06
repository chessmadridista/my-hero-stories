import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface hero {
    id: number;
    name: string;
    bio: string;
    imageUrl: string;
}

function Hero({hero}: {hero: hero}): JSX.Element {
    return (
        <>
            <Link to='/stories'>
                <Card key={hero.id}>
                    <CardHeader title={hero.name} />
                    <CardMedia 
                        component='img'
                        alt={hero.name}
                        height='200'
                        image={hero.imageUrl}
                    />
                    <CardContent>
                        { hero.bio }
                    </CardContent>
                </Card>
            </Link>
        </>
    );
}

export default Hero;