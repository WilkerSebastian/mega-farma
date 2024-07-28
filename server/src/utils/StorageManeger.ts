import multer from "multer"

export class StorageManeger {

    public static upload = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'upload/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })


    public static fileSpecs = multer({
        storage: StorageManeger.upload,
        fileFilter: (req, file, cb) => {

            if (file.mimetype.startsWith('image/')) {
                cb(null, true)
                return
            }
    
            
            cb(new Error('Somente arquivos de imagem são permitidos!'));
            
        },
        limits: { fileSize: 1024 * 1024 * 5 } 
    });

}