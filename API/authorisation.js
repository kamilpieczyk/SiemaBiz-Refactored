import POST from './post'


export default async () => {

  const passport = window.localStorage.getItem( 'passport' );

  try{
    const res = await POST( 'authorisation', { passport } );

    if( res.status === 'authorised' ) return res
    else throw new Error( 'user not authorised' )
  }
  catch( err ){
    console.error( err )

    if( passport ) window.localStorage.removeItem( 'passport' )

    return null
  }

}