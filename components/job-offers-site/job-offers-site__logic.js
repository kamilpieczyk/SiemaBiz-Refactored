import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import GET from '../../API/get'

const Logic = ({ render, jobOffers }) => {

  const [ sortMode, setSortMode ] = useState( 'date' );
  const [ numberOfSites, setNumberOfSites ] = useState( 1 );
  const [ stateOffers, setStateOffers ] = useState([ ...jobOffers ]);

  const router = useRouter();

  const handleSearchInput = value => {

  }

  const handleLocationInput = value => {

  }

  const sortOffers = () => {
    const offers = [ ...jobOffers ];

    if( sortMode === 'date' ){
      let newOffers = [];
      for( let offer of offers ){
        const arr = offer.date.split('.');
        const d = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);
        const newOfferObject = {
          ...offer,
          date: d
        }
        newOffers.push( newOfferObject );
      }
      newOffers.sort( ( a, b ) => a.date - b.date ).reverse();
      const offersToSet = [];
      for( let offer of newOffers ){
        const newOfferObj = {
          ...offer,
          date: `${ offer.date.getDate() }.${ offer.date.getMonth()+1 }.${ offer.date.getFullYear() }`
        }
        offersToSet.push( newOfferObj );
      }
      jobOffers = offersToSet;
    }
    else if( sortMode === 'name' ){
      const newOffers = [ ...offers ];
      newOffers.sort( ( a, b ) => {
        let comp = 0;
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if( titleA > titleB ) comp = 1;
        else if( titleA < titleB ) comp = -1;
        return comp
      } );
      jobOffers = newOffers;
    }
  }
  sortOffers();

  const handlePagination = () => {
    let site = router.query.site;
    if( !site ) site = 1;
    const noSites = Math.ceil( jobOffers.length / 5 );
    setNumberOfSites( noSites );
    const second = site * 5;
    const first = second - 5;
    sortOffers();
    setStateOffers( jobOffers.slice( first, second ) );
  }

  useEffect( () => { handlePagination() }, [ router.query.site ] );

  return render({
    jobOffers: stateOffers ? stateOffers : jobOffers,
    state: {
      sortMode,
      numberOfSites
    },
    handlers: {
      handleSearchInput,
      handleLocationInput,
      setSortMode
    }
  })
}

Logic.propTypes = {
  render: PropTypes.func.isRequired,
  jobOffers: PropTypes.array.isRequired
}

export default Logic;