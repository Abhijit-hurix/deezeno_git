const mongoose = require("mongoose");
const AccordianModel = mongoose.model("accordian");
const CheckboxModel = mongoose.model("checkbox");
exports.addAccContents = function(req,res,next){
	const {title,description}=req.body;

	const accordian =new AccordianModel({
			title: title,
			description: description

		});
		accordian.save(function(err){
			if(err){
				return next(err);
			}
			res.send([{accordian}]);

		});

};
exports.getAccordianData = function(req,res,next){
	AccordianModel.find({}).then(accordian => {
		res.send(accordian);
	});
};

exports.addCheckboxData = function(req,res,next){
	const {question,options}=req.body;

	const checkbox =new CheckboxModel({
			question: question,
			options: options

		});
		checkbox.save(function(err){
			if(err){
				return next(err);
			}
			res.send({checkbox});

		});

};
exports.getCheckboxData = function(req,res,next){
	CheckboxModel.find({}).then(checkbox => {
		res.send(checkbox);
	});
};

/*exports.editSkill = function(req,res,next){
	SkillModel.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
		SkillModel.findOne({_id:req.params.id}).then(editedSkill=>{
			res.send(editedSkill);
		})
	});
};

exports.getSkills = function(req,res,next){
	SkillModel.find({}).then(skills => {
		res.send(skills);
	});
};*/
