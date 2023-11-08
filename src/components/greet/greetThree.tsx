// type GreetProps = {
//     name?: string
// }

import { GreetProps } from './greet.types'

const GreetThree = (props: GreetProps) => {
  return (
    <div>
      {/* Hello Lily */}
      Hello {props.name}
    </div>
  )
}

export default GreetThree