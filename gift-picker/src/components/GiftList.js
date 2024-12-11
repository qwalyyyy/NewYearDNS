const GiftList = ({ items, onGiftClick }) => {
    return (
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="gift-card"
            onClick={() => onGiftClick(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Цена: {item.price} ₽</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default GiftList;
  