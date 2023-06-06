import { Grid } from "@mui/material";
import Hero from "./components/Hero";

const heroes = [
    {
        id: 0,
        name: 'Cristiano Ronaldo',
        bio: 'A prolific Portuguese footballer known for his exceptional skills and goal-scoring ability. Ronaldo has won numerous awards and accolades throughout his career, solidifying his status as one of the greatest football players of all time.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8V5yq7IKLPM8gTPuk4QvmUexfKx9l9HLet9QAfzc_g&s',
    },
    {
        id: 1,
        name: 'Lionel Messi',
        bio: 'An Argentine professional footballer regarded as one of the best players in the history of the sport. Messi\'s incredible dribbling, vision, and goal-scoring prowess have earned him numerous titles and records, making him a true icon in the world of football.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/163/159/783/soccer-lionel-messi-fc-barcelona-wallpaper-preview.jpg',
    },
    {
        id: 2,
        name: 'Dr. Jordan Peterson',
        bio: 'A Canadian psychologist, professor, and public intellectual known for his thought-provoking insights on psychology, philosophy, and cultural issues. Peterson\'s lectures and writings have garnered widespread attention, sparking debates and inspiring individuals to explore the complexities of human existence.',
        imageUrl: 'https://i.pinimg.com/736x/14/42/24/144224ba01c3d1d8d861dfeb7f4457cd.jpg',
    },
    {
        id: 3,
        name: 'Lebron James',
        bio: 'An American basketball player widely regarded as one of the greatest athletes of his generation. James\' versatility, athleticism, and leadership have earned him numerous NBA championships and MVP titles, making him a revered figure both on and off the court.',
        imageUrl: 'https://content.api.news/v3/images/bin/861762bf375615efdc93340e1cc20905?width=2048',
    },
    {
        id: 4,
        name: 'Kobe Bryant',
        bio: 'A legendary American basketball player who left an indelible mark on the sport. Known for his unmatched work ethic, skill, and competitive spirit, Bryant became an icon during his time with the Los Angeles Lakers, winning multiple championships and inspiring millions of fans around the world.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/858/56/56/kobe-bryant-screensavers-and-backgrounds-wallpaper-preview.jpg',
    },
    {
        id: 5,
        name: 'David Goggins',
        bio: 'An extraordinary endurance athlete, motivational speaker, and former Navy SEAL. Goggins has pushed the boundaries of human performance, completing grueling challenges and inspiring others to embrace discomfort and overcome adversity through mental resilience and unwavering determination.',
        imageUrl: 'https://wallpaperaccess.com/full/6278156.jpg',
    }
];
const heroContainers = heroes.map((hero) => {
    return (
        <>
            <Grid item xs={4}>
                <Hero hero={hero} />
            </Grid>
        </>
    );
});

function Home(): JSX.Element {
    return (
        <>
            <Grid container spacing={2}>
                { heroContainers }
            </Grid>
        </>
    );
}

export default Home;