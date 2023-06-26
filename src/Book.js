const Book = ({ author, title, img, getBook, id, number }) => {
  return (
    <article className="book">
      <span className="number">#{number + 1}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
      <div>
        <button
          style={{ margin: '0.5rem 0' }}
          onClick={() => console.log(title)}
        >
          display title
        </button>
      </div>
      <div>
        <button onClick={() => getBook(id)}>get book</button>
      </div>
    </article>
  );
};

export default Book;
