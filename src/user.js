const { faker } = require("@faker-js/faker");
const { pickRandom } = require("./helper");
faker.location.country();
function generateKtpData() {
    return {
        nik: faker.string.numeric(15),
        name: faker.person.fullName(),
        birth_place: faker.location.city(),
        birth_date: faker.date.birthdate(),
        gender: faker.person.sex(),
        rt: faker.string.numeric(3),
        rw: faker.string.numeric(3),
        subdistrict: faker.location.city(),
        district: faker.location.city(),
        religion: pickRandom(["islam", "kristen", "katholik", "hindu", "budha"]),
        marital_status: pickRandom(["kawin", "belum kawin"]),
        occupation: faker.person.jobType(),
        nationality: pickRandom(["WNI", "WNA"]),
        valid_until: "seumur hidup",
    };
}

module.exports = {
    generateKtpData,
};
