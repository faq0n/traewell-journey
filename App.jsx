import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    const entryElements = data
    return (
        <>
            <Header />
            <main className="container">
             {entryElements.map(function (entry) { 
                const {img,title,country,googleMapsLink,dates,text} = entry
                return <Entry
                    img={img}
                    title={title}
                    country={country}
                    googleMapsLink={googleMapsLink}
                    dates={dates}
                    text={text} />
                })
                }
              
            </main>
        </>
    )
}