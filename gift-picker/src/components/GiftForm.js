import React, { useState } from 'react';

const GiftForm = ({ onSearch }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      category,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      sortBy,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Категория:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Введите категорию"
        />
      </div>
      <div>
        <label>Минимальная цена:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Максимальная цена:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Сортировать по:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="price-asc">Цена (возрастание)</option>
          <option value="price-desc">Цена (убывание)</option>
        </select>
      </div>
      <button type="submit">Найти подарки</button>
    </form>
  );
};

export default GiftForm;
