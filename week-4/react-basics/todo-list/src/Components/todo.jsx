// eslint-disable-next-line react/prop-types
const Todo = ({ key, title, description }) => (
  <li key={key}>
    <p>
      {title}: {description}
    </p>
  </li>
);

export default Todo;
