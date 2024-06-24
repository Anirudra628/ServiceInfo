import Service from "./Service"
import "./OurServices.css"
import { useEffect, useState   } from "react"
import { createContext } from "react";
import ServiceDetails from "./ServiceDetails";

export const ServiceContext = createContext();

const OurServices = (props) => {
    const [servicedetails, setservice] = useState(true);
    const [state, setState] = useState("");

    const renderservicedetails = () => {
        setservice(!servicedetails);
    }

    useEffect(()=>{
        getallservices();
    },[])

    let [objList, setobjList] = useState([1, 2]);
    let [obj,setobj] = useState("");
    let temp = [];

    const getallservices = async () => {
        var service = await fetch("http://localhost:3000/geteachservice");
        let parseddata = await service.json();
        parseddata.forEach(element => {
            temp.push(element);
            setobjList(temp);
            //setobj(temp);
            console.log(element);
        });


    };
    

    //if (servicedetails)
    return (
        <ServiceContext.Provider value = {objList}>
        <div className="servises">
            <h2>Our Services</h2>
            <div className="servisesContainer">
                {
                    objList.map((ele) => {
                        return <Service title={ele.title} description={ele.description} 
                        obj = {ele} />
                    })

                }

            </div>
        </div>
        </ServiceContext.Provider>
    )
}
export default OurServices