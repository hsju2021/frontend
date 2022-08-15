import Head from '../components/Head';
import Footer from '../components/Footer';
import './ArtistPage.css'

var followers = 134;

const ArtistPage = () => {
  return (
    <>
      <Head />
      <div className='artist-profile-pic'>
        <img src='./Doge.webp.png' alt='profile-pic' />
      </div>
      <h2>Artist Name Here</h2>
      <p>{followers} followers</p>
      <div className='edit-button'>edit</div>
      <div className='artist-profile-intro'>dogecoin is scam</div>
      <div className='artist-consumer-switch'><strong>Artist</strong> Consumer</div>
      <div className='artist-following'>
        <h1>Following</h1>
        <div className='artist-following-carousel'></div>
      </div>
      <div className='my-things'>
        <h1>My Things</h1>
        <div className='my-things-carousel'></div>
      </div>
      <Footer />
    </>
  );
}

export default ArtistPage;