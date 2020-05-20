const UserModel = require( "../../models/userModel" )
const privTab = require( "../components/privileges" )

module.exports = async ( req, res ) => {
  const { 
    id,
    username,
    email,
    name,
    surname,
    phone,
    privilege } = req.body

    let priv

    switch( privilege ){
      case "użytkownik" || "user": priv = privTab.user
        break
      case "właściciel przedsiębiorstwa" || "company owner": priv = privTab.companyOwner
        break
      case "redaktor" || "redactor": priv = privTab.redactor
        break
      case "moderator": priv = privTab.mod
        break
      case "administrator": priv = privTab.admin
    }
  
  const data = await UserModel.findByIdAndUpdate( id, {
    $set:{
      username,
      email,
      name,
      surname,
      phone,
      privilege: priv
    }
  } )

  if( data ){
    res.status( 200 )
    res.json( {
      status: "ok"
    } )
  }
  else{
    res.status( 200 )
    res.json( {
      status: "error"
    } )
  }
}