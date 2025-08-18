const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const travel = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    if (!response.ok) {
      return res.status(response.status).send(`Error fetching trips: ${response.statusText}`);
    }

    const trips = await response.json();

    if (!Array.isArray(trips)) {
      return res.status(500).send('Invalid trips data received');
    }
    if (trips.length === 0) {
      return res.status(404).send('No trips found');
    }

    res.render('travel', { title: 'Travlr Getaways', trips });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { travel };