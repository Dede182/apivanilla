// let headers = new Headers();
// headers.append("Authorization", "Bearer 3|O55gBjz1nibZK3VcyuyH5i50dCQMUR7Wk2uf5rEH")
// fetch("http://127.0.0.1:8000/api/products?key=asdffdsa",{
//     method : 'GET',
//     headers,
// })
// .then(res => res.json())
// .then(json => console.log(json))

let host = "http://127.0.0.1:8000/";
let loginUrl = host + "api/v1/login";
let registerUrl = host + "api/v1/register";
let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    let formData = new FormData(this);
    console.log(formData.get('email'),formData.get('password'))

        fetch(loginUrl,{
            method : "post",
            body : formData
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            if(json.hasOwnProperty('token')){
                
                Cookies.set('token',json.token);
                console.log(json);                
                location.href = "create.html";
            }
            else{
                console.log(json);
            }
        })


})

