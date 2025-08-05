import images from "./images"

export const dmCategory = [
    {
        id: 1,
        type: 'Primary'
    },
    {
        id: 2,
        type: 'Group'
    },
    {
        id: 3,
        type: 'Request'
    },
    {
        id: 4,
        type: 'Discover'
    }
]

export const discoverMenu = [
    {
        id: 1,
        name: 'For You',
        to: 'forYou'
    },
    {
        id: 2,
        name: 'Threads',
        to: 'threads'
    },
    {
        id: 3,
        name: 'People',
    },
    {
        id: 4,
        name: 'Events',
    },
    {
        id: 5,
        name: 'Posts',
    },
    {
        id: 6,
        name: 'Items',
    }
]

export const post = [
    {
        id: 1,
        description: 'Today is a nice day',
        createdAt: '1 min ago',
        likes: 12,
        comments: 7,
        shared: 2,
        post: images.post.post1,
        user: Users[0],
        comment: [
            {
                id: 1,
                user: Users[1],
                text: 'Great post!',
                subComment: [
                    { id: 1, user: Users[2], text: 'Absolutely!' }
                ]
            },
            {
                id: 2,
                user: Users[2],
                text: 'I totally agree.',
                subComment: []
            },
            {
                id: 3,
                user: Users[3],
                text: 'Thanks for sharing.',
                subComment: [
                    { id: 1, user: Users[4], text: 'Exactly my thought.' }
                ]
            },
            {
                id: 4,
                user: Users[4],
                text: 'Interesting perspective.',
                subComment: []
            },
            {
                id: 5,
                user: Users[5],
                text: 'Love this!',
                subComment: [
                    { id: 1, user: Users[6], text: 'Thanks!' }
                ]
            },
            {
                id: 6,
                user: Users[6],
                text: 'So true.',
                subComment: []
            },
            {
                id: 7,
                user: Users[7],
                text: 'Well said.',
                subComment: [
                    { id: 1, user: Users[8], text: 'Haha, yes!' }
                ]
            }
        ]
    },
    {
        id: 2,
        description: 'Just finished a great book! 📚',
        createdAt: '5 mins ago',
        likes: 34,
        comments: 10,
        shared: 1,
        post: images.post.post2,
        user: Users[1],
        comment: [
            { id: 1, user: Users[0], text: 'Nice one!', subComment: [] },
            { id: 2, user: Users[2], text: 'Awesome!', subComment: [{ id: 1, user: Users[3], text: 'Right on!' }] },
            { id: 3, user: Users[3], text: 'Very insightful.', subComment: [] },
            { id: 4, user: Users[4], text: 'Good point.', subComment: [] },
            { id: 5, user: Users[5], text: 'Haha, nice!', subComment: [] },
            { id: 6, user: Users[6], text: 'Brilliant!', subComment: [] },
            { id: 7, user: Users[7], text: 'Couldnt agree more.', subComment: [] },
            { id: 8, user: Users[8], text: 'This made my day.', subComment: [] },
            { id: 9, user: Users[9], text: 'So true.', subComment: [] },
            { id: 10, user: Users[10], text: 'Great post!', subComment: [] }
        ]
    },
    {
        id: 3,
        description: 'Exploring the city with friends. Loving the vibes! 🌆',
        createdAt: '12 mins ago',
        likes: 56,
        comments: 4,
        shared: 4,
        post: images.post.post3,
        user: Users[2],
        comment: [
            { id: 1, user: Users[1], text: 'Looks fun!', subComment: [] },
            { id: 2, user: Users[3], text: 'Wish I was there!', subComment: [{ id: 1, user: Users[4], text: 'Me too!' }] },
            { id: 3, user: Users[5], text: 'Great vibes!', subComment: [] },
            { id: 4, user: Users[6], text: 'Awesome!', subComment: [] }
        ]
    },
    {
        id: 4,
        description: 'Homemade pasta for dinner tonight 🍝',
        createdAt: '30 mins ago',
        likes: 22,
        comments: 12,
        shared: 0,
        post: images.post.post4,
        user: Users[3],
        comment: [
            { id: 1, user: Users[2], text: 'Yum!', subComment: [] },
            { id: 2, user: Users[4], text: 'Recipe please!', subComment: [{ id: 1, user: Users[5], text: 'Yes, please share!' }] },
            { id: 3, user: Users[6], text: 'Looks delicious.', subComment: [] },
            { id: 4, user: Users[7], text: 'I want some!', subComment: [] },
            { id: 5, user: Users[8], text: 'So tasty!', subComment: [] },
            { id: 6, user: Users[9], text: 'Nice!', subComment: [] },
            { id: 7, user: Users[10], text: 'Great job!', subComment: [] },
            { id: 8, user: Users[11], text: 'Wow!', subComment: [] },
            { id: 9, user: Users[12], text: 'Amazing!', subComment: [] },
            { id: 10, user: Users[13], text: 'Love it!', subComment: [] },
            { id: 11, user: Users[14], text: 'So good!', subComment: [] },
            { id: 12, user: Users[0], text: 'Delicious!', subComment: [] }
        ]
    },
    {
        id: 5,
        description: 'Sunsets always make me feel grateful. 🌅',
        createdAt: '1 hour ago',
        likes: 41,
        comments: 8,
        shared: 3,
        post: images.post.post5,
        user: Users[4],
        comment: [
            { id: 1, user: Users[3], text: 'Beautiful!', subComment: [] },
            { id: 2, user: Users[5], text: 'Stunning view.', subComment: [] },
            { id: 3, user: Users[6], text: 'So peaceful.', subComment: [] },
            { id: 4, user: Users[7], text: 'Love sunsets.', subComment: [] },
            { id: 5, user: Users[8], text: 'Great shot!', subComment: [] },
            { id: 6, user: Users[9], text: 'Amazing colors.', subComment: [] },
            { id: 7, user: Users[10], text: 'Wow!', subComment: [] },
            { id: 8, user: Users[11], text: 'Perfect!', subComment: [] }
        ]
    },
    {
        id: 6,
        description: 'Just got a new bike! Cant wait to ride around town 🚴‍♂️',
        createdAt: '2 hours ago',
        likes: 29,
        comments: 3,
        shared: 2,
        post: images.post.post6,
        user: Users[5],
        comment: [
            { id: 1, user: Users[4], text: 'Congrats!', subComment: [] },
            { id: 2, user: Users[6], text: 'Enjoy the ride!', subComment: [] },
            { id: 3, user: Users[7], text: 'Be safe!', subComment: [] }
        ]
    },
    {
        id: 7,
        description: 'Baked some cookies today and they turned out amazing! 🍪',
        createdAt: '3 hours ago',
        likes: 17,
        comments: 6,
        shared: 1,
        post: images.post.post2,
        user: Users[6],
        comment: [
            { id: 1, user: Users[5], text: 'Yummy!', subComment: [] },
            { id: 2, user: Users[7], text: 'Save me some!', subComment: [] },
            { id: 3, user: Users[8], text: 'Looks delicious.', subComment: [] },
            { id: 4, user: Users[9], text: 'Great job!', subComment: [] },
            { id: 5, user: Users[10], text: 'So good!', subComment: [] },
            { id: 6, user: Users[11], text: 'Nice bake!', subComment: [] }
        ]
    }
]

