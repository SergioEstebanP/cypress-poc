
class ServicesSupport {
    static getRandomEmail() {
        var values = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var randomWord = '';
        for (var ii = 0; ii < 15; ii++) {
            randomWord += values[Math.floor(Math.random() * values.length)];
        }
        var randomEmail = randomWord + '@mail.com';
        return randomEmail;
    }
}

export default ServicesSupport;
