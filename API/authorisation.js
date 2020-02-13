import POST from './post'

export default async passport => {

  try{
    const res = await POST( 'authorisation', { passport } );

    if( res.status === 'authorised' ) return res
    else throw new Error( 'user not authorised' )
  }
  catch( err ){
    console.error( err )
    return null
  }

}