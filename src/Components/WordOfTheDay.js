
import { useState, useEffect } from "react"


export default function WordOfTheDay(){

    const [data, setData] = useState({})

    useEffect(()=>{
        const url = "https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://wordsmith.org/awad/rss1.xml";
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data.items)
                setData(data.items[0])
            }).catch(err=>{
                console.log(err)
            }
        )
    },[])
    return (
        <section className="section word-of-the-day">
            <div className="container pb-5 pt-5">
                <div className="card shadow bg-light mt-5 mb-5">
                    {data&& 

                  
                        <div>
                            <div className="card-header text-center">
                                <h4>{data.title}</h4>
                            </div>
                            <div className="card-body text-center">
                                {data.description}
                            </div>
                        </div>
                        
                    }
                    
                </div>
            </div>
        </section>
    )
}