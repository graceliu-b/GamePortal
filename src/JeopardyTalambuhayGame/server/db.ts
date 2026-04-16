import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 10; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
     {
        points: 100,
        question: 'What is the name of this school?',
        imgSrc:"https://scontent-lga3-3.xx.fbcdn.net/v/t1.6435-9/199088085_10159192680663605_8575987874576465184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vbasX40vd-MQ7kNvwHHAeYO&_nc_oc=AdlJM_tUFM2Tjbu8DcRqnNl23KvvLnvNzyolY5RSaZq9rdCdnTsecLmuRy8qUmKZzwI&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=PkDlDERMGQxqhjJf8qOnfA&oh=00_AfbFRInkFSkT3RjnsyJBRR6hnzmnmn7iCTd_NoI1e2M9ww&oe=68EF7CC7",
        answer: 'Robert Seaman Elementary School',
    },
    {
        points: 200,
         question: 'What city is this dish from?',
        imgSrc: "https://ca-times.brightspotcdn.com/dims4/default/fde5359/2147483647/strip/true/crop/5603x2933+0+0/resize/1200x628!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa2%2Fcd%2Fa105db7c4722a92421d329b5e8fe%2Fpeking-duck-b.JPG",
        answer: 'Beijing',
    },
    {
        points: 300,
         question: 'What is the name of this TV show? (hint: based on a famous novel)',
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/54/Journey_to_the_West_%281986_TV_series%29.jpg",
        answer: 'Journey to the West',//
    },
    {
        points: 400, 
        question: 'What city has the largest collection of Ice Age fossils?',
        imgSrc:"https://www.welikela.com/wp-content/uploads/2023/11/la-brea-tar-pits-museum-interior.jpg",
        answer: 'Los Angeles'
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What instrument is this man playing?',
            imgSrc: 'https://www.yo-yoma.com/wp-content/uploads/2023/03/FullRes_Yo-Yo-Ma_inMaine_tight_%C2%A9Mann.jpg',
            answer: 'Cello',
        },
        {
            points:100,
            question: 'What color is between orange and green?',
            answer: 'Yellow',
        },
        {
            points: 200,
            question:
                'What movie are these characters from?',
            imgSrc: 'https://www.brightwalldarkroom.com/wp-content/uploads/2017/04/graveofthefireflies.jpg',
            answer: 'Grave of the Fireflies',
        },
        {
            points: 200,
            question: 'Which animals have the densest fur?',
            answer: 'Otters',
        },
        {
            points: 300,
            question: 'What is the name of this dessert chain?',
            imgSrc: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/8452727e-f923-4e9d-bcb2-72408b6e8f31.jpg',
            answer: 'Meet fresh',
        },
        {
            points: 400,
            question:
                'When was this album created?',
            imgSrc:"ryuichisakamoto.png",
            answer: '1996',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What type of institution are these people at?',
        imgSrc:
            "https://careered.stanford.edu/sites/g/files/sbiybj22801/files/styles/card_1900x950/public/media/image/career-fair-2_0.jpg.webp?h=c6980913&itok=uI41q5XA",
        answer: 'University',
    },
    {
        points: 400,
        question: "What city/prefecture is this?",
        imgSrc:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Location_of_Anshun_Prefecture_within_Guizhou_%28China%29.png",
        answer: 'Anshun'
    }
]);


const categories = [
    {
        title: "Grace's Past",
        questions: pastQuestions
    },
    {
        title: "Grace's Present",
        questions: presentQuestions
    },
    {
        title: "Grace's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}