import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '../../components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Image
        src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg" 
        alt="dog"
        width={500}
        height={600} 
        // fill
        // style={{objectFit: "cover"}}
        />
        <Button>Click Me</Button>
    </div>
  )
}
