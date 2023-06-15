import React from 'react'
 import '../Styles/Landingpage.css'
// import '../Styles/ToDoList.css'

// rfec for auto generate code
function Header() {
  return (
    <>
    <div className='header'>
        <nav>
            <ul>
                <li><img src='https://media.istockphoto.com/id/1137971264/vector/airplane-fly-out-logo-plane-taking-off-stylized-sign.jpg?s=612x612&w=0&k=20&c=TH1vDs4wmGnfWapq_e1XYxqzQV_qxaF4_aJWoDJyKNI=' alt=''></img></li>
                <li><a href='#home'>Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Flights</a></li>
                <li><a href="">Discounts</a></li>
            </ul>
        </nav>
        <button>Book Tickets</button>
    </div>
    </>
  )
}

export default Header