import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Details = () => {

    const params = useParams()
    console.log(params.id)

    const getDetails = async()=>{
        const details = await fetch(`http://localhost:5000/api/doctor/getbyid/${params.id}`)
        console.log(details)
    }

    useEffect(()=>{
        getDetails()
    })

  return (
    <div>
      
    </div>
  )
}

export default Details
