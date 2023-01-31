

import Answers from '../Answers/Answers';
import Contact from '../Contact/Contact';
import Directions from '../Directions/Directions';
import Expert from '../Expert/Expert';
import Find from '../Find/Find';
import Intro from '../Intro/Intro';
import Offer from '../Offer/Offer';
import Possibility from '../Possibility/Possibility';
import Stories from '../Stories/Stories';

function Main() {
  return (
    <div className="App">
      <Intro />
      <Possibility />
      <Find />
      <Expert />
      <Directions />
      <Offer />
      <Contact />
      <Stories />
      <Answers />
    </div>
  );
}

export default Main;
