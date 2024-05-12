import AnimatedImage from '../components/AnimatedImage';
import ImagesLocal from '../images';

export default function Chamba() {
  var animal = ImagesLocal.getAnimal();
  return (
    <div className="Chamba-Div">
      <AnimatedImage image={animal.img} alt={animal.name} animation='Rotate-IMG'/>
      <p>Chambiado pe</p>
    </div>
  )
}