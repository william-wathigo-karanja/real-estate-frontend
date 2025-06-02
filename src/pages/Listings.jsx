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
    image: 'https://images.unsplash.com/photo-1600585154356-596af9009e81?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    price: 15000000,
    location: 'Westlands',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Beachside Villa',
    price: 40000000,
    location: 'Mombasa',
    type: 'House',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Townhouse in Kisumu',
    price: 18000000,
    location: 'Kisumu',
    type: 'Townhouse',
    image: 'https://images.unsplash.com/photo-1560185127-6a8c6c21c8a3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Affordable Studio',
    price: 6500000,
    location: 'Nairobi',
    type: 'Studio',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba934822a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Suburban Bungalow',
    price: 13000000,
    location: 'Thika',
    type: 'Bungalow',
    image: 'https://images.unsplash.com/photo-1600585154601-1b4ed3c0dbd4?auto=format&fit=crop&w=800&q=80',
  },
];

const Listings = () => {
  const [filters, setFilters] = useState({
    price: '',
    location: '',
    type: '',
  });

  const [panelOpen, setPanelOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 3;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset to first page when filter changes
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

  // Pagination logic
  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const currentListings = filteredProperties.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProperties.length / listingsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="App">
      <h2 className="section-header">Available Listings</h2>

      <button className="btn btn-primary mb-3" onClick={() => setPanelOpen(!panelOpen)}>
        {panelOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      {panelOpen && (
        <div className="filter-panel mb-3">
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
                <option value="Townhouse">Townhouse</option>
                <option value="Studio">Studio</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="row mt-4">
        {currentListings.length > 0 ? (
          currentListings.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <div className="card property-card shadow-sm h-100">
                <img src={property.image} className="card-img-top" alt={property.title} />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {property.location}
                    <br />
                    <strong>Type:</strong> {property.type}
                    <br />
                    <strong>Price:</strong> KES {property.price.toLocaleString()}
                  </p>
                  <Link to={`/property/${property.id}`} className="btn btn-primary btn-sm">
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

      {filteredProperties.length > listingsPerPage && (
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-outline-secondary me-2"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="align-self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary ms-2"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Listings;
