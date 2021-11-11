import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_SESSION_CARD } from '../utils/mutations';
import { QUERY_GETSESSIONCARD, QUERY_GETUSER } from '../utils/queries';

import Auth from '../utils/auth';


const ActiveSessionCard = () => {
  const [var1, setvar1] = useState('');
//   const [count1, setCount1] = useState(0);

  const user = useMutation(QUERY_GETUSER)

  const [createSessionCard, { error }] = useMutation(CREATE_SESSION_CARD, {
    update(cache, { data: { createSessionCard } }) {
      
    try {
        const { activeSessions } = cache.readQuery({ query: QUERY_GETSESSIONCARD });

        cache.writeQuery({
          query: QUERY_GETSESSIONCARD,
          data: { cardInfo: { createSessionCard, ...activeSessions} },
        });
    } 

    catch (e) {
        console.error(e);
    }
    }
  });



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createSessionCard({
        variables: {
            var1,
            user
        },
      });

      setvar1('');
    } catch (err) {
      console.error(err);
    }
  };


  

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'thoughtText' && value.length <= 280) {
//         setvar1(value);
//         setCount1(value.length);
//     }
//   };





  return (
    <div>
      <h3>Active Session</h3>

      {Auth.loggedIn() ? (
        <>
          {/* <p
            className={`m-0 ${
                count1 === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {count1}/280
          </p> */}
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={var1}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                // onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ActiveSessionCard;
