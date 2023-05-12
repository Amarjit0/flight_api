const flightPrices = {
    'Delhi-Jaipur': {
      indigo: 1614,
      airAsia: 1869,
      vistara: 2133,
    },
    'Delhi-Mumbai': {
      indigo: 2450,
      airAsia: 2199,
      vistara: 3125,
    },
    'Delhi-Bangalore': {
      indigo: 1980,
      airAsia: 1765,
      vistara: 2250,
    },
    // Add more flight prices for different city pairs
  };
  
  function getFlightPrices(source, destination) {
    const key = `${source}-${destination}`;
    const prices = flightPrices[key];
  
    if (!prices) {
      throw new Error('Flight prices not available for the given route.');
    }
  
    return prices;
  }
  
  // Example usage
  const source = 'Delhi';
  const destination = 'Jaipur';
  
  try {
    const prices = getFlightPrices(source, destination);
    console.log(prices);
  } catch (error) {
    console.error(error);
  }
  