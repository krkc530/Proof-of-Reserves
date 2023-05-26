import axios from 'axios'


const httpCli = axios.create();
// default 설정 key 설정 등등. ..
httpCli.defaults.baseURL = 'http://127.0.0.1:8000';
// httpCli.defaults.withCredentials = true;
httpCli.defaults.timeout = 25000;

export async function getContractAddress() {
    return await httpCli.get('/contractAddress');
}

export async function uploadValue(value) {
    if(typeof value !== 'string') return false;

    const res = (await httpCli.get('/tool/upload/'+value));
    
    console.log(res.data);

    return res.data.flag
}
export default httpCli;


