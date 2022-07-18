import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import key from './key';

export default async function (uri, body) {
  const data = await fetch(`${key}${uri}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },
    body: JSON.stringify(body),
  });

  if (data.status === 200) return await data.json();
  else if (data.status === 401) {
    const getNewToken = await fetch(`${key}${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Refresh ${cookie.get('refresh')}`,
      },
      body: JSON.stringify(body),
    });
    if (getNewToken.status === 201) {
      const newTokenData = await getNewToken.json();
      const newToken = newTokenData.newToken;
      window.localStorage.setItem('token', newToken);
      const retryGetData = await fetch(`${key}${uri}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newToken}`,
        },
        body: JSON.stringify(body),
      });
      if (retryGetData.status === 200) return await retryGetData.json();
      else return { status: 'undefined authorisation problem' };
    } else {
      return { status: 'unauthorised' };
    }
  } else return { status: 'undefined authorisation problem' };
}

// async (uri, body) => {
//   const token = window.localStorage.getItem('token');
//   const refresh = cookie.get('refresh');

//   console.log(token);
//   const data = await fetch(`${key}${uri}`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `bearer ${token}`,
//     },
//     body: JSON.stringify(body),
//   });

//   if (data.status === 200) return await data.json();

//   else if (data.status === 401) {

//     if (refresh) {
//       const reData = await fetch(`${key}${uri}`, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `Refresh ${refresh}`,
//         },
//         body: JSON.stringify(body),
//       });

//       if (reData.status === 201) {
//         const newData= await reData.json();
//         const newToken = newData.newToken;
//         window.localStorage.setItem('token', newToken);
//         const tryToPostWithNewToken = await fetch(`${key}${uri}`, {
//           method: 'post',
//           headers: {
//             'Content-Type': 'application/json',
//             authorization: `bearer ${newToken}`,
//           },
//           body: JSON.stringify(body),
//         });
//         if (tryToPostWithNewToken.status === 200) return await tryToPostWithNewToken.json();
//         else{
//           return { status: 'undefined error' }
//         }
//       }
//       else return { status: 'unauthorised' };
//     }
//     else return { status: 'unauthorised' };
//   }
//   else if (data.status === 500) {
//     throw new Error('internal server error');
//   }
//   else throw new Error(`status: ${data.status}`);
// };
