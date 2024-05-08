export default function RotateImage({image, alt}: {image: string, alt: string}) {
    return <img src={image} className="Rotate-IMG" alt={alt} />;
}