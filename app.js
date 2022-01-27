const profileDataArr = process.argv.slice(2, process.argv.length);

const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    Github: ${githubName}
    `;
};
console.log(generatePage('Jane', 'Janehub'));

// const printprofileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('============');

//     // is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printprofileData(profileDataArr);