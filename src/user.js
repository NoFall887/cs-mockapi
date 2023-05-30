const { faker } = require("@faker-js/faker");
const { pickRandom } = require("./helper");

function generateKtpData() {
    return {
        nik: faker.string.numeric(15),
        name: faker.person.fullName(),
        birth_place: faker.location.city(),
        birth_date: faker.date.birthdate(),
        gender: faker.person.sex(),
        rt: faker.number.int(),
        rw: faker.number.int(),
        subdistrict: faker.location.city(),
        district: faker.location.city(),
        religion: pickRandom(["islam", "kristen", "katholik", "hindu", "budha"]),
        marital_status: pickRandom(["kawin", "belum kawin"]),
        occupation: faker.person.jobType(),
        nationality: pickRandom(["WNI", "WNA"]),
        valid_until: "seumur hidup",
    };
}

function generateSiup() {
    return {
        company_name: faker.company.name(),
        bussiness_registration_number: faker.string.numeric(13),
        company_address: faker.location.streetAddress(),
        kbli_name: faker.lorem.words(4),
        kbli_code: faker.number.int({ max: 99999 }),
        address: faker.location.streetAddress(),
        sub_district: faker.location.city(),
        district: faker.location.city(),
        regency: faker.location.state(),
        province: faker.location.state(),
        issued_date: faker.date.past(),
    };
}

function generateNpwp() {
    return {
        code_npwp: faker.string.numeric(12),
        company_name: faker.company.name(),
        company_address: faker.location.streetAddress(),
        registered: faker.date.past(),
    };
}

function generateSkdp() {
    return {
        skdp_number: faker.string.numeric(10),
        name: faker.person.fullName(),
        place_of_birth: faker.location.city(),
        date_of_birth: faker.date.birthdate(),
        gender: faker.person.sex(),
        religion: pickRandom(["islam", "kristen", "katholik", "hindu", "budha"]),
        citizenship: faker.location.country(),
        id_card_number: faker.string.numeric(20),
        occupation: faker.person.jobType(),
        company_name: faker.company.name(),
        bussiness_category: faker.commerce.department(),
        business_address: faker.location.streetAddress(),
        contact_number: faker.phone.number(),
        building_status: pickRandom(["milik sendiri", "sewa"]),
        establishment_deed_number: faker.date.past(),
        staff_number: faker.number.int(),
        person_in_charge: faker.person.fullName(),
    };
}

function generateTdp() {
    return {
        tdp_number: faker.string.numeric(20),
        npwp_number: faker.string.numeric(20),
        kbli: faker.number.int(),
    };
}

function generateCompleteDocument() {
    return {
        ktp: generateKtpData(),
        surat_izin_usaha_perdagangan: generateSiup(),
        surat_keterangan_domisili_usaha: generateSkdp(),
        npwp: generateNpwp(),
        surat_tanda_daftar_perusahaan: generateTdp(),
    };
}

module.exports = {
    generateKtpData,
    generateNpwp,
    generateSiup,
    generateSkdp,
    generateTdp,
    generateCompleteDocument,
};
