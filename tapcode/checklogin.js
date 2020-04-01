function checklogin(){
    if(document.login.checkid.value != "admin"){
        document.getElementById("erroId").innerHTML ="Sai tên đăng nhập !";
        document.login.checkid.focus();
        return false;
    }
    if(document.login.checkpass.value !=="abc") {
        document.getElementById("erroPass").innerHTML = "Sai mật khẩu !";
        document.login.checkpass.focus();
        return false;
    }
    return true;
}