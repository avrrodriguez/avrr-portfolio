import "./top-section.css";
import "../effects/ripple-effect.css";
import book from '../../../images/book-image.png';
import gear from '../../../images/gear-image.png';
import chess from '../../../images/chess-piece-knight.png';
import computer from '../../../images/computer-pencil-designs-image.png';
import brush from '../../../images/paintbrush-image-edited.png';

export default function TopSection() {
  return(
    <div className="top-section ripple-effect">
      <div className="top-section-content">
        <h1>Abraham V Rodriguez Rodriguez</h1>
        <h2>Front End Developer</h2>
      </div>
      <img className="book-image" src={book.src} alt="book image"/>
      <img className="chess-piece-image" src={gear.src} alt="chess piece image"/>
      <img className="computer-pencil-image" src={chess.src} alt="computer ipad phone image"/>
      <img className="gear-image" src={computer.src} alt="gear image"/>
      <img className="paintbrush-image" src={brush.src} alt="paintbrush image"/>
    </div>
  )
}