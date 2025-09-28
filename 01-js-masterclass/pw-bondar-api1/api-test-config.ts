const processENV = process.env.TEST_ENV;
const env = processENV || 'dev';
console.log(`Running tests in ${env} environment`);

const config = {
    apiUrl: 'https://conduit-api.bondaracademy.com/api',
    userEmail: 'testbondar1@gmail.com',
    userPassword: 'testbondar1',
}

if (env === 'qa') {
    config.userEmail = 'testbondar2@gmail.com',
        config.userPassword = 'testbondar2';
};

if (env === 'prod') {
    config.userEmail = 'testbondarprod@gmail.com',
        config.userPassword = 'testbondarprod';
};


export { config }