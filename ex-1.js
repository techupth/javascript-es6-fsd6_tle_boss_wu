let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};

additionalProperties.hobbies.push("Play Roblox","practice Roblox Studio", "archery", "sleep", "hangout");
let updateStudentProfile = { ...studentProfile, ...additionalProperties };

console.log(updateStudentProfile);
