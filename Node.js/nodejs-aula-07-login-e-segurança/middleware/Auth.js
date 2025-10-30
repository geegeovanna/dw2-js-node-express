function Auth(req, res, next) {
    // O usuário possui uma sessão no site
    if(req.session.user != undefined) {
        // Permite a continuação da requisição
        next();
    } else{
        res.render("login", {
            hasNoSession: false,
        })
    }
}
export default Auth;