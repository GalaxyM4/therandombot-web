import RotateImage from '../components/RotateImage';
import ImagesLocal from '../images';
import { randomItem } from '../ts/utils';

export default function Chamba() {
  var animals = ImagesLocal.getAnimalArray();
  return (
    <div className="Chamba-Div">
      <RotateImage image={randomItem(animals)} alt='animal'/>
      <p>Chambiado pe</p>
    </div>
  )
}