export const threads = [
    {
        id: 1,
        thread: 'Today is a nice day. I went for a walk in the park and met some old friends. It felt really good to catch up and enjoy the fresh air after a long week indoors.',
        createdAt: '1 min ago',
        likes: 12,
        comments: 9,
        shared: 2,
        post: images.post.post1,
        user: Users[0],
        comment: [
            { id: 1, user: Users[1], text: 'Sounds wonderful!', subComment: [] },
            { id: 2, user: Users[2], text: 'Glad you had fun!', subComment: [] },
            { id: 3, user: Users[3], text: 'Nice day indeed.', subComment: [] },
            { id: 4, user: Users[4], text: 'Great to hear!', subComment: [] },
            { id: 5, user: Users[5], text: 'Awesome!', subComment: [] },
            { id: 6, user: Users[6], text: 'Love this!', subComment: [] },
            { id: 7, user: Users[7], text: 'So true.', subComment: [] },
            { id: 8, user: Users[8], text: 'Enjoy!', subComment: [] },
            { id: 9, user: Users[9], text: 'Good for you!', subComment: [] }
        ]
    },
    {
        id: 2,
        thread: 'Just finished reading an amazing book about self-growth. It made me reflect on my goals and how I want to spend my time this year. Anyone else into personal development books?',
        createdAt: '3 mins ago',
        likes: 8,
        comments: 2,
        shared: 0,
        user: Users[1],
        comment: [
            { id: 1, user: Users[0], text: 'I love those books!', subComment: [] },
            { id: 2, user: Users[2], text: 'Any recommendations?', subComment: [] }
        ]
    },
    {
        id: 3,
        thread: 'Had a rough day at work but coming home to my dog always cheers me up. Pets really do make life better. Heres a pic of Max being silly!',
        createdAt: '7 mins ago',
        likes: 15,
        comments: 11,
        shared: 1,
        post: images.post.post2,
        user: Users[2],
        comment: [
            { id: 1, user: Users[1], text: 'Pets are the best!', subComment: [] },
            { id: 2, user: Users[3], text: 'So cute!', subComment: [] },
            { id: 3, user: Users[4], text: 'Adorable!', subComment: [] },
            { id: 4, user: Users[5], text: 'Love dogs!', subComment: [] },
            { id: 5, user: Users[6], text: 'Max is awesome!', subComment: [] },
            { id: 6, user: Users[7], text: 'Great pic!', subComment: [] },
            { id: 7, user: Users[8], text: 'Made me smile!', subComment: [] },
            { id: 8, user: Users[9], text: 'So sweet!', subComment: [] },
            { id: 9, user: Users[10], text: 'Dogs are family.', subComment: [] },
            { id: 10, user: Users[11], text: 'Love this!', subComment: [] },
            { id: 11, user: Users[12], text: 'So true!', subComment: [] }
        ]
    },
    {
        id: 4,
        thread: 'Cooked dinner for my family tonight and tried a new pasta recipe. It was a hit! Cooking is such a relaxing way to end the day. Whats your go-to comfort food?',
        createdAt: '10 mins ago',
        likes: 11,
        comments: 5,
        shared: 0,
        user: Users[3],
        comment: [
            { id: 1, user: Users[2], text: 'Pasta is the best!', subComment: [] },
            { id: 2, user: Users[4], text: 'I love cooking too!', subComment: [] },
            { id: 3, user: Users[5], text: 'What recipe did you use?', subComment: [] },
            { id: 4, user: Users[6], text: 'Sounds delicious!', subComment: [] },
            { id: 5, user: Users[7], text: 'Family dinners are great.', subComment: [] }
        ]
    },
    {
        id: 5,
        thread: 'Watched the sunset from my balcony and it reminded me to slow down and appreciate the little things. Life moves so fast sometimes.',
        createdAt: '15 mins ago',
        likes: 19,
        comments: 13,
        shared: 2,
        post: images.post.post3,
        user: Users[4],
        comment: [
            { id: 1, user: Users[3], text: 'Beautiful view!', subComment: [] },
            { id: 2, user: Users[5], text: 'Sunsets are magical.', subComment: [] },
            { id: 3, user: Users[6], text: 'Great reminder.', subComment: [] },
            { id: 4, user: Users[7], text: 'Love sunsets.', subComment: [] },
            { id: 5, user: Users[8], text: 'So peaceful.', subComment: [] },
            { id: 6, user: Users[9], text: 'Amazing!', subComment: [] },
            { id: 7, user: Users[10], text: 'Perfect moment.', subComment: [] },
            { id: 8, user: Users[11], text: 'Great shot!', subComment: [] },
            { id: 9, user: Users[12], text: 'Wonderful!', subComment: [] },
            { id: 10, user: Users[13], text: 'Love this!', subComment: [] },
            { id: 11, user: Users[14], text: 'So nice!', subComment: [] },
            { id: 12, user: Users[0], text: 'Thanks for sharing!', subComment: [] },
            { id: 13, user: Users[1], text: 'Beautiful!', subComment: [] }
        ]
    },
    {
        id: 6,
        thread: 'Started learning how to play the guitar this week. My fingers hurt but Im loving the challenge! Any tips for beginners?',
        createdAt: '20 mins ago',
        likes: 7,
        comments: 1,
        shared: 0,
        user: Users[5],
        comment: [
            { id: 1, user: Users[4], text: 'Keep practicing!', subComment: [] }
        ]
    },
    {
        id: 7,
        thread: 'Spent the afternoon baking cookies with my little sister. The kitchen is a mess but our hearts are full. Family time is the best time.',
        createdAt: '25 mins ago',
        likes: 13,
        comments: 7,
        shared: 1,
        post: images.post.post4,
        user: Users[6],
        comment: [
            { id: 1, user: Users[5], text: 'Sounds fun!', subComment: [] },
            { id: 2, user: Users[7], text: 'Family time is the best.', subComment: [] },
            { id: 3, user: Users[8], text: 'Great memories!', subComment: [] },
            { id: 4, user: Users[9], text: 'Love this!', subComment: [] },
            { id: 5, user: Users[10], text: 'So sweet!', subComment: [] },
            { id: 6, user: Users[11], text: 'Awesome!', subComment: [] },
            { id: 7, user: Users[12], text: 'Yummy cookies!', subComment: [] }
        ]
    },
    {
        id: 8,
        thread: 'Went for a morning run and the weather was perfect. Trying to stay consistent with my fitness goals this year. Anyone want to join a virtual running group?',
        createdAt: '30 mins ago',
        likes: 10,
        comments: 4,
        shared: 0,
        user: Users[11],
        comment: [
            { id: 1, user: Users[10], text: 'Im in!', subComment: [] },
            { id: 2, user: Users[12], text: 'Great idea!', subComment: [] },
            { id: 3, user: Users[13], text: 'Lets do it!', subComment: [] },
            { id: 4, user: Users[14], text: 'Count me in!', subComment: [] }
        ]
    },
    {
        id: 9,
        thread: 'Had a movie marathon with friends last night. We watched all the classics and laughed until we cried. Highly recommend a movie night for anyone needing a pick-me-up!',
        createdAt: '35 mins ago',
        likes: 16,
        comments: 8,
        shared: 2,
        post: images.post.post5,
        user: Users[12],
        comment: [
            { id: 1, user: Users[11], text: 'Sounds awesome!', subComment: [] },
            { id: 2, user: Users[13], text: 'Movie nights are the best.', subComment: [] },
            { id: 3, user: Users[14], text: 'What did you watch?', subComment: [] },
            { id: 4, user: Users[0], text: 'Invite me next time!', subComment: [] },
            { id: 5, user: Users[1], text: 'So much fun!', subComment: [] },
            { id: 6, user: Users[2], text: 'Love it!', subComment: [] },
            { id: 7, user: Users[3], text: 'Great idea!', subComment: [] },
            { id: 8, user: Users[4], text: 'I need this!', subComment: [] }
        ]
    },
    {
        id: 10,
        thread: 'Tried meditating for the first time today. It was harder than I thought but I felt so much calmer afterwards. Meditation tips welcome!',
        createdAt: '40 mins ago',
        likes: 6,
        comments: 3,
        shared: 0,
        user: Users[13],
        comment: [
            { id: 1, user: Users[12], text: 'Keep practicing!', subComment: [] },
            { id: 2, user: Users[14], text: 'Try guided meditation.', subComment: [] },
            { id: 3, user: Users[0], text: 'Youll get better!', subComment: [] }
        ]
    },
    {
        id: 11,
        thread: 'My garden is finally blooming! Spent the weekend planting new flowers and its so rewarding to see them grow. Gardening is my therapy.',
        createdAt: '45 mins ago',
        likes: 14,
        comments: 6,
        shared: 1,
        post: images.post.post6,
        user: Users[14],
        comment: [
            { id: 1, user: Users[13], text: 'Congrats!', subComment: [] },
            { id: 2, user: Users[0], text: 'Beautiful flowers!', subComment: [] },
            { id: 3, user: Users[1], text: 'So rewarding!', subComment: [] },
            { id: 4, user: Users[2], text: 'Love gardening!', subComment: [] },
            { id: 5, user: Users[3], text: 'Great job!', subComment: [] },
            { id: 6, user: Users[4], text: 'Keep it up!', subComment: [] }
        ]
    },
    {
        id: 12,
        thread: 'Had a spontaneous road trip with friends. We got lost but found the best little diner along the way. Sometimes the best memories are unplanned.',
        createdAt: '50 mins ago',
        likes: 18,
        comments: 12,
        shared: 3,
        user: Users[7],
        comment: [
            { id: 1, user: Users[6], text: 'Sounds fun!', subComment: [] },
            { id: 2, user: Users[8], text: 'Love road trips!', subComment: [] },
            { id: 3, user: Users[9], text: 'Best memories!', subComment: [] },
            { id: 4, user: Users[10], text: 'Great story!', subComment: [] },
            { id: 5, user: Users[11], text: 'So true!', subComment: [] },
            { id: 6, user: Users[12], text: 'Unplanned is best!', subComment: [] },
            { id: 7, user: Users[13], text: 'Awesome!', subComment: [] },
            { id: 8, user: Users[14], text: 'Love this!', subComment: [] },
            { id: 9, user: Users[0], text: 'Great adventure!', subComment: [] },
            { id: 10, user: Users[1], text: 'Sounds amazing!', subComment: [] },
            { id: 11, user: Users[2], text: 'So cool!', subComment: [] },
            { id: 12, user: Users[3], text: 'Nice!', subComment: [] }
        ]
    },
    {
        id: 13,
        thread: 'Started a new painting today. Art helps me express what words cant. Would love to see what others are creating!',
        createdAt: '55 mins ago',
        likes: 9,
        comments: 2,
        shared: 0,
        user: Users[8],
        comment: [
            { id: 1, user: Users[7], text: 'Art is life!', subComment: [] },
            { id: 2, user: Users[9], text: 'Share your work!', subComment: [] }
        ]
    },
    {
        id: 14,
        thread: 'Re-reading the Harry Potter series and it never gets old. Theres something magical about diving back into that world.',
        createdAt: '1 hour ago',
        likes: 21,
        comments: 15,
        shared: 2,
        post: images.post.post1,
        user: Users[9],
        comment: [
            { id: 1, user: Users[8], text: 'Love Harry Potter!', subComment: [] },
            { id: 2, user: Users[10], text: 'Never gets old.', subComment: [] },
            { id: 3, user: Users[11], text: 'So magical!', subComment: [] },
            { id: 4, user: Users[12], text: 'Great series!', subComment: [] },
            { id: 5, user: Users[13], text: 'My favorite!', subComment: [] },
            { id: 6, user: Users[14], text: 'I agree!', subComment: [] },
            { id: 7, user: Users[0], text: 'Best books ever!', subComment: [] },
            { id: 8, user: Users[1], text: 'So true!', subComment: [] },
            { id: 9, user: Users[2], text: 'Love it!', subComment: [] },
            { id: 10, user: Users[3], text: 'Great read!', subComment: [] },
            { id: 11, user: Users[4], text: 'Classic!', subComment: [] },
            { id: 12, user: Users[5], text: 'Amazing!', subComment: [] },
            { id: 13, user: Users[6], text: 'So good!', subComment: [] },
            { id: 14, user: Users[7], text: 'Cant get enough!', subComment: [] },
            { id: 15, user: Users[8], text: 'Love this series!', subComment: [] }
        ]
    },
    {
        id: 15,
        thread: 'Had a long chat with my grandma today. She shared stories from her childhood and I feel so grateful for her wisdom and love.',
        createdAt: '1 hour 10 mins ago',
        likes: 20,
        comments: 5,
        shared: 1,
        user: Users[10],
        comment: [
            { id: 1, user: Users[9], text: 'Grandmas are the best!', subComment: [] },
            { id: 2, user: Users[11], text: 'Cherish those moments.', subComment: [] },
            { id: 3, user: Users[12], text: 'So sweet!', subComment: [] },
            { id: 4, user: Users[13], text: 'Lovely!', subComment: [] },
            { id: 5, user: Users[14], text: 'Great memories!', subComment: [] }
        ]
    }
]

