const getHomePage= function(req,res){
  res.render('home', { title: 'Express' });
}
const getSignupPage= function(req,res){
  res.render('signup',{ title: 'Express' });
}

const getLoginpPage= function(req,res){
  res.render('login');
}


module.exports={getHomePage,getSignupPage,getLoginpPage}

