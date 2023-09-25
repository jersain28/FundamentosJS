// Objetos en javascript
/*
objeto = {
    key: value,
    key: value
}
objeto.key
objeto['key']
*/

const subject={
    name: 'Aplicaciones Web',
    cuatri: 3,
    professor:'Jersain',
    'classroom': 'Lab Redes 1',
    'total hours': 70,
    weekHours: 5
}

console.log(subject);
console.log(subject.name);
console.log(subject.professor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.professor='Jersain Marin';
subject.career='TIADSM';
console.log(subject);

const student={
    name:'Jersain',
    age:19,
    califications: [10,10,9],
    city:'Huamantla'
}

const group={
    name:'Jersain',
    students: [student,student,student],
    subjects: [subject,subject,subject]
}

console.log(group);
console.log(group.subjects[0].professor);
console.log(group.students[1].califications);
console.log(group.students[1].califications[0]);