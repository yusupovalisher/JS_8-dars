let users = [
    {
        login: "MDK91",
        password: "12345"
    }
];
$(document).ready(function (){
    $('.btn-success').click(function (){
        let login = $('#login').val();
        let password = $('#password').val();
        let num = false;
        if (login == ''){
            alert("Login qatorini toldiring!");
        }else if (password ==''){
            alert("Parol qatorini toldiring");
        }else {
            if (users.length !=0){
                users.forEach(function (item){
                    if (login == item.login){
                        if (password == item.password){
                            num = true;
                            alert("Siz tizimga kirdingiz!");
                        }
                        else{
                            alert("Parolingiz noto'g'ri!");
                        }
                    }
                });
                if (!num){
                    alert("Ro'yxatdan o'tishingiz shart!");
                }
            }else{
                alert("Siz birinchi foydalanuvchisiz. Iltimos, ro'yxatdan o'ting!");
            }
        }

    })
    $('.btn-link').click(function (){
        let login = $('#login').val();
        let password = $('password').val()
        let num = false;
        if (login == ''){
            alert("Login qatorini toldiring!");
        }else if (password ==''){
            alert("Parol qatorini toldiring");
        }else {

        }

        if (users.length !=0){

            users.forEach(function (item){
                if (login == item.login){
                    num = true;
                }
            });
            if (num){
                alert("Bunday login mavjut");
            }
            else{
                alert("Zo'r! Siz royxatdan otdingiz!")
                users.push({login: login,password: password});
            }

        }else {
            users.push({login:login,password: password})
        }
        console.log(users);
    });
    $('.btn-light').on("mousedown", function(){
        let attr = $('#password').attr("type");
        $('password').attr("type","text");
        $(".fa").toggleClass('fa-eye fa-eye-slash');
        $('#password').css('border-color','red');
    })

    $('.btn-light').on("mouseup",function(){
        let attr = $('password').a
    }
});











