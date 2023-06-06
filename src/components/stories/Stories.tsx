import { Card, CardContent, CardHeader } from "@mui/material";

interface Comment {
    id: number;
    username: string;
    commentDescription: string;
    noOfLikes: number;
    noOfReplies: number;
    noOfShares: number;
    saveComment: boolean;
}
const comments: Array<Comment> = [
    {
      id: 1,
      username: 'Commenter1',
      commentDescription: 'Great story! I had a similar experience.',
      noOfLikes: 7,
      noOfReplies: 2,
      noOfShares: 1,
      saveComment: false,
    },
    {
      id: 2,
      username: 'Commenter2',
      commentDescription: 'This story resonates with me. Thanks for sharing!',
      noOfLikes: 5,
      noOfReplies: 1,
      noOfShares: 0,
      saveComment: false,
    },
    {
      id: 3,
      username: 'Commenter3',
      commentDescription: 'I completely agree. His teachings have had a profound impact on my life.',
      noOfLikes: 10,
      noOfReplies: 3,
      noOfShares: 2,
      saveComment: false,
    },
];
interface Story {
    id: number;
    username: string;
    title: string;
    description: string;
    noOfLikes: number;
    noOfComments: number;
    noOfShares: number;
    comments: Array<Comment>;
    savePost: boolean;
}
const stories: Array<Story> = [
    {
      id: 1,
      title: 'Responsibility',
      username: 'chess_madridista',
      description: 'He taught me the importance of taking responsibility for my own life.',
      noOfLikes: 15,
      noOfComments: 3,
      noOfShares: 5,
      comments: comments,
      savePost: false,
    },
    {
      id: 2,
      username: 'musical_nostalgician',
      title: 'Purpose',
      description: 'His wisdom helped me find my purpose and set meaningful goals.',
      noOfLikes: 20,
      noOfComments: 2,
      noOfShares: 3,
      comments: comments,
      savePost: false,
    },
    {
      id: 3,
      username: 'heaven_ringer',
      title: 'Relationships and communication skills',
      description: 'Through his lectures, he inspired me to improve my relationships and communication skills.',
      noOfLikes: 10,
      noOfComments: 5,
      noOfShares: 2,
      comments: comments,
      savePost: false,
    },
];
const storyCards = stories.map((story) => {
    return (
        <>
            <Card key={story.id}>
                <CardHeader title={story.title} />
                <CardContent>
                    {story.description}
                </CardContent>
            </Card>
        </>
    );
});

function Stories(): JSX.Element {
    return (
        <>
            {storyCards}
        </>
    );
}

export default Stories;