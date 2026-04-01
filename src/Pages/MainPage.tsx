import Typing from '../Elements/intro.tsx';

const MainPage: React.FC = () => {
    return (
        <>
        <h1 className='title'>hey, I'm Pieter</h1>
        <p className='small'>(i like c#)</p>
        <div id='intro'><Typing></Typing></div>
        <div className="card">
            <p>currently working on <a className='qt-link' href="https://quiztocht.com/">Quiztocht</a></p>
            <p>interested in game design and UI/UX</p>
        </div>
        </>
    )
}

export default MainPage;
