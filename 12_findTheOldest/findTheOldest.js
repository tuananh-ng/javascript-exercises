const findTheOldest = function(people) {
    const curYear = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        let latestYearOfPerson = curYear;
        if ("yearOfDeath" in person) latestYearOfPerson = person["yearOfDeath"];

        let latestYearOfOldest = curYear;
        if ("yearOfDeath" in oldest) latestYearOfOldest = oldest["yearOfDeath"];

        let personAge = latestYearOfPerson - person["yearOfBirth"];
        let oldestAge = latestYearOfOldest - oldest["yearOfBirth"];
        if (personAge > oldestAge) return person;

        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
