
import './App.css'
import Card from './companets/Card'



function App() {

  return (

    <div>
    <div className="body">
         <h1>Product</h1>
        <div className='ota'>
         <Card></Card>
         <Card bg=' #5CA7FF; ' btn='#FFC700'> </Card>
         <Card bg=' #D083FF; ' btn='#00FFB2'></Card> 
          <Card  bg=' #FF99E2; ' btn='#FFF500'></Card>
         <Card  bg=' #D083FF; ' btn='#00FFB2'> </Card>
         <Card  bg=' #5CFF62; ' btn='#FFF500'></Card>
        </div>
        </div>
    </div>
  )
}

export default App
