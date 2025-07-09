function assign(){
    console.log(`student name:${this.studentName} from batch :${this.batchNo}`)
}

const student1={
    studentName:"ravneet",
    batchNo:23
}
assign.call(student1);
assign.apply(student1);
const data1=assign.bind(student1);
console.log(data1);