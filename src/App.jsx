import React from 'react';
import Card from './components/Card';
import user from './containers/data';




function App() {

  return (
    <div className='card-container'>
   
        {user.map((user) => (
          <Card
            key={user.index}
            img={user.image}
            name={user.username}
            firstName={user.firstName}
            lastName={user.lastName}
            maidenName={user.maidenName}
            dob = {user.birthDate}
            email={user.email}
            contactNumber={user.phone}
            address={user.address.address}
            city={user.address.city}
            state={user.address.state}

          />
        ))}
      </div>

  );
}

export default App;
