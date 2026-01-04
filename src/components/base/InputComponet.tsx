import { Input } from '../ui/input'
interface Props {
    label?: string
}
function InputComponet({label}: Props) {
  return (
    <div className='space-y-1'>
        <label className='text-sm text-gray-700' >{label}</label>
        <Input/>
    </div>
  )
}

export default InputComponet