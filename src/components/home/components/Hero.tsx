import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";

interface hero {
    id: number;
    name: string;
    bio: string;
    imageUrl: string;
}

function Hero({hero}: {hero: hero}): JSX.Element {
    return (
        <>
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
        </>
    );
}

export default Hero;