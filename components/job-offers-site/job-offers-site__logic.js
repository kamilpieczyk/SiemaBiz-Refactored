import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// import GET from '../../API/get'

const Logic = ({ render, jobOffers }) => {

  const [ sortMode, setSortMode ] = useState( 'date' );
  const [ numberOfSites, setNumberOfSites ] = useState( 1 );
  const [ searchValue, setSearchValue ] = useState('');
  const [ locationValue, setLocationValue ] = useState('');
  const [ stateOffers, setStateOffers ] = useState([ ...jobOffers ]);

  const router = useRouter();

  const handleViewOfferButton = ( id ) => {
    router.push({
      pathname: '/job-offer-page',
      query: { id }
    })
  }

  const handleIndustry = () => {
    const industry = router.query.industry;
    const industryOffers = jobOffers.filter( offer => offer.industry === industry );
    sortOffers( industryOffers );
    // setStateOffers( industryOffers );
  }

  const handleSearchInput = value => {
    delete router.query.industry;
    setSearchValue( value );
    router.push({ pathname: '/job-offers' , query: { ...router.query, search: value, site: 1 } });
    const filterByLocation = jobOffers.filter( offer => offer.city.toUpperCase().includes( locationValue.toUpperCase() ) );
    
    if( value.length > 0 ){
      const filtereddOffers = filterByLocation.filter( offer => offer.title.toUpperCase().includes( value.toUpperCase() ) );
      sortOffers( filtereddOffers );
    }
    else sortOffers( filterByLocation );
  }

  const handleLocationInput = value => {
    delete router.query.industry;
    setLocationValue( value );
    router.push({ pathname: '/job-offers' , query: { ...router.query, location: value, site: 1 } });
    const filterBySearch = jobOffers.filter( offer => offer.title.toUpperCase().includes( searchValue.toUpperCase() ) );

    if( value.length > 0 ){
      const filtereddOffers = filterBySearch.filter( offer => offer.city.toUpperCase().includes( value.toUpperCase() ) );
      sortOffers( filtereddOffers );
    }
    else sortOffers( filterBySearch );
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

  useEffect( () => { handleIndustry() }, [ router.query.industry ] );
  useEffect( () => { sortOffers( stateOffers ) }, [ sortMode, router.query.site ] );
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