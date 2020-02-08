import key from "./key"

export default async ( uri, body ) => {

  const query = async () => {
    
    const data = await fetch( `${ key }${ uri }`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( body )
    } )

    return await data.json()

  }

  const response = await query()
  
  return response

}