const findTheOldest = function(people) {
    let oldest = people[0];
    
    for (person of people) {
        Object.assign(person, {age: calculateAge(person)});
        if (person['age'] >= oldest['age']) {
            oldest = person;
        }
    }
    
    return oldest;
};


const calculateAge = function(person) {
    if (person['yearOfDeath'] === undefined || person['yearOfDeath'] === null) {
        const thisYear = new Date().getFullYear();
        return thisYear - person['yearOfBirth'];
    } else {
        return person['yearOfDeath'] - person['yearOfBirth'];
    }
}

// Do not edit below this line
module.exports = findTheOldest;
