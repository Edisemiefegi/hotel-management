import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { Search } from 'lucide-react'
function SearchComponent() {
  return (
    <div>
      <InputGroup>
      <InputGroupInput placeholder='Search...'/>
      <InputGroupAddon>
      <Search/>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default SearchComponent