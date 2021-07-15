module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        articles: _.times(100, function(n) {
            return {
                id: n,
                author: faker.name.findName(),
                avator: faker.internet.avatar(),
                title: faker.lorem.sentence(3),
                subtitle: faker.lorem.sentence(8),
                articleBody: faker.lorem.paragraph(5),
                publishedDate: faker.date.past(),
                mainImage: "https://source.unsplash.com/900x650/?random"
            }
        })
    }
}