let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

/**
 * @param name: string;
 * @param property: string;
 */
function lookUpProfile(name, property) {
    for (const contact of contacts) {
        if (contact.firstName === name) {
            if (contact.hasOwnProperty(property)) {
                return contact[property];
            }
            return "No such property";
        }
    }
    return "No such contact";
}

