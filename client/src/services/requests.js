import api from "./api";

export async function LoginSubmit(email, password){
    const response = await api.post('/api/users/login', {email:email, password:password});
    return response;
}

export async function Logout(){
    const response = await api.post('/api/users/logout');
    return response;
}

export async function CreateUser(name, email,weight,age,password){
    const response = await api.post('/api/users', {email:email, password:password,name:name,weight:weight,age:age});
    return response;
}

export async function ForgotPassword(email){
    const response = await api.post('/api/users/forgotPassword', {email:email});
    return response;
}

export async function ValidateToken(token){
    const response = await api.post('/api/users/validateToken', {token:token});
    return response;
}

export async function ResetPassword(id,password){
    const response = await api.post(`/api/users/resetPassword/${id}`,{password:password});
    return response;
}

export async function Update(id){
    const response = await api.put(`/api/users/${id}`);
    return response;
}

export async function GetAllUsers(){
    const response = await api.get('/api/users');
    return response;
}

export async function GetProfile(){
    const response = await api.get('/api/users/myProfile');
    return response;
}

export async function CreateDiet(diet, weight,goal,calories,restrictions,UserId){
    const response = await api.post('/api/diets', {diet:diet,weight:weight,goal:goal,calories:calories,restrictions:restrictions,UserId:UserId});
    return response;
}

export async function SendDietEmail(id){
    const response = await api.post(`/api/diets/sendEmail/${id}`);
    return response;
}

export async function GetAllDiets(){
    const response = await api.get('/api/diets/userDiets/');
    return response;
}

export async function GetDiet(id){
    const response = await api.get(`/api/diets/${id}`);
    return response;
}