export const shareToUser = [
    {
        id: 1,
        userName: 'angeldavid',
        profilePic: images.profile.profile1 ,

    },
    {
        id: 2,
        userName: 'janedoe',
        profilePic: images.profile.profile2,
    },
    {
        id: 3,
        userName: 'michael99',
        profilePic: images.profilePicTest,
    },
    {
        id: 4,
        userName: 'sarah_lee',
        profilePic: images.profile.profile1,
    },
    {
        id: 5,
        userName: 'theodore',
        profilePic: images.profile.profile2,
    },
    {
        id: 6,
        userName: 'lucas_w',
        profilePic: images.profile.profile1,
    },
    {
        id: 7,
        userName: 'emilyrose',
        profilePic: images.profile.profile2,
    }
]

export const shopFilters = [
    {
        id:1,
        title: 'Featured'
    }
]

export const Users = [
    {
        id: 1,
        userName: 'angeldavid',
        profilePic: images.profile.profile1,
        firstName: 'Angel',
        lastName: 'David',
        lvl: '200 lvl',
        programme: 'Computer Science',
        department: 'College of Science',
        brands: [{ id: 1, name: 'Nike' }]
    },
    {
        id: 2,
        userName: 'janedoe',
        profilePic: images.profile.profile2,
        firstName: 'Jane',
        lastName: 'Doe',
        lvl: '400 lvl',
        programme: 'Business Admin',
        department: 'College of Business',
        brands: [{ id: 2, name: 'Adidas' }]
    },
    {
        id: 3,
        userName: 'michael99',
        profilePic: images.profilePicTest,
        firstName: 'Michael',
        lastName: 'Smith',
        lvl: '300 lvl',
        programme: 'Mechanical Eng',
        department: 'College of Engineering',
        brands: [{ id: 3, name: 'Puma' }]
    },
    {
        id: 4,
        userName: 'sarah_lee',
        profilePic: images.profile.profile1,
        firstName: 'Sarah',
        lastName: 'Lee',
        lvl: '200 lvl',
        programme: 'Architecture',
        department: 'College of Architecture',
        brands: [{ id: 4, name: 'Reebok' }]
    },
    {
        id: 5,
        userName: 'theodore',
        profilePic: images.profile.profile2,
        firstName: 'Theodore',
        lastName: 'Brown',
        lvl: '500 lvl',
        programme: 'Electrical Eng',
        department: 'College of Engineering',
        brands: [{ id: 5, name: 'Under Armour' }]
    },
    {
        id: 6,
        userName: 'lucas_w',
        profilePic: images.profile.profile1,
        firstName: 'Lucas',
        lastName: 'Williams',
        lvl: '200 lvl',
        programme: 'Physics',
        department: 'College of Science',
        brands: [{ id: 6, name: 'Fila' }]
    },
    {
        id: 7,
        userName: 'emilyrose',
        profilePic: images.profile.profile2,
        firstName: 'Emily',
        lastName: 'Rose',
        lvl: '100 lvl',
        programme: 'Fine Arts',
        department: 'College of Arts',
        brands: [{ id: 7, name: 'New Balance' }]
    },
    {
        id: 8,
        userName: 'benji',
        profilePic: images.profilePicTest,
        firstName: 'Ben',
        lastName: 'Johnson',
        lvl: '300 lvl',
        programme: 'Mathematics',
        department: 'College of Science',
        brands: [{ id: 8, name: 'Converse' }]
    },
    {
        id: 9,
        userName: 'zoe_m',
        profilePic: images.profile.profile2,
        firstName: 'Zoe',
        lastName: 'Miller',
        lvl: '200 lvl',
        programme: 'Psychology',
        department: 'College of Social Sciences',
        brands: [{ id: 9, name: 'Vans' }]
    },
    {
        id: 10,
        userName: 'harrypotterfan',
        profilePic: images.profile.profile1,
        firstName: 'Harry',
        lastName: 'Potter',
        lvl: '100 lvl',
        programme: 'Literature',
        department: 'College of Arts',
        brands: [{ id: 10, name: 'Asics' }]
    },
    {
        id: 11,
        userName: 'clairebear',
        profilePic: images.profile.profile2,
        firstName: 'Claire',
        lastName: 'Bear',
        lvl: '200 lvl',
        programme: 'Biology',
        department: 'College of Science',
        brands: [{ id: 11, name: 'Saucony' }, { id: 12, name: 'Brooks' }]
    },
    {
        id: 12,
        userName: 'david_k',
        profilePic: images.profilePicTest,
        firstName: 'David',
        lastName: 'Kim',
        lvl: '300 lvl',
        programme: 'Chemistry',
        department: 'College of Science',
        brands: [{ id: 13, name: 'Hoka' }]
    },
    {
        id: 13,
        userName: 'nina23',
        profilePic: images.profile.profile1,
        firstName: 'Nina',
        lastName: 'Williams',
        lvl: '400 lvl',
        programme: 'Economics',
        department: 'College of Business',
        brands: [{ id: 14, name: 'Mizuno' }]
    },
    {
        id: 14,
        userName: 'samuelg',
        profilePic: images.profile.profile2,
        firstName: 'Samuel',
        lastName: 'Green',
        lvl: '200 lvl',
        programme: 'Political Science',
        department: 'College of Social Sciences',
        brands: [{ id: 15, name: 'Jordan' }]
    },
    {
        id: 15,
        userName: 'olivia_p',
        profilePic: images.profile.profile1,
        firstName: 'Olivia',
        lastName: 'Parker',
        lvl: '100 lvl',
        programme: 'Philosophy',
        department: 'College of Arts',
        brands: [{ id: 16, name: 'Timberland' }]
    }
];

