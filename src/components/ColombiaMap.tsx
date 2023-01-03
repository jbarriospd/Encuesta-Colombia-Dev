import { useState, useEffect } from 'react'
import { feature } from 'topojson-client'
import { geoPath, geoMercator } from 'd3-geo'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

import useHasMounted from '../hooks/useHasMounted'
import reportFound from '../utils/colombia-data.json'

const projection = () =>
    geoMercator()
        .scale(9000 / 2 / Math.PI)
        .center([-72, 3])
        .translate([500 / 2, 600 / 2]);

const ColombiaMap = () => {
    const [geoFile, setGeoFile] = useState([])
    const [content, setContent] = useState('')
    const hasMounted = useHasMounted()
    
    useEffect(() => {

        fetch(
            "https://raw.githubusercontent.com/sfbarrerab/TopoJSON-Colombia/main/colombia.geo.json"
        ).then((response) => {
            if (response.status !== 200) {
                console.log(`There was a problem: ${response.status}`);
                return;
            }

            response.json().then((response) => {
                const spainFeatures = feature(response, response.objects["colombia.geo"]).features
                const object = [...spainFeatures]
                const values = [...reportFound]

                object.forEach((element) => {
                    values.map((el: any) => {
                        if (el.depto === element.properties.NOMBRE_DPT) {
                            Object.assign(element.properties, el)
                        }
                        return true
                    })
                })

                setGeoFile(object)
            });
        });

    }, [reportFound])

    const tooltipText = ({ depto, total }) => {

        if (typeof total !== 'undefined') {
            return (
                <div>
                    <p className='text-white'>{depto}</p>
                    <p className='text-white'>{total}</p>
                </div>
            )
        }
        return false
    }
    return (
        <>
            <div>
                <svg width={400} height={500} viewBox="0 0 400 500">
                    <g className='COL_adm1' id="toolitpMap">
                        {geoFile.map((d, i) => {
                            const hasTotal = d.properties.total ? true : false
                            const fillColor = hasTotal === true ? 'fill-yellow-900' : 'fill-yellow-700'
                            const isIslands = i === 32 ? 'transform scale-200 stroke-current' : 'stroke-white'

                            return (
                                <path
                                    className={`${fillColor} ${isIslands}`}
                                    d={geoPath().projection(projection())(d)}
                                    key={`path-${i}`}
                                    onMouseEnter={() => setContent(tooltipText(d.properties))}
                                    onMouseLeave={() => setContent('')}
                                    strokeWidth={0.5}
                                />
                            )
                        })}
                    </g>
                </svg>
                {hasMounted && <Tooltip anchorId='toolitpMap' place='right' float>{content}</Tooltip>}
            </div>
        </>
    )
}

export default ColombiaMap