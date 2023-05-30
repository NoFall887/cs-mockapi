const { faker } = require("@faker-js/faker");
const { pickRandom } = require("./helper");

function generateLocationAndMovement() {
    return {
        now_distance: faker.number.bigInt(),
        last_1_week_distance: faker.number.bigInt(),
        last_2_week_distance: faker.number.bigInt(),
        last_3_week_distance: faker.number.bigInt(),
        last_4_week_distance: faker.number.bigInt(),
        average_distance: faker.number.bigInt(),
        address_stability: pickRandom([
            "Sangat tidak stabil",
            "Tidak stabil",
            " Stabil",
            "Sangat stabil",
        ]),
        address_suitability: pickRandom(["Tidak Sesuai", "Sesuai", "Sangat Sesuai"]),
        credit_score: faker.number.bigInt({ max: 100 }),
        credit_score_category: pickRandom([
            "Poor",
            "Fair",
            "Good",
            "Very Good",
            "Excellent",
        ]),
    };
}

module.exports = {
    generateLocationAndMovement,
};
