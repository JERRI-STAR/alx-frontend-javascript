/// <reference path="subjects/teacher.ts" />
/// <reference path="subjects/subject.ts" />
/// <reference path="subjects/cpp.ts" />
/// <reference path="subjects/react.ts" />
/// <reference path="subjects/java.ts" />

export const cpp = new Subjects.cpp();
export const java = new Subjects.java();
export const react = new Subjects.react();
export const cTeacher: Subjects.teacher = {
  firstName: "Bobby",
  lastName: "Wine",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
