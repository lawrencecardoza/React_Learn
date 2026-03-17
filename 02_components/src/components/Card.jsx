function Card(props){

    return (
        <div className='card'>
             <img src={props.img} alt="img" />
              <h1>{props.user},{props.age}</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tempora velit aliquid fuga.</p>
              <button>View Profile</button>
            </div>
    )
}

export default Card