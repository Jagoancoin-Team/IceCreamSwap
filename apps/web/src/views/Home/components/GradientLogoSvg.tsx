import Image, { ImageProps } from 'next/image'
import ice from '../../../../public/images/icecream.png'

const GradientLogo: React.FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => {
  return <Image src={ice} alt="DynastySwap" {...props} />
}

export default GradientLogo