export const Brands = [
    { id: 1, name: 'Nike', user: Users[0] },
    { id: 2, name: 'Adidas', user: Users[1] },
    { id: 3, name: 'Puma', user: Users[2] },
    { id: 4, name: 'Reebok', user: Users[3] },
    { id: 5, name: 'Under Armour', user: Users[4] },
    { id: 6, name: 'Fila', user: Users[5] },
    { id: 7, name: 'New Balance', user: Users[6] },
    { id: 8, name: 'Converse', user: Users[7] },
    { id: 9, name: 'Vans', user: Users[8] },
    { id: 10, name: 'Asics', user: Users[9] },
    { id: 11, name: 'Saucony', user: Users[10] },
    { id: 12, name: 'Brooks', user: Users[10] },
    { id: 13, name: 'Hoka', user: Users[11] },
    { id: 14, name: 'Mizuno', user: Users[12] },
    { id: 15, name: 'Jordan', user: Users[13] },
    { id: 16, name: 'Timberland', user: Users[14] }
];

export const products = [
    {
        id: 1,
        productsImage: [
            { id: 1, image: images.product.product1 }
        ],
        title: "Introduction to Algorithms",
        description: "Textbook for computer science students.",
        price: 45.99,
        currency: "USD",
        stock: 20,
        created_at: "2023-07-01T12:00:00Z",
        updated_at: "2023-07-01T12:00:00Z",
        brand: Brands[0],
        slashPrice: 56.99,
        likes: 5,
        dislikes: 1,
        comment: [
            { id: 1, user: Users[2], text: 'Essential for CS students!' },
            { id: 2, user: Users[4], text: 'Very detailed explanations.' }
        ],
        sold: 5,
        category: productCategory[0].name,
        subCategories: productCategory[0].subCategories[0].name,
        subSubCategories: undefined
    },
    {
        id: 2,
        productsImage: [
            { id: 1, image: images.product.product2 }
        ],
        title: "Apple MacBook Pro",
        description: "High-performance laptop for students.",
        price: 1499.99,
        currency: "USD",
        stock: 10,
        created_at: "2023-07-02T12:00:00Z",
        updated_at: "2023-07-02T12:00:00Z",
        brand: Brands[5],
        slashPrice: 1599.99,
        likes: 12,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[1], text: 'Perfect for my design work.' },
            { id: 2, user: Users[3], text: 'Battery life is amazing.' }
        ],
        sold: 3,
        category: productCategory[1].name,
        subCategories: productCategory[1].subCategories[0].name,
        subSubCategories: productCategory[1].subCategories[0].subSubCategories[2].name
    },
    {
        id: 3,
        productsImage: [
            { id: 1, image: images.product.product3 }
        ],
        title: "Nike Air Jordan 1",
        description: "Popular sneakers for basketball enthusiasts.",
        price: 129.99,
        currency: "USD",
        stock: 15,
        created_at: "2023-07-03T12:00:00Z",
        updated_at: "2023-07-03T12:00:00Z",
        brand: Brands[14],
        slashPrice: 149.99,
        likes: 20,
        dislikes: 2,
        comment: [
            { id: 1, user: Users[5], text: 'Stylish and comfortable.' }
        ],
        sold: 7,
        category: productCategory[2].name,
        subCategories: productCategory[2].subCategories[2].name,
        subSubCategories: undefined
    },
    {
        id: 4,
        productsImage: [
            { id: 1, image: images.product.product4 }
        ],
        title: "Moleskine Classic Notebook",
        description: "Premium quality notebook for writing and sketching.",
        price: 19.99,
        currency: "USD",
        stock: 30,
        created_at: "2023-07-04T12:00:00Z",
        updated_at: "2023-07-04T12:00:00Z",
        brand: Brands[7],
        slashPrice: 24.99,
        likes: 8,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[6], text: 'Love the paper quality.' }
        ],
        sold: 10,
        category: productCategory[3].name,
        subCategories: productCategory[3].subCategories[0].name,
        subSubCategories: productCategory[3].subCategories[0].subSubCategories[0].name
    },
    {
        id: 5,
        productsImage: [
            { id: 1, image: images.product.product5 }
        ],
        title: "Samsung 65-inch QLED TV",
        description: "Ultra HD smart TV with Quantum Dot technology.",
        price: 1999.99,
        currency: "USD",
        stock: 5,
        created_at: "2023-07-05T12:00:00Z",
        updated_at: "2023-07-05T12:00:00Z",
        brand: Brands[5],
        slashPrice: 2199.99,
        likes: 15,
        dislikes: 1,
        comment: [
            { id: 1, user: Users[7], text: 'Picture quality is top-notch.' }
        ],
        sold: 2,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 6,
        productsImage: [
            { id: 1, image: images.product.product6 }
        ],
        title: "Under Armour Men's Tech 2.0 T-Shirt",
        description: "Quick-drying and ultra-soft athletic shirt.",
        price: 29.99,
        currency: "USD",
        stock: 25,
        created_at: "2023-07-06T12:00:00Z",
        updated_at: "2023-07-06T12:00:00Z",
        brand: Brands[4],
        slashPrice: 34.99,
        likes: 10,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[8], text: 'Great for workouts.' }
        ],
        sold: 6,
        category: productCategory[2].name,
        subCategories: productCategory[2].subCategories[0].name,
        subSubCategories: productCategory[2].subCategories[0].subSubCategories[0].name
    },
    {
        id: 7,
        productsImage: [
            { id: 1, image: images.product.product7 }
        ],
        title: "Canon EOS 90D DSLR Camera",
        description: "High-resolution camera with advanced autofocus.",
        price: 1299.99,
        currency: "USD",
        stock: 8,
        created_at: "2023-07-07T12:00:00Z",
        updated_at: "2023-07-07T12:00:00Z",
        brand: Brands[5],
        slashPrice: 1399.99,
        likes: 7,
        dislikes: 1,
        comment: [
            { id: 1, user: Users[9], text: 'Perfect for photography.' }
        ],
        sold: 3,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 8,
        productsImage: [
            { id: 1, image: images.product.product8 }
        ],
        title: "HP OfficeJet Pro 9025 All-in-One Printer",
        description: "Wireless printer for home and office use.",
        price: 249.99,
        currency: "USD",
        stock: 12,
        created_at: "2023-07-08T12:00:00Z",
        updated_at: "2023-07-08T12:00:00Z",
        brand: Brands[13],
        slashPrice: 279.99,
        likes: 6,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[10], text: 'Very reliable printer.' }
        ],
        sold: 4,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 9,
        productsImage: [
            { id: 1, image: images.product.product9 }
        ],
        title: "Nike Pro Men's Training Shorts",
        description: "Comfortable and moisture-wicking athletic shorts.",
        price: 39.99,
        currency: "USD",
        stock: 20,
        created_at: "2023-07-09T12:00:00Z",
        updated_at: "2023-07-09T12:00:00Z",
        brand: Brands[0],
        slashPrice: 49.99,
        likes: 9,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[11], text: 'Perfect for the gym.' }
        ],
        sold: 8,
        category: productCategory[2].name,
        subCategories: productCategory[2].subCategories[1].name,
        subSubCategories: undefined
    },
    {
        id: 10,
        productsImage: [
            { id: 1, image: images.product.product10 }
        ],
        title: "Apple AirPods Pro",
        description: "Wireless earbuds with active noise cancellation.",
        price: 249.99,
        currency: "USD",
        stock: 15,
        created_at: "2023-07-10T12:00:00Z",
        updated_at: "2023-07-10T12:00:00Z",
        brand: Brands[5],
        slashPrice: 279.99,
        likes: 13,
        dislikes: 1,
        comment: [
            { id: 1, user: Users[12], text: 'Noise cancellation is great.' }
        ],
        sold: 6,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 11,
        productsImage: [
            { id: 1, image: images.product.product1 }
        ],
        title: "The Hunger Games Trilogy Box Set",
        description: "Complete set of novels by Suzanne Collins.",
        price: 39.99,
        currency: "USD",
        stock: 18,
        created_at: "2023-07-11T12:00:00Z",
        updated_at: "2023-07-11T12:00:00Z",
        brand: Brands[1],
        slashPrice: 49.99,
        likes: 7,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[13], text: 'A must-read series.' }
        ],
        sold: 9,
        category: productCategory[0].name,
        subCategories: productCategory[0].subCategories[1].name,
        subSubCategories: undefined
    },
    {
        id: 12,
        productsImage: [
            { id: 1, image: images.product.product2 }
        ],
        title: "Sony PlayStation 5",
        description: "Next-gen gaming console with SSD storage.",
        price: 499.99,
        currency: "USD",
        stock: 7,
        created_at: "2023-07-12T12:00:00Z",
        updated_at: "2023-07-12T12:00:00Z",
        brand: Brands[5],
        slashPrice: 549.99,
        likes: 15,
        dislikes: 2,
        comment: [
            { id: 1, user: Users[14], text: 'Best console ever!' }
        ],
        sold: 5,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 13,
        productsImage: [
            { id: 1, image: images.product.product3 }
        ],
        title: "Yamaha FG800 Acoustic Guitar",
        description: "Entry-level acoustic guitar with solid spruce top.",
        price: 199.99,
        currency: "USD",
        stock: 10,
        created_at: "2023-07-13T12:00:00Z",
        updated_at: "2023-07-13T12:00:00Z",
        brand: Brands[12],
        slashPrice: 229.99,
        likes: 6,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[0], text: 'Great sound for beginners.' }
        ],
        sold: 4,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 14,
        productsImage: [
            { id: 1, image: images.product.product4 }
        ],
        title: "Casio FX-991EX Scientific Calculator",
        description: "Advanced scientific calculator for students.",
        price: 29.99,
        currency: "USD",
        stock: 25,
        created_at: "2023-07-14T12:00:00Z",
        updated_at: "2023-07-14T12:00:00Z",
        brand: Brands[8],
        slashPrice: 34.99,
        likes: 8,
        dislikes: 0,
        comment: [
            { id: 1, user: Users[1], text: 'Perfect for exams.' }
        ],
        sold: 10,
        category: productCategory[1].name,
        subCategories: undefined,
        subSubCategories: undefined
    },
    {
        id: 15,
        productsImage: [
            { id: 1, image: images.product.product5 }
        ],
        title: "Adidas Ultraboost 21 Running Shoes",
        description: "High-performance running shoes with boost cushioning.",
        price: 179.99,
        currency: "USD",
        stock: 15,
        created_at: "2023-07-15T12:00:00Z",
        updated_at: "2023-07-15T12:00:00Z",
        brand: Brands[1],
        slashPrice: 199.99,
        likes: 11,
        dislikes: 1,
        comment: [
            { id: 1, user: Users[2], text: 'Super comfortable for running.' }
        ],
        sold: 6,
        category: productCategory[2].name,
        subCategories: productCategory[2].subCategories[2].name,
        subSubCategories: undefined
    }
];

