import axios from 'axios'


const httpCli = axios.create();
// default 설정 key 설정 등등. ..
httpCli.defaults.baseURL = 'http://127.0.0.1:8000';
// httpCli.defaults.withCredentials = true;
httpCli.defaults.timeout = 25000;

export async function getContractAddress() {
    try {
        const addr = (await httpCli.get('/tool/addr'))["data"]["Addr"];
        console.log(addr)
        return addr
    } catch (error) {
        return undefined;
    }
    // console.log();
    // return (await httpCli.get('/tool/addr')).data.Addr;
}


/**
 * 
 * @param {String} value 
 * @returns {boolean}
 */
export async function uploadValue(value) {
    if(typeof value !== 'string') return false;

    const res = (await httpCli.get('/tool/upload/'+value));
    
    console.log(res.data);

    return res.data.flag
}

/**
 * 
 * @param {String} idx   : dec index
 * @param {String} value : dec balance of user
 */
export async function updateValue(idx, value) {
    const res = await httpCli.get('/tool/update/'+idx+'/'+value);

    console.log(res.data);

    return res.data.flag

}

export async function getTotalValue() {
    const res = await httpCli.get('/tool/total_cm');

    return res.data.value
}

export default httpCli;


