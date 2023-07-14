import './Previous.css';
import { Sidebar } from ".";
import React from "react";
import { format } from 'date-fns';

function Previous() {
    const entry = {
        "_id": "64b0354fd00515b807675c86",
        "user": "64adc8ad39f98ca9bb40681d",
        "person": "64af5c82c45ce5b8a89ce2dc",
        "mood": 2,
        "creation_date": "2023-07-13T17:33:03.687000",
        "statements": [
            [
                "2023-07-13T00:00:00",
                "With the ongoing battles against Voldemort and the looming darkness, I understood the need to anchor myself in the present moment."
            ],
            [
                "2023-07-13T00:00:01",
                "Today, I immersed myself in the practice of mindfulness meditation."
            ],
            [
                "2023-07-13T00:00:02",
                "Finding a quiet corner in the library, I settled into a comfortable position and focused on my breath."
            ],
            [
                "2023-07-13T00:00:02",
                "With each inhale and exhale, I directed my attention to the sensations in my body, observing thoughts as they drifted by without judgment."
            ],
            [
                "2023-07-13T00:00:03",
                "This simple act of being fully present grounded me in the here and now, allowing me to cultivate a sense of inner peace and resilience."
            ],
            [
                "2023-07-13T00:00:04",
                "In the midst of chaos, mindfulness meditation became my refuge, nurturing my mental clarity and empowering me to face the challenges ahead."
            ]
        ],
        "reflection": "You understand the need to anchor yourself in the present moment with the ongoing battles against Voldemort and the looming darkness. Today, you immerse yourself in the practice of mindfulness meditation. You find a quiet corner in the library and settle into a comfortable position. You focus on your breath and with each inhale and exhale, you direct your attention to the sensations in your body. You observe thoughts as they drift by without judgment. This simple act of being fully present grounds you in the here"
    }
    const responseDictionary = {
        1: "That’s so unfortunate, what happened?",
        2: "Oh no, what happened?",
        3: "Okay. What happened?",
        4: "That’s good to hear. What happened??",
        5: "That’s wonderful! What happened??",
    };

    return (
        <div className="app">
            <Sidebar />
            <section className="main">
                <div className="chat-container bg-[#1A1A1A] h-[42rem] mt-16 rounded-3xl w-[52rem] pr-5 p-5 flex justify-end flex-col">
                    <div
                        id="chtbox"
                        className="chat chat-end flex flex-col gap-2 overflow-y-auto"

                    ><div>
                            {format(new Date(entry.creation_date), 'EEEE, MMMM d, yyyy')}
                        </div>
                        <div>
                            How are you feeling today?
                        </div>
                        <div>
                            **Smiley Faces here w/ {entry.mood} selected**
                        </div>
                        <div>
                            Who would like to talk about?
                        </div>
                        <div>
                            ** Bubbles of People **
                        </div>
                        <div>
                            {responseDictionary[entry.mood]}
                        </div>

                        {entry["statements"].map((statement, i) => (
                            <div
                                key={`${entry._id}-statement-${i}`}
                            >
                                <div
                                    className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                                    key={`${entry._id}-statement.sentence-${i}`}
                                >
                                    {statement[1]}
                                </div>
                                <div
                                    key={`${entry._id}-statement.time-${i}`}
                                >
                                    {format(new Date(statement[0]), 'h:mm a')}
                                </div>
                            </div>
                        ))}

                        <div>
                            <div>Summary</div>
                            <div>{format(new Date(entry.creation_date), 'EEEE, MMMM d, yyyy')}</div>
                            {entry.reflection}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Previous