module.exports = ( req, res ) => {
  const privNo = req.params.privileges

  if( privNo === "225801" ){
    res.status( 200 )
    res.json( {
      privileges: "user"
    } )
  }
  else if( privNo === "225802" ){
    res.status( 200 )
    res.json( {
      privileges: "company owner"
    } )
  }
  else if( privNo === "225803" ){
    res.status( 200 )
    res.json( {
      privileges: "redactor"
    } )
  }
  else if( privNo === "225804" ){
    res.status( 200 )
    res.json( {
      privileges: "moderator"
    } )
  }
  else if( privNo === "225805" ){
    res.status( 200 )
    res.json( {
      privileges: "administrator"
    } )
  }
  else if( privNo === "225806" ){
    res.status( 200 )
    res.json( {
      privileges: "root"
    } )
  }
}