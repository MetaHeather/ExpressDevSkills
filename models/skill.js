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
    getOne,
    deleteOne
};

//function to return all skills
function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function deleteOne(id){
    skills.splice(id, 1);
  }