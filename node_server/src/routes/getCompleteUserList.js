const UserModel = require( "../../models/userModel" )

module.exports = async( req, res ) => {
  const users = await UserModel.find()
  if( users ){
    res.status( 200 )
    res.json( {
      users
    } )
  }
  else{
    res.status( 404 )
    res.json( {
      status: "no users in database"
    } )
  }
}