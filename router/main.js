let config = require('dotenv').config().parsed;

module.exports = function(app)
{
     app.get('/',function(req,res) {
				res.render('index.html', {title: 'client index', length: 5, config: config });
			});
}
