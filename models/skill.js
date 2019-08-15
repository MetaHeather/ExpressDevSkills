//Array of skill objects
const skills = [
    {skill: 'JavaScript'},
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'NodeJS'},
    {skill: 'ExpressJS'}
];

//what to export
module.exports = {
    getAll,
    getOne
};

//function to return all skills
function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}