import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Full listings dataset
const listingsData = [
  {
    id: 1,
    title: 'Modern Apartment in Nairobi',
    price: 200000,
    location: 'Nairobi',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Beach House in Mombasa',
    price: 450000,
    location: 'Mombasa',
    type: 'House',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Bungalow in Kisumu',
    price: 300000,
    location: 'Kisumu',
    type: 'House',
    image: 'https://images.unsplash.com/photo-1560448071-1a53a7c7b20f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Penthouse in Westlands',
    price: 600000,
    location: 'Nairobi',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1598928506311-d0cbe7bbf46c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Luxury Villa in Diani',
    price: 750000,
    location: 'Mombasa',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Studio Apartment in Eldoret',
    price: 150000,
    location: 'Eldoret',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1615873968403-89e9db00fa0f?auto=format&fit=crop&w=800&q=80',
  },
  // Add more listings as needed
];

const ITEMS_PER_PAGE = 6; // You can adjust how many per page

const Listings = () => {
  const [filters, setFilters] = useState({
    price: '',
    location: '',
    type: '',
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const handleCategoryClick = (type) => {
    setFilters((prev) => ({ ...prev, type }));
    setActiveCategory(type);
    setCurrentPage(1);
  };

  const clearCategory = () => {
    setFilters((prev) => ({ ...prev, type: '' }));
    setActiveCategory('');
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const filteredProperties = listingsData
    .filter((property) => {
      const matchesPrice =
        filters.price === '' || property.price <= parseInt(filters.price);
      const matchesLocation =
        filters.location === '' ||
        property.location.toLowerCase() === filters.location.toLowerCase();
      const matchesType =
        filters.type === '' ||
        property.type.toLowerCase() === filters.type.toLowerCase();
      return matchesPrice && matchesLocation && matchesType;
    })
    .sort((a, b) => {
      if (sortOrder === 'price-asc') {
        return a.price - b.price;
      } else if (sortOrder === 'price-desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProperties = filteredProperties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="App">
      <h2 className="section-header">Available Listings</h2>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setPanelOpen(!panelOpen)}
      >
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

      {/* Sort by Dropdown */}
      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Category tags */}
      <div className="my-3">
        {['Apartment', 'House', 'Villa'].map((cat) => (
          <button
            key={cat}
            className={`btn btn-outline-secondary btn-sm me-2 ${
              activeCategory === cat ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
        {activeCategory && (
          <button
            className="btn btn-link text-danger btn-sm"
            onClick={clearCategory}
          >
            Clear
          </button>
        )}
      </div>

      <div className="row mt-4">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <div className="col-md-3 col-sm-6 mb-4" key={property.id}>
              <div className="card property-card shadow-sm h-100">
                <img
                  src={property.image}
                  className="card-img-top"
                  alt={property.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {property.location}
                    <br />
                    <strong>Type:</strong> {property.type}
                    <br />
                    <strong>Price:</strong> KES{' '}
                    {property.price.toLocaleString()}
                  </p>
                  <Link
                    to={`/property/${property.id}`}
                    className="btn btn-primary btn-sm"
                  >
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

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="mt-4">
          <nav>
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <li
                  key={idx}
                  className={`page-item ${
                    currentPage === idx + 1 ? 'active' : ''
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Listings;