export const productCategory = [
    {
        id: 1,
        name: "Textbooks",
        subCategories: [
            { id: 1, name: "Academic" },
            { id: 2, name: "Novels" },
            { id: 3, name: "Reference" }
        ]
    },
    {
        id: 2,
        name: "Electronics",
        subCategories: [
            {
                id: 1,
                name: "Laptops",
                subSubCategories: [
                    { id: 1, name: "Gaming Laptops" },
                    { id: 2, name: "Business Laptops" },
                    { id: 3, name: "Student Laptops" }
                ]
            },
            { id: 2, name: "Smartphones" },
            { id: 3, name: "Accessories" }
        ]
    },
    {
        id: 3,
        name: "Clothing",
        subCategories: [
            {
                id: 1,
                name: "Tops",
                subSubCategories: [
                    { id: 1, name: "T-shirts" },
                    { id: 2, name: "Hoodies" },
                    { id: 3, name: "Shirts" }
                ]
            },
            { id: 2, name: "Bottoms" },
            { id: 3, name: "Shoes" }
        ]
    },
    {
        id: 4,
        name: "Stationery",
        subCategories: [
            {
                id: 1,
                name: "Notebooks",
                subSubCategories: [
                    { id: 1, name: "Spiral Notebooks" },
                    { id: 2, name: "Composition Books" },
                    { id: 3, name: "Sketchbooks" }
                ]
            },
            { id: 2, name: "Pens/Pencils" },
            { id: 3, name: "Art Supplies" }
        ]
    },
    {
        id: 5,
        name: "Sports Equipment",
        subCategories: [
            {
                id: 1,
                name: "Gym Equipment",
                subSubCategories: [
                    { id: 1, name: "Treadmills" },
                    { id: 2, name: "Dumbbells" },
                    { id: 3, name: "Yoga Mats" }
                ]
            },
            { id: 2, name: "Outdoor Gear" },
            { id: 3, name: "Team Sports Gear" }
        ]
    }
];



  