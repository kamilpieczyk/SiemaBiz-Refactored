import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// import GET from '../../API/get'

const Logic = ({ render, jobOffers }) => {

  const [ sortMode, setSortMode ] = useState( 'date' );
  const [ numberOfSites, setNumberOfSites ] = useState( 1 );
  const [ searchOffers, setSearchOffers ] = useState([ ...jobOffers ]);
  const [ stateOffers, setStateOffers ] = useState([ ...jobOffers ]);

  const router = useRouter();

  const handleViewOfferButton = ( id ) => {
    router.push({
      pathname: '/job-offer',
      query: { id }
    })
  }

  const handleSearchInput = value => {
    
    if( value.length > 0 ){
      router.push({ pathname: '/job-offers' , query: { ...router.query, search: value, site: 1 } });
      const filtereddOffers = searchOffers.filter( offer => offer.title.toUpperCase().includes( value.toUpperCase() ) );
      setSearchOffers( filtereddOffers );
      sortOffers( filtereddOffers );
    }
    else{
      const location = router.query.location;
      if( location.length > 0 ){
        const filtereddOffers = searchOffers.filter( offer => offer.city.toUpperCase().includes( location.toUpperCase() ) );
        setSearchOffers( filtereddOffers );
        sortOffers( filtereddOffers );
      }
      else{
        setSearchOffers([ ...jobOffers ]);
        sortOffers();
      }
    }

  }

  const handleLocationInput = value => {

    if( value.length > 0 ){
      router.push({ pathname: '/job-offers' , query: { ...router.query, location: value, site: 1 } });
      const filtereddOffers = searchOffers.filter( offer => offer.city.toUpperCase().includes( value.toUpperCase() ) );
      setSearchOffers( filtereddOffers );
      sortOffers( filtereddOffers );
    }
    else{
      const title = router.query.search;
      if( title.length > 0 ){
        const filtereddOffers = searchOffers.filter( offer => offer.title.toUpperCase().includes( title.toUpperCase() ) );
        setSearchOffers( filtereddOffers );
        sortOffers( filtereddOffers );
      }
      else{
        setSearchOffers([ ...jobOffers ]);
        sortOffers();
      }
    }

  }

  const sortOffers = ( offers = [ ...jobOffers ] ) => {

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
      if( process.browser ) setStateOffers( offersToSet );
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
      if( process.browser ) setStateOffers( newOffers );
    }

    // HANDLE PAGINATION
    if( process.browser ){
      let site = router.query.site;
      if( !site ) site = 1;
      const noSites = Math.ceil( jobOffers.length / 5 );
      setNumberOfSites( noSites );
      const second = site * 5;
      const first = second - 5;
      const offers = [ ...jobOffers ];
      setStateOffers( offers.slice( first, second ) );
    }
  }

  if( !process.browser ) sortOffers();
  useEffect( () => { sortOffers( searchOffers ) }, [ sortMode, router.query.site ] );
  useEffect( () => {
    if( router.query.location ) handleLocationInput( router.query.location );
    if( router.query.search ) handleSearchInput( router.query.search );
  }, [] );

  return render({
    jobOffers: stateOffers ? stateOffers : jobOffers,
    state: {
      sortMode,
      numberOfSites
    },
    handlers: {
      handleSearchInput,
      handleLocationInput,
      setSortMode,
      handleViewOfferButton
    }
  })
}

Logic.propTypes = {
  render: PropTypes.func.isRequired,
  jobOffers: PropTypes.array.isRequired
}

export default Logic;