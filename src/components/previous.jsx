import './Previous.css';
import React from "react";
import { format } from 'date-fns';

function Previous({ entryProp, peopleProp }) {
    const entry = entryProp
    const persons = peopleProp?.persons
    const responseDictionary = {
        1: "That’s so unfortunate, what happened?",
        2: "Oh no, what happened?",
        3: "Okay. What happened?",
        4: "That’s good to hear. What happened??",
        5: "That’s wonderful! What happened??",
    };

    return (
            <section className="main">
                <div className="chat-container bg-[#1A1A1A] h-[42rem] mt-16 rounded-3xl w-[52rem] pr-5 p-5 flex justify-end flex-col">
                    <div
                        id="chtbox"
                        className="chat chat-end flex flex-col gap-2 overflow-y-auto"

                    ><div>
                            {format(new Date(entry.creation_date), 'EEEE, MMMM d, yyyy')}
                        </div>
                        <div
                            className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                        >
                            How are you feeling today?
                        </div>
                        <div>
                            **Smiley Faces here w/ {entry.mood} selected**
                        </div>
                        <div
                            className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                        >
                            Who would like to talk about?
                        </div>
                        <div>
                            {persons?.length > 0 ? (
                                persons.map((person) => {
                                    if (person._id === entry.person) {
                                        return <span> ** {person.name} ** </span>;
                                    }
                                    return <span> {person.name} </span>;
                                })
                            ) : (
                                <span>No persons available</span>
                            )}

                        </div>
                        <div
                            className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                        >
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
    )

}

export default Previous;