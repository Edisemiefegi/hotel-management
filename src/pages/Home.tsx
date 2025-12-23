import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"



function Home() {
  return (
    <div  className="p-8">
   <Button>
    <Link to={'/admin/dashboard'}>Admin</Link>
   </Button>
    </div>
  )
}

export default Home