import "./../../node_modules/react-vis/dist/style.css";
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';

const Chart = ({getData}) => {

    const data = [
      {x:1, y:getData.jan},
      {x:2, y:getData.feb},
      {x:3, y:getData.march},
      {x:4, y:getData.apr},
      {x:5, y:getData.may},
      {x:6, y:getData.jun},
      {x:7, y:getData.jul},
      {x:8, y:getData.au},
      {x:9, y:getData.sep},
      {x:10, y:getData.oct},
      {x:11, y:getData.nov},
      {x:12, y:getData.dec}
    ]

    return(
        <div style={{marginTop: '15px'}}>
            <XYPlot height={400} width={500}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                {/* <LineSeries data={data} color="red"/> */}
                <LineSeries data={data} color="Green"/>
                <LineSeries data={data} color="Yellow"/>
            </XYPlot>

        </div>
    )

}

export default Chart;