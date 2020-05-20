const multer = require('multer')
const hash = require('hash-generator')

module.exports = multer.diskStorage({
    destination: ( req, file, cb ) => cb( null, 'uploads/logos' ),
    filename: ( req, file, cb ) => {
        const newName = hash(10)
        
        if( file.mimetype === "image/jpeg" ) cb( null, `${ newName }.jpg` )
        else if( file.mimetype === "image/png" ) cb( null, `${ newName }.png` )
    }
})