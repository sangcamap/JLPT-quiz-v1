export const data = [
    {
        id: "I0001",
        question: "(旅行)の計画について、意見のある方はどんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りょうこう",
        choice3: "りょこ",
        answer: 2,
    }
]

const dataStorage = [
    {
        id: "I000333",
        question: "(0旅、意見のある方はどんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りこう",
        choice3: "りょこう",
        answer: 2,
    },
    {
        id: "I000333",
        question: "(1gfhhfg旅、意見のある方はどんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りこう",
        choice3: "りょこう",
        answer: 2,
    },
    {
        id: "I07700333",
        question: "(2gfhhfg旅、意見のある方は----どんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りこう",
        choice3: "りょこう",
        answer: 2,
    },
    {
        id: "I09900333",
        question: "(3gfhhfg旅00000、意見のある方はどんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りこう",
        choice3: "りょこう",
        answer: 2,
    },
    {
        id: "I0100333",
        question: "(4gfhhf90999g旅、意見のある方はどんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りこう",
        choice3: "りょこう",
        answer: 2,
    },
    {
        id: "I000333",
        question: "(5gfhhfg旅、意見のある方はどんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りこう",
        choice3: "りょこう",
        answer: 2,
    },
    {
        id: "I00999033",
        question: "(6999旅行)の計画にんどん言ってください。",
        choice1: "りょうこ",
        choice2: "りょこう",
        choice3: "りょこう",
        answer: 2,
    }
]

const getDataFromStorage= () =>{
    for (let i = 0; i < 9 ; i++){

        let randomIndex = Math.floor(Math.random() * dataStorage.length );
        // dataStorage.map((e) => data.push(e))
        data.push(dataStorage[randomIndex])
    } 
}
getDataFromStorage() 

