import React, { useState, useEffect } from 'react';
import GiftForm from './components/GiftForm';
import GiftModal from './components/GiftModal';
import GiftList from './components/GiftList';
import './styles/App.css';

const mockGifts = [
  {
    id: 1,
    name: 'Новогодний Подарок 1',
    price: 5000,
    image: 'https://via.placeholder.com/200',
    link: 'https://example.com',
  },
  {
    id: 2,
    name: 'Новогодний Подарок 2',
    price: 1200,
    image: 'https://via.placeholder.com/200',
    link: 'https://example.com',
  },
  {
    id: 3,
    name: 'Новогодний Подарок 3',
    price: 1500,
    image: 'https://via.placeholder.com/200',
    link: 'https://example.com',
  },
  {
    id: 4,
    name: 'Новогодний Подарок 4',
    price: 3000,
    image: 'https://via.placeholder.com/200',
    link: 'https://example.com',
  },
];

function App() {
  const [filteredGifts, setFilteredGifts] = useState(mockGifts);
  const [selectedGift, setSelectedGift] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    createSnowflakes();
  }, []);

  const handleSearch = (criteria) => {
    setIsLoading(true);
    setTimeout(() => {
      const { category, minPrice, maxPrice, sortBy } = criteria;
      let result = mockGifts.filter((gift) => {
        const matchesCategory =
          category === '' || gift.name.toLowerCase().includes(category.toLowerCase());
        const matchesPrice =
          (!minPrice || gift.price >= minPrice) &&
          (!maxPrice || gift.price <= maxPrice);
        return matchesCategory && matchesPrice;
      });

      // Сортировка по цене
      if (sortBy === 'price-asc') {
        result = result.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-desc') {
        result = result.sort((a, b) => b.price - a.price);
      }

      setFilteredGifts(result);
      setIsLoading(false);
    }, 1000); // Имитируем задержку
  };

  const openModal = (gift) => {
    setSelectedGift(gift);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGift(null);
    setIsModalOpen(false);
  };

  // Создание снежинок
  const createSnowflakes = () => {
    const container = document.querySelector('.snowflakes');
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // От 5 до 8 секунд
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      snowflake.innerText = '❄️';
      container.appendChild(snowflake);
    }
  };

  return (
    <div className="app-container">
      <div className="garland"></div> {/* Гирлянда */}
      <div className="snowflakes"></div> {/* Снежинки */}
      <h1>Новогодний сервис подбора подарков</h1>
      <GiftForm onSearch={handleSearch} />
      {isLoading ? (
        <div className="loading">Загрузка...</div>
      ) : (
        <GiftList items={filteredGifts} onGiftClick={openModal} />
      )}
      <GiftModal isOpen={isModalOpen} onClose={closeModal} gift={selectedGift} />
    </div>
  );
}

export default App;
