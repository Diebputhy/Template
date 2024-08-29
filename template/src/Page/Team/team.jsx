import React from 'react'
import teamwork from "../../assets/t1.jpg"
import t2 from "../../assets/t2.jpg"
import t3 from "../../assets/t3.jpg"
import t4 from "../../assets/t4.jpg"

function Team() {
    const data = [
        {
            img: teamwork, // Reference the actual image here
            name: "Johnny Walker",
            skill: "Web Designer"
        },
        {
            img: t2,
            name: "Rebecca Flex",
            skill: "Support"
        },
        {
            img: t3,
            name: "Jan Ringo",
            skill: "Boss man"
        },
        {
            img: t4,
            name: "Kai Ringo",
            skill: "Fixer"
        },
    ];

    return (
        <div className='w-full h-[40%] md:h-[450px]' id='team'>
            <h1 className='text-center text-2xl md:text-3xl'>Our Teams</h1>
            <p className='text-center text-lg md:text-xl mt-3'>Meet the team - our office rats:</p>
            <div className='block md:flex justify-center mt-10 lg:space-x-36 md:space-x-5 lg:p-0 md:p-2 p-0'>
                {data.map((member, index) => (
                    <div className='flex flex-col items-center'>
                        <img src={member.img} alt={member.name} className='lg:size-[180px]  md:size[180px] size-[180px] rounded-full object-cover hover:opacity-75 ml-5 lg:ml-0 md:ml-0' />
                        <h2 className='mt-4 text-lg font-semibold ml-5 md:ml-0'>{member.name}</h2>
                        <p className='text-gray-600 ml-5 md:ml-0'>{member.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
