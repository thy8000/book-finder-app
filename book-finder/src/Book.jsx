export function Book(args) {
  return (
    <div>
      <strong>{args.author}</strong>
      <p>{args.content}</p>
    </div>
  );
}

export default Book;
