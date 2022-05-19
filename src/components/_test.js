export const data = [
    {
        id: "I0001",
        question: "(旅行)の計画について、意見のある方はどんどん言ってください。",
        choice: ["りょうこ","りょうこう","りょこ"],
        answer: 2,
    }
]

const dataStorage = [
    // {
    //     id: "I000333",
    //     question: "(0旅、意見のある方はどんどん言ってください。",
    //     choice1: "りょうこ",
    //     choice2: "りこう",
    //     choice3: "りょこう",
    //     answer: 2,
    // }
    {
        id: "I0001",
        question: "(旅行)の計画について、意見のある方はどんどん言ってください。",
        choice: ["りょうこ","りょうこう","りょこ"],
        answer: 2,
    },
    {
        id: "I0001",
        question: "(旅行)の計画について、意見のある方はどんどん言ってください。",
        choice: ["りょうこ","りょうこう","りょこ"],
        answer: 2,
    },
    {
        id: "I0001",
        question: "(旅行)の計画について、意見のある方はどんどん言ってください。",
        choice: ["りょうこ","りょうこう","りょこ"],
        answer: 2,
    },
    {
        id: "I0001",
        question: "(旅行)の計画について、意見のある方はどんどん言ってください。",
        choice: ["りょうこ","りょうこう","りょこ"],
        answer: 2
    },
]

const getDataFromStorage= () =>{
    for (let i = 0; i < 2 ; i++){

        let randomIndex = Math.floor(Math.random() * dataStorage.length );
        // dataStorage.map((e) => data.push(e))
        data.push(dataStorage[randomIndex])
    } 
}
getDataFromStorage() 

