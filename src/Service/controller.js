import axios from 'axios';


//saving all user data
const BASE_URL = 'http://localhost:8080/user';

export async function saveUser(user){

    return axios.post(BASE_URL, user);
}

// check user

const BASE_URL12 = 'http://localhost:8080/user/byemail';

export async function checkUser(email){

    return axios.get(`${BASE_URL12}/${email}`);
}

// check admin

const BASE_URL13 = 'http://localhost:8080/admin';

export async function checkAdmin(email){

    return axios.get(`${BASE_URL13}/${email}`);
}


//get user info for employer

const BASE_URL1 = 'http://localhost:8080/user/byemail';

export async function getInfoFromDatabase(email){

    return axios.get(`${BASE_URL1}/${email}`);
}

// posting all jobs to table

const BASE_URL2 = "http://localhost:8080/postjob";

export async function saveJob(postJob){

    return axios.post(BASE_URL2, postJob);
}

//getting all jobs to admin

export async function getAllJobsFromDatabase(){

    return axios.get(BASE_URL2);
}

//deleting job 
export async function deleteJobFromDatabase(id){
    return axios.delete(`${BASE_URL2}/${id}`);
}

//getting job by title

export async function getJobFromDatabase(title){

    return axios.get(`${BASE_URL2}/${title}`);
}


// contact us data posting
const BASE_URL10 = "http://localhost:8080/contact";

export async function saveContact(contactUs){

    return axios.post(BASE_URL10, contactUs);
}


// contact us data fetching

export async function getAllContactFromDatabase(){

    return axios.get(BASE_URL10);
}

export async function deleteContactFromDatabase(id){
    return axios.delete(`${BASE_URL10}/${id}`);
}


//to get all user data

const BASE_URL4 = "http://localhost:8080/user";

export async function getAllUserFromDatabase(){

    return axios.get(BASE_URL4);
}

export async function deleteUserFromDatabase(id){
    return axios.delete(`${BASE_URL4}/${id}`);
}

// to get all admin data

const BASE_URL5 = "http://localhost:8080/admin";

export async function getAllAdminFromDatabase(){

    return axios.get(BASE_URL5);
}

// to get admin by email

export async function getAdminByEmailFromDatabase(name){

    return axios.get(`${BASE_URL5}/${name}`);
}

//to save feedback data

const BASE_URL6 = 'http://localhost:8080/feedback';

export async function saveFeedback(feedback){

    return axios.post(BASE_URL6, feedback);
}

export async function getAllFeedbackFromDatabase(){

    return axios.get(BASE_URL6);
}

export async function deleteFeedbackFromDatabase(id){
    return axios.delete(`${BASE_URL6}/${id}`);
}


// to save login data 

const BASE_URL7 = 'http://localhost:8080/login';

export async function saveLogin(login){

    return axios.post(BASE_URL7, login);
}

//session management

const BASE_URL8 = 'http://localhost:8080/persistMessage';

export async function startSession(){

    return axios.post(BASE_URL8);
}

const BASE_URL9 = 'http://localhost:8080/destroy';

export async function endSession(){

    return axios.post(BASE_URL9);
}



//to save payment data

const BASE_URL11 = 'http://localhost:8080/payment';

export async function savePayment(payment){

    return axios.post(BASE_URL11, payment);
}