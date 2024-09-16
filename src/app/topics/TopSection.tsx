import "../styles/top-section.css";
import "../effects/ripple-effect.css";
import "../effects/tear-drop-effect.css";
import Image from "next/image";

export default function TopSection() {
  return(
    <div className="top-section">
      <div className="brush-drop">
        <Image 
          className="paintbrush-image brush-after" 
          src='/paintbrush-image-edited.png' 
          alt="paintbrush image" 
          width={300} 
          height={300} 
        />
        <Image 
          className="tear-drop-image tear-drop-effect" 
          src='/tear-drop-image-edited.png' 
          alt="tear drop image" 
          width={300} 
          height={300} 
        />
      </div>
      <div className="top-section-content ripple-effect">
        <h1>Abraham V Rodriguez Rodriguez</h1>
        <h2>Front End Developer</h2>
        <Image 
          className="book-image" 
          src='/book-image.png' 
          alt="book image" 
          width={300} 
          height={300} 
        />
        <Image 
          className="chess-piece-image" 
          src='/chess-piece-knight.png' 
          alt="chess piece image" 
          width={300} 
          height={300} 
        />
        <Image 
          className="computer-pencil-image" 
          src='/computer-pencil-designs-image.png' 
          alt="computer ipad phone image" 
          width={300} 
          height={300} 
        />
        <Image 
          className="gear-image" 
          src='/gear-image.png' 
          alt="gear image" 
          width={300} 
          height={300} 
        />
      </div>
    </div>
  )
}