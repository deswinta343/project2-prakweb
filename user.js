const data = require('./user.json');
const fs = require('fs');

function getAllUsers() {
    return data.data;
}

function getOneUser(id) {
    const result = data.data.filter(user => user.id == id);

    return result;
}

function insertUser(payload) {
    data.data.push(payload);
    fs.writeFileSync('users.json', JSON.stringify(data));

    return data;
}

function updateUser(id, payload) {
    const { address, name, nim } = payload;
    for (let i = 0; i < data.data.length; i += 1) {
        if (data.data[i].id == id) {
            data.data[i].address = address;
            data.data[i].name = name;
            data.data[i].nim = nim;
        }
    }
    fs.writeFileSync('users.json', JSON.stringify(data));
    return data;
}

function deleteUser(id) {
    const idx = data.data.findIndex(user => user.id == id);
    data.data.splice(idx, 1);
    fs.writeFileSync('users.json', JSON.stringify(data));
    return data;
}

module.exports = {
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
};