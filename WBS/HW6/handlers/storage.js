const fs = require ("fs");
const makeId = require ("../helper/strings")

const MAX_FILESIZE = 10 * 1024 * 1024;
const ALLOWED_FILETYPES = ["image/jpeg", "image/jpg", "image/png"]

const upload = async (req, res) => {
    console.log("files", req.files);

    if(!req.files){
        return res.status(400).send("No file was uploaded!")
    }

    if(!MAX_FILESIZE < req.files.document.size) {
        return res.status(400).send("File exceed max file size!")
    }

    if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
        return res.status(400).send("File type not allowed!")
    }

    const usedDir = `user_${req.auth.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;

    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath)
    }

    const newFileName = req.files.document.name.split(".");

    const fileName = `${newFileName[0]}_${makeId(6)}}.${newFileName[1]}`
    const filePath = `${userDirPath}/${fileName}`;

    req.files.document.mv(filePath, (err) => {
        if (err) {
          return res.status(500).send("Internal Server Error!");
        }
        return res.status(200).send({ file_name: fileName });
      });
    };
    
    const download = async (req, res) => {
      const userDir = `user_${req.auth.id}`;
      const userDirPath = `${__dirname}/../uploads/${userDir}`;
    
      const filePath = `${userDirPath}/${req.params.filename}`;
      console.log("file path", filePath);
    
      if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found!");
      }
    
      res.download(filePath);
    };


    const listFileForUser = async (req, res) => {
        
        const userDir = `user_${req.auth.id}`;
        const userDirPath = `${__dirname}/../uploads/${userDir}`;
        
        const listFile = 
      
    }


    module.exports = {
        upload, 
        download
    }