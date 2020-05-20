const multer = require('multer')
const hash = require('hash-generator')

module.exports = multer.diskStorage({
    destination: ( req, file, cb ) => cb( null, 'uploads/images' ),
    filename: ( req, file, cb ) => {
        if( file.mimetype === "image/jpeg" ) cb( null, `${ hash(8) }.jpg` )
        else if( file.mimetype === "image/png" ) cb( null, `${ hash(8) }.png` )
    }
})