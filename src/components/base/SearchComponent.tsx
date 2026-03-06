import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group"
import { Search } from "lucide-react"

interface Props {
  value: string
  onChange: (value: string) => void
  resultsCount?: number
  placeholder?: string
  result?: string
}

function SearchComponent({
  value,
  onChange,
  resultsCount,
  placeholder = "Search...",
  result = "results"
}: Props) {
  return (
    <InputGroup>
      <InputGroupInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      <InputGroupAddon>
        <Search />
      </InputGroupAddon>

      {resultsCount !== undefined && (
        <InputGroupAddon align="inline-end">
          <span>{resultsCount}</span> <span>{result}</span>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}

export default SearchComponent
