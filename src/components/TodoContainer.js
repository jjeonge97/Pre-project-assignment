import styled from 'styled-components';
import InputForm from './inputForm';
import Todo from './TodoList';

const TodoContainer = styled.div`
  width: 50rem;
  height: 500px;
  background-color: beige;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoList = () => {
  return (
    <TodoContainer>
      <InputForm />
      <Todo />
    </TodoContainer>
  );
};

export default TodoList;
