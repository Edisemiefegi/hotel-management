import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
interface Props {
    label?: string
    className?: string
}
function InputComponet({label, className}: Props) {
  return (
    <div className={cn(className, 'space-y-1 text-gray-700')}>
        <label className='text-sm ' >{label}</label>
        <Input/>
    </div>
  )
}

export default InputComponet