import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import RightSidebar from "../../components/RightSidebar"
import Feed from "../../components/Feed"
import LeftSidebar from "../../components/LeftSidebar"


const Search = () => {
    useEffect(() => {
        document.title = "Haruka - Search results"
    }, [])


    return (
        <>
            <Navbar />
            <Grid
                gridTemplateColumns="22vw auto 24vw"
                columnGap="2rem"
                marginLeft="1rem"
                marginRight="1rem"
            >
                <RightSidebar />
                <Feed
                    isExplore={false}
                    isLibrary={false}
                    isYourPosts={false}
                    isSearch={true}
                    isProfile={false}
                    isFollower={false}
                />
                <LeftSidebar />
            </Grid>
        </>
    )
}

export default Search