import { useState } from "react";
import type { Mystery } from "../../context/types";

export function MysteryPane({mystery}: {mystery: Mystery | undefined}) {
const [expandFlavorText, setExpandFlavorText] = useState(true);


    if (!mystery) return null;
    return     (
    <div> 
        <h1 className="text-2xl font-bold text-center">{mystery.title}</h1>
        {expandFlavorText ? <div className="flex flex-col gap-2 text-sm italic text-theme-text-secondary">{mystery.description.map((paragraph) => (
            <p key={paragraph} className="text-left py-2">{paragraph}</p>
        ))}

            <button type="button" onClick={() => setExpandFlavorText(false)}>» Click to collapse introductory text «</button>
        </div> : <div className="w-full flex justify-center"><button type="button" className="text-sm italic text-theme-text-secondary" onClick={() => setExpandFlavorText(true)}>» Click to expand introductory text «</button></div>}
        <div className="text-md"><h2 className="text-lg font-bold">Questions</h2>
            {mystery.questions.map((question) => (
            <div key={question.question} className="ml-6">
                <span className="inline-flex gap-2 items-center"><h2 className="text-lg font-bold">{question.question}</h2>
                <p className="text-sm">(Complexity: {question.complexity})</p></span>
                <p className="text-sm italic">{question.opportunity}</p>
            </div>
        ))}

        <h3 className="text-lg font-bold">Clues:</h3>
        <ul className="list-disc list-inside ml-6">
            {mystery.earnedClues.length > 0 ? mystery.earnedClues.map((clue) => (
                <li key={clue}>{clue}</li>
            )) : <li>None yet...</li>}
        </ul>
    </div>
    </div>);
}
