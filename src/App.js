
import { useState } from 'react';
import ExpandedSection from './components/ExpandedSection';
import QuoteSection from './components/QuoteSection';
import WelcomeSection from './components/WelcomeSection';
import './Sass/App.scss'

function App() {
  const [loading,setLoading] = useState(false)
  
  if (loading) {
    return (
      <div className="App"><p>Loading...</p></div>
    )
  }
  
  return (
    <div className="App">
      <QuoteSection />
      <WelcomeSection />
      <ExpandedSection/>
      {/* <h1>Lorem</h1>
      <h2>Lorem ipsum dolor sit</h2>
      <h3>Lorem ipsum dolor ist amet</h3>
      <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</h4>
      <h5>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</h5>
      <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</h6>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p> */}
    </div>
  );
}

export default App;
