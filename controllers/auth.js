
exports.getLogin  = (req,res,next)=>{
       console.log(req.session.isLoggedIn);
        res.render('auth/login',{
        path:'/path',
        pageTitle: 'Login',
        isAuthenticated: null,
        });
};

exports.postLogin = (req, res, next) =>{
   req.session.isLoggedIn = true;
    res.redirect('/');

};

exports.postLogout = (req, res, next) =>{
    console.log("aaya");
    req.session.destroy(err=>{
        res.redirect('/');
    });
};