import fs from "fs";
import path from "path";

const folderPath = process.env.PWD + '/napirs-legogroth16';
const jsonPath1 = folderPath + '/json/Ped_cm';
const jsonPath2 = folderPath + '/json/Proof_vk';
const proof_filePath = folderPath + '/proof_file';

async function clean_file(folderPath){
    fs.readdir(folderPath, (err,files) => {
        if(err){
            console.log('can not read folder', err);
            return ;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath,file);

            fs.unlink(filePath, err => {
                if(err){
                    console.log('can not delete file',err);
                } else{
                    console.log('delete file success',filePath);
                }
            });

        });
    });
}

await clean_file(jsonPath1);
await clean_file(jsonPath2);
await clean_file(proof_filePath);