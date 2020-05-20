const UserModel = require( "../../models/userModel" )

module.exports = async ( req, res ) => {
  const {
    email,
    name,
    surname,
    phone,
    id,
  } = req.body

  const currentUser = await UserModel.findOne( { _id: id } )
  const updatedUser = await UserModel.findOneAndUpdate( { _id: id }, {
    $set: {
      email: email || currentUser.email,
      name: name || currentUser.name,
      surname: surname || currentUser.surname,
      phone: phone || currentUser.phone
    }
  } )

  if( updatedUser ){
    res.status( 200 )
    res.json( {
      status: "updated"
    } )
  }
  else{
    res.status( 200 )
    res.json( {
      status: "not_updated"
    } )
  }
}