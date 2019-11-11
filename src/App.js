import React from 'react';
import './App.css';

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <div className="person">
      <img src={url} alt="img"/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  )
}

const PersonList = () => {

  const people = [
    {
      img: 10,
      name: 'John',
      job: 'Developer'
    },
    {
      img: 11,
      name: 'Doe',
      job: 'Designer'
    },
    {
      img: 14,
      name: 'Jovan',
      job: 'Fullstack Developer'
    },
    {
      img: 25,
      name: 'Jov',
      job: 'Singer'
    }
  ]

  return(
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[3]} />
      <Person person={people[2]} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo minima odio eos possimus, suscipit aut obcaecati deserunt a delectus repellendus sunt reiciendis rerum exercitationem, iure ad eius hic? In.
      </Person>
    </section>
  )
}

const App = () => (<PersonList />)

export default App;
