const Contents = require('../controllers/contents');


module.exports= app =>{
	app.get('/accordian',Contents.getAccordianData);
	app.post('/addAccData',Contents.addAccContents);
	app.get('/checkbox',Contents.getCheckboxData);
	app.post('/addCheckboxData',Contents.addCheckboxData);
}