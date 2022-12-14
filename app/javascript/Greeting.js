import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './redux/helloReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greet);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div class="container">
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;