const UserModel = require( "../../models/userModel" )
const UsersArchiveModel = require( "../../models/usersArchiveModel" )
const getDate = require( "../components/getDate" )

module.exports = async( req, res ) => {
  const { username } = req.body
  console.log( username )
  const deletedUser = await UserModel.findOneAndDelete( { username } )
  const archive = new UsersArchiveModel( {
    username: deletedUser.username,
    pwd: deletedUser.pwd,
    email: deletedUser.email,
    name: deletedUser.name,
    surname: deletedUser.surname,
    phone: deletedUser.phone,
    userID: deletedUser.iserID,
    privilege: deletedUser.privilege,
    deleted: getDate()
  } )
  const data = await archive.save()
  console.log( data )

  if( data ){
    res.status( 200 )
    res.json( {
      status: "ok"
    } )
  }
  else{
    res.status( 500 )
    res.json( {
      status: "error"
    } )
  }
}