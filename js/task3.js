const studentsMarks = [{name:'David',marks:80},{name:'Vinoth',marks:77},{name:'Divya',marks:88},{name:'Ishitha',marks:95},{name:'Thomas',marks:68}]

function calcAverage(scores){
    let totalScores = 0
    for (let index = 0; index < scores.length; index++) {
        totalScores += scores[index]
    }

    return totalScores / scores.length
}

let result = calcAverage(studentsMarks.map(a => a.marks));

function task3(){
    if(result < 60){
        document.getElementById("execute-task-3").innerHTML='F'
    }else if(result < 70){
        document.getElementById("execute-task-3").innerHTML='D'
    }else if(result < 80){
        document.getElementById("execute-task-3").innerHTML='C'
    }else if(result < 90){
        document.getElementById("execute-task-3").innerHTML='B'
    }else if(result <= 100){
        document.getElementById("execute-task-3").innerHTML='A'
    }
}