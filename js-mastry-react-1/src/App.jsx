import {useState, useEffect} from 'react'
import './App.css'

const App = () => {
    return (<div className='card-container '>
            <Card title="One"/>
            <Card title="Two"/>
            <Card title="Three"/>
        </div>
    )
}

const Card = ({title}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likedUnlikedCount, setLikedUnlikedCount] = useState(0);

    useEffect(() => {
        console.log(`${title} has been liked/unliked ${likedUnlikedCount} times`)
    },[isLiked]);
    useEffect(()=>{                     // will run only on the rendering of the component due to empty dependency array
        console.log(`card title:${title} rendered`);
    },[]);

    return <div className='card'>
        <h2>{title}</h2>
        <button onClick={() => {
            setIsLiked(!isLiked);

            // setLikedUnlikedCount(1+likedUnlikedCount)
            //   the above is not correct way to update the state, we should use the below approach passing the callback function
            //   that accepts the current state and then updates it, React state updates are asynchronous and batched.
            // In above approach the value of  likedUnlikedCount inside your function is not
            //   guaranteed to be the latest when multiple updates happen quickly.
            setLikedUnlikedCount((likedUnlikedCount) => {
                return 1 + likedUnlikedCount
            })

        }}>{!isLiked ? 'Like' : 'Unlike'}</button>
    </div>
}
export default App
