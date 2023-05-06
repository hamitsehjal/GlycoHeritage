import Image from 'next/image';

const team = [
    {
        name: 'John Doe',
        title: 'Project Manager',
        imageSrc: '/john-doe.jpg',
        description:
            'John is an experienced project manager with a proven track record of delivering successful projects on time and within budget. He has a deep understanding of the Warsauksing First Nations community and is passionate about improving diabetes management through healthy eating habits.',
    },
    {
        name: 'Jane Smith',
        title: 'Solution Architect',
        imageSrc: '/jane-smith.jpg',
        description:
            'Jane is a highly skilled solution architect with expertise in designing scalable and robust systems. She has extensive experience in working with complex data systems and is committed to developing a secure and reliable platform for the GlycoHeritage app.',
    },
    {
        name: 'David Lee',
        title: 'Marketing Officer',
        imageSrc: '/david-lee.jpg',
        description:
            'David is an experienced marketing officer with a passion for building strong brands. He is dedicated to promoting the GlycoHeritage app and raising awareness about the importance of healthy eating habits in the Warsauksing First Nations community.',
    },
];

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
                Meet Our Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {team.map((member) => (
                    <div key={member.name} className="bg-white shadow-md rounded-lg">
                        <div className="relative h-48">
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                {member.name}
                            </h2>
                            <p className="text-gray-700 mb-6">{member.title}</p>
                            <p className="text-gray-700">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
