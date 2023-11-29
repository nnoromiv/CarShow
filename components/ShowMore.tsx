"use client"

import { ShowMoreProps } from "@/types"
import { CustomButton } from "."
import { updateSearchParams } from "@/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const [load, setLoad] = useState(false)
    const router = useRouter()
    
    const handleNavigation = () => {
        setLoad(true)
        try {
            const newLimit = (pageNumber + 1) * 10
            const newPathName = updateSearchParams("limit", `${newLimit}`)
    
            router.push(newPathName, {scroll: false})
        } catch (error) {
            console.log(error)
        } finally {
            setLoad(false)
        }
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNext && !load ? 
                (
                    <CustomButton
                        title="Show More"
                        btnType="button"
                        containerStyles="bg-primary-blue rounded-full text-white"
                        handleClick={handleNavigation}
                    />
                ) :
                (
                    <CustomButton
                        title="Loading..."
                        btnType="button"
                        containerStyles="bg-primary-blue-100 rounded-full text-white"
                        isDisabled={true}
                    />
                )
            }
        </div>
  )
}

export default ShowMore