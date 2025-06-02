import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const listingsData = [
  {
    id: 1,
    title: 'Modern Family Home',
    price: 25000000,
    location: 'Nairobi',
    type: 'House',
    image: 'https://source.unsplash.com/featured/?modern,home',
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    price: 15000000,
    location: 'Westlands, Nairobi',
    type: 'Apartment',
    image: 'https://source.unsplash.com/featured/?luxury,apartment',
  },
  {
    id: 3,
    title: 'Beachside Villa',
    price: 40000000,
    location: 'Mombasa',
    type: 'Villa',
    image: 'https://source.unsplash.com/featured/?beach,villa',
  },
];

const Listings = () => {
  const [filters, setFilters] = useState({
    price: '',
    location: '',
    type: '',
  });

  const [panelOpen, setPanelOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProperties = listingsData.filter((property) => {
    const matchesPrice =
      filters.price === '' || property.price <= parseInt(filters.price);
    const matchesLocation =
      filters.location === '' ||
      property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType =
      filters.type === '' ||
      property.type.toLowerCase() === filters.type.toLowerCase();
    return matchesPrice && matchesLocation && matchesType;
  });

  return (
    <div className="App">
      <h2 className="section-header">Available Listings</h2>

      <button className="btn btn-primary mb-3" onClick={() => setPanelOpen(!panelOpen)}>
        {panelOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className={`filter-panel ${panelOpen ? 'open' : ''}`}>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="number"
              name="price"
              placeholder="Max Price"
              className="form-control"
              value={filters.price}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="location"
              placeholder="Location (e.g. Nairobi)"
              className="form-control"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <select
              name="type"
              className="form-select"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {property.location}
                    <br />
                    <strong>Type:</strong> {property.type}
                    <br />
                    <strong>Price:</strong> KES {property.price.toLocaleString()}
                  </p>
                  <Link to={`/property/${property.id}`} className="btn btn-primary mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-muted">No properties match your filters.</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
