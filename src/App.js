import './App.css';
import { About } from './components/About';
import { Affiliate } from './components/Affiliate';
import { Analytics } from './components/Analytics';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Partner } from './components/Partner';
import { PricePlan } from './components/PricePlan';
import { Subscription } from './components/Subscription';
import { Testimonial } from './components/Testimonial';
import { Transactions } from './components/Transactions';
import { WeAccept } from './components/WeAccept';

function App() {
  return (
    <div className="App">

      <Header />

      <Analytics />

      <PricePlan />

      <About />

      <Testimonial />

      <Partner />

      <Affiliate />

      <Transactions />

      <Subscription />

      <WeAccept />

      <Footer />

    </div>
  );
}

export default App;
