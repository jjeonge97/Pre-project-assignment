import styled from 'styled-components';

const Form = styled.form`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 30rem;
  height: 50px;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 15rem;
    font: inherit;
    padding: 0.5rem;
    max-width: 100%;
    border-radius: 6px;
    border: none;
  }

  button {
    font: inherit;
    cursor: pointer;
    color: white;
    background-color: #40005d;
    border: none;
    border-radius: 12px;
    padding: 1rem 2rem;
    margin-right: 1rem;
  }
`;

const InputForm = () => {
  return (
    <Form>
      <div>
        <input type="text" />
      </div>
      <button type="submit">등록</button>
    </Form>
  );
};

export default InputForm